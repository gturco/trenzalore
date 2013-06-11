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

def main(xgmml_file, outfh):
    outfile = open(outfh,"wb")
    cyto = Element(xgmml_file)
    jsonformat = {"nodes":cyto.njson, "edges":cyto.ejson}
    jsonformated =  json.dumps(jsonformat,indent=4)
    outfile.write(jsonformated)

main("fe_minus_subset_stric_arrow.xgmml", "element.json")
