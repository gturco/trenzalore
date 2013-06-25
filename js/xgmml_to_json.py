#pip install beautifulsoup4
### http://cytoscape.github.io/cytoscape.js/#notation/elements-json
### https://github.com/bendtherules/GSOC_13/blob/master/nnf_and_sif_to_json_py/result.json
from bs4 import BeautifulSoup
import json
import random
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
        self.nodeline = {"data" : {"id": self.cid, "name": self.name, "faveColor": self.faveColor},  "position": {"x": self.x, "y": self.y}}
          

class EdgeLine(object):
    _slots_ = ("name","target","source","group","faveColor","classes","size")

    def __init__(self, xline):
        self.group = "edge"
        self.name = xline.get("label")
        self.source = xline.get("source")
        self.target = xline.get("target")
        self.faveColor, self.classes = get_estyle(xline)
        self.size = get_size(xline)
        self.edgeline = { "data": {"id": self.name, "source": self.source, "line-width": self.size,  "target": self.target}}


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


def stress(cyto_d,cytoid,stress,stress_dic):
        try:
           match_id = stress_dic[cytoid]
           cyto_d[cytoid]['data'][stress] = 1
           #if 'sign' in list(match_id.keys()):
           #    cyto_d['data']['sign'] = match_id['data']['sign']
        except KeyError:
            cyto_d[cytoid]['data'][stress] = 0
 

def main(xgmml_file,fe_file, nacl_file, outfh):
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
        stress(cyto_d,cytoid,"fe",fe_d)
        stress(cyto_d,cytoid,"nacl",nacl_d)
        if "position" in cyto_d[cytoid].keys():
            nodelines.append(cyto_d[cytoid])
        else:
            edgelines.append(cyto_d[cytoid])

    jsonformat = {"nodes": nodelines, "edges": edgelines}
    jsonformated =  json.dumps(jsonformat,indent=4)
    outfile.write(jsonformated)

main("/Users/gturco/code/Brady/network/06-24-13/CytoscapeSession-2013_06_21-15_51/Sheet1.xgmml","/Users/gturco/Desktop/MallorieData_New/CytoscapeSession/nacl_subset_stric_arrow.xgmml","/Users/gturco/Desktop/MallorieData_New/CytoscapeSession/fe_minus_subset_stric_arrow.xgmml", "test.json")

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



#.slector('edge.stress')
#    .css({
#        'line-color': mapData(weight, 0, 100, arrow, tee)
#        'target-arrow-shape': mapData(weight, 0, 100, blue, red)
#        })
# var non_nacl = cy.elements("node[stress != 'nacl']")
# var non_fe = cy.elements("node[stess != 'fe']")

## upon clicking
## cy.remove(non_fe)
## color edge stress class for nacl collections

