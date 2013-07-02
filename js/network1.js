
$(document).ready(function(){
  $("#fe-link").click(
  function(){
    var fe_stress = cy.elements("node[fe = 0]");
    cy.remove(fe_stress);
    cy.style()
//    .resetToDefault() // start a fresh default stylesheet

       .selector('edge')
          .css({'line-color':'mapData(fesign,7,15,grey,red)', 'target-arrow-shape': 'mapData(fesign,6,15,blue,red)',})
     
.update()
  }
);

  $("#nacl-link").click(
    function(){
    var nacl_stress = cy.elements("node[nacl = 0]")
     cy.remove(nacl_stress);
    cy.style()
//    .resetToDefault() // start a fresh default stylesheet

       .selector('edge')
          .css({'line-color':'mapData(fesign,7,15,grey,red)', 'target-arrow-shape': 'mapData(fesign,6,15,blue,red)',})
     
.update();
  }
 );

});



$.get("test.json",
   function(data) {
     console.log(data);
     loadCytoGraph(data);
   }, "json");

function loadCytoGraph(xylem_all){
$('#cy').cytoscape({
  layout: {
    name: 'preset',
    fit: true,
    padding: [ 50, 50, 50, 50 ]
 },
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'shape': 'data(faveShape)',
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': '#000000',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'width': 'data(line-width)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: xylem_all,
  
  ready: function(){
    window.cy = this;
    
    $('#search-box').keyup(function(){
      var gene_name = $(this).val();
      if (gene_name == 'Enter Gene Name'){
        return }
      else if (gene_name == ''){
        cy.elements().removeClass('faded')}
      else {
        var node = cy.elements("node[name='"+ gene_name + "']");
        highlightNetwork(node);
        loadGeneName(node);
      }
      }).keyup();

    cy.elements().unselectify();
    
    cy.on('tap', 'node', function(e){
      var node = e.cyTarget;
      highlightNetwork(node);
      loadGeneName(node);
     });
    
    cy.on('tap', function(e){
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');

          }
    });

    function highlightNetwork(node){
        var neighborhood = node.neighborhood().add(node);
        console.log(node.element().data().name)
        cy.elements().addClass('faded');
        neighborhood.removeClass('faded'); }

    function loadGeneName(node){
      var gene_name = (node.element().data().name);
      alert(gene_name);
  }

  }
});
}
