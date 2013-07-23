#pip install beautifulsoup4
### http://cytoscape.github.io/cytoscape.js/#notation/elements-json
### https://github.com/bendtherules/GSOC_13/blob/master/nnf_and_sif_to_json_py/result.json
from bs4 import BeautifulSoup
import json
import random
from collections import OrderedDict



def get_nstyle(xline):
    color_dic = { "#33ff00" : "KNA7 Root Coexpressed",
            "#0033ff" : "Cellulose Biosynthesis",
            "#33ccff" : "Cellulose Coexpressed",
            "#ff00cc" : "HD-ZIP III",
            "#ff0000" : "Lignin",
            "#9900ff" : "Secondary Cell Wall TF",
            "#ff9900" : "Xylan",
            "#cc99ff" : "None",
            "#ffff00" : "Xylan"
            }

    style = xline.find_all("graphics")
    faveColor = style[0].get("fill")
    x = style[0].get("x")
    y = style[0].get("y") 
    try:
	return float(x),float(y), faveColor, color_dic[faveColor]
    except TypeError:
	return x,y,faveColor,color_dic[faveColor]

def get_estyle(xline):
    style = xline.find_all("graphics")
    faveColor = style[0].get("fill")
    targetarrow = style[0].get("cy:targetarrow")
    if targetarrow is None:
        targetarrow = 7
    return faveColor, targetarrow

def get_size(xline):
    atts = xline.find_all("att")
    size_line = atts[1].get("value")
    return size_line


class NodeLine(object):
    _slots_ = ("id","name","x","y","group","faveColor", "type")

    def __init__(self, xline):
        self.group = "nodes"
        self.cid = xline.get("id")
        self.name = xline.get("label")
        self.x, self.y, self.faveColor, self.node_type  = get_nstyle(xline)
        self.nodeline = {"data" : {"id": self.cid, "name": self.name, "faveColor": self.faveColor, "node_type": self.node_type},  "position": {"x": self.x, "y": self.y}}
          

class EdgeLine(object):
    _slots_ = ("name","target","source","group","faveColor","classes","size")

    def __init__(self, xline):
        self.group = "edge"
        self.name = xline.get("label")
        self.source = xline.get("source")
        self.target = xline.get("target")
        self.faveColor, self.sign = get_estyle(xline)
        self.size = get_size(xline)
        self.edgeline = { "data": {"id": self.name, "source": self.source, "line-width": self.size,  "target": self.target, "fesign": self.sign, "naclsign": self.sign}}


class Element(object):

    def __init__(self,filename):
        self.filename = filename
        self.nodes = []
        self.edges = []

        fh = open(filename)
        xgmml = fh.read()
        soup = BeautifulSoup(xgmml)
        for nline in soup.find_all("node"):
            node = NodeLine(nline)
            self.nodes.append(node)

        for eline in soup.find_all("edge"):
            edge = EdgeLine(eline)
            self.edges.append(edge)


    def get_dic(self):
        n_dic = dict((n.cid, n.nodeline) for i,n in enumerate(self.nodes))
        e_dic = dict((e.name, e.edgeline) for i,e in enumerate(self.edges))
        return dict(n_dic.items() + e_dic.items())


def stress(key,stress,stress_dic):
        try:
           cytoid = key['data']['id']
           match_id = stress_dic[cytoid]
           key['data'][stress] = 1
           if '{0}sign'.format(stress) in list(match_id['data'].keys()):
               key['data']['{0}sign'.format(stress)] = int(match_id['data']['{0}sign'.format(stress)])
               return key
           else: return key
        except KeyError:
            key['data'][stress] = 0
            return key

def main(xgmml_file,nacl_file, fe_file, outfh):
    outfile = open(outfh,"wb")
    cyto = Element(xgmml_file)
    nodelines = []
    edgelines = []
    cyto_d = cyto.get_dic()
    fe_cyto = Element(fe_file)
    fe_d = fe_cyto.get_dic()
    nacl_cyto = Element(nacl_file)
    nacl_d = nacl_cyto.get_dic()

    for cytoid in cyto_d:
        cyto_d_fe = stress(cyto_d[cytoid],"fe",fe_d)
        cyto_d_nacl = stress(cyto_d_fe,"nacl",nacl_d)
        if "position" in cyto_d_nacl.keys():
            nodelines.append(cyto_d_nacl)
        else:
            edgelines.append(cyto_d_nacl)

    jsonformat = {"nodes": nodelines, "edges": edgelines}
    jsonformated =  json.dumps(jsonformat,indent=4)
    outfile.write(jsonformated)

main("/Users/gturco/Desktop/MallorieData_New/CytoscapeSession/Sheet1.xgmml","/Users/gturco//Desktop/mallorie/stelexylem/MallorieData/Cytoscape_data/nacl_subset_stric_arrow_web.xgmml","/Users/gturco/Desktop/mallorie/stelexylem/MallorieData/Cytoscape_data/fe_minus_subset_stric_arrow_web.xgmml", "test.json")

