#pip install beautifulsoup4
### http://cytoscape.github.io/cytoscape.js/#notation/elements-json
### https://github.com/bendtherules/GSOC_13/blob/master/nnf_and_sif_to_json_py/result.json
from bs4 import BeautifulSoup
import json
from collections import OrderedDict



def get_position(xline):
    position = xline.find_all("graphics")
    x = position[0].get("x")
    y = position[0].get("y") 
    return x,y


class NodeLine(object):
    _slots_ = ("id","name","x","y","group")

    def __init__(self, xline):
        self.group = "nodes"
        self.cid = xline.get("id")
        self.name = xline.get("label")
        self.x, self.y = get_position(xline)


class EdgeLine(object):
    _slots_ = ("name","target","source","x","y","group")

    def __init__(self, xline):
        self.group = "edge"
        self.name = xline.get("label")
        self.source = xline.get("source")
        self.target = xline.get("target")
        self.x, self.y = get_position(xline)



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
            nodes = {"data" : {"id": node.cid, "name": node.name}, "position": {"x": node.x, "y": node.y}}
            self.njson.append(nodes)


        for eline in soup.find_all("edge"):
            edge = EdgeLine(eline)
            edges = { "data": {"id": edge.name, "source": edge.source, "target": edge.target}}
            self.ejson.append(edges)

def main(xgmml_file, nodefh, edgefh):
    nodefile = open(nodefh,"wb")
    edgefile = open(edgefh,"wb")
    cyto = Element(xgmml_file)
    nodefile.write(json.dumps(cyto.njson,indent=4))
    edgefile.write(json.dumps(cyto.ejson,indent=4))

main("fe_minus_subset_stric_arrow.xgmml", "node.json", "edge.json")

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
