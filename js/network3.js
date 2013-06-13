$.get("elements.json",
   function(data) {
     console.log(data);
     loadCytoGraph(data);
   }, "json");

function loadCytoGraph(elements){
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
        'text-outline-color': 'data(faveColor)',
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
        'width': 'mapData(strength, 70, 100, 2, 6)',
        'target-arrow-shape': 'triangle',
        'source-arrow-shape': 'circle',
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: elements,
  
  ready: function(){
    window.cy = this;
    
    // giddy up

    cy.elements().unselectify();
    
    cy.on('tap', 'node', function(e){
      var node = e.cyTarget; 
      var neighborhood = node.neighborhood().add(node);
      
      cy.elements().addClass('faded');
      neighborhood.removeClass('faded');
    });
    
    cy.on('tap', function(e){
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');

          }
    });   
  }
});
}


