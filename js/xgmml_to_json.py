#pip install beautifulsoup4
### http://cytoscape.github.io/cytoscape.js/#notation/elements-json
### https://github.com/bendtherules/GSOC_13/blob/master/nnf_and_sif_to_json_py/result.json
from bs4 import BeautifulSoup
import json
from collections import OrderedDict



def get_nstyle(xline):
    style = xline.find_all("graphics")
    faveColor = style[0].get("fill")
    x = style[0].get("x")
    y = style[0].get("y") 
    try:
	return float(x),float(y), faveColor
    except TypeError:
	return x,y,faveColor

def get_estyle(xline):
    style = xline.find_all("graphics")
    faveColor = style[0].get("fill")
    targetarrow = style[0].get("cy:targetarrow")
    
    return faveColor, targetarrow

def get_size(xline):
    atts = xline.find_all("att")
    size_line = atts[1].get("value")
    return size_line


class NodeLine(object):
    _slots_ = ("id","name","x","y","group","faveColor")

    def __init__(self, xline):
        self.group = "nodes"
        self.cid = xline.get("id")
        self.name = xline.get("label")
        self.x, self.y, self.faveColor = get_nstyle(xline)


class EdgeLine(object):
    _slots_ = ("name","target","source","group","faveColor","classes","size")

    def __init__(self, xline):
        self.group = "edge"
        self.name = xline.get("label")
        self.source = xline.get("source")
        self.target = xline.get("target")
        self.faveColor, self.classes = get_estyle(xline)
        self.size = get_size(xline)

class Element(object):

    def __init__(self,filename):
        self.filename = filename
        self.njson = []
        self.ejson = []

        fh = open(filename)
        xgmml = fh.read()
        soup = BeautifulSoup(xgmml)

        for nline in soup.find_all("node"):
            node = NodeLine(nline)
            ## need to use double brackets with bracket
            nodes = {"data" : {"id": node.cid, "name": node.name, "faveColor": node.faveColor}, "position": {"x": node.x, "y": node.y}}
            self.njson.append(nodes)


        for eline in soup.find_all("edge"):
            edge = EdgeLine(eline)
            if edge.classes in ["6","15"]:
                if edge.classes == "6":
                    edges = { "data": {"id": edge.name, "source": edge.source, "target": edge.target, "faveColor": edge.faveColor, "line-width" : edge.size, "classes": "pos"}}
                elif edge.classes == "15":
                    edges = { "data": {"id": edge.name, "source": edge.source, "target": edge.target, "faveColor": edge.faveColor, "line-width": edge.size, "classes": "neg"}}
            else:
                edges = { "data": {"id": edge.name, "source": edge.source, "line-width": edge.size,  "target": edge.target}}
            self.ejson.append(edges)

def main(xgmml_file, outfh):
    outfile = open(outfh,"wb")
    cyto = Element(xgmml_file)
    jsonformat = {"nodes":cyto.njson, "edges":cyto.ejson}
    jsonformated =  json.dumps(jsonformat,indent=4)
    outfile.write(jsonformated)

main("/Users/gturco/code/Brady/network/06-24-13/CytoscapeSession-2013_06_21-15_51/Sheet1.xgmml", "test.json")

### edges
###target-arrow-shape
### need to create a class at the top.....
#### need negative class with inhbit signal
#### need postive class with arraow signal

#### edge
#### faveColor: '#6FB1FC' (in Data)
### classes: 'neg' (in Data)
### need to create stylesheets at top....
### graphics fill and target (either 6 or 15)


### nodes
### faveColor: '#6FB1FC' (in data section)
### faveShape 
### graphics color
