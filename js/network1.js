
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

    function highlightNetwork(node){
      //fade all genes not assocated with selected node
        var neighborhood = node.neighborhood().add(node);
        cy.elements().addClass('faded');
        neighborhood.removeClass('faded'); }

    function loadGeneName(node){
      //find name of selected node and display in gene_name tag
      var gene_name = (node.element().data().name);
      var neighborhood = node.neighborhood();
      $.each(neighborhood, function(i,n) {
            var ele = n.element().data();
            console.log(ele.name, ele.faveColor);
      });
      
      
      $('#gene_name').html(gene_name); }

    $('#search-box').keyup(function(){
      // highlight the gene entered in the search box and displays it in the key
      var gene_name = $(this).val();
      if (gene_name == 'Enter Gene Name'){
        return }
        // if default text function stops here
      else if (gene_name == ''){
        cy.elements().removeClass('faded')}
        // if no text function removes the faded class from all genes
      else {
        var node = cy.elements("node[name='"+ gene_name + "']");
        highlightNetwork(node);
        loadGeneName(node);
      }
      }).keyup();

    cy.elements().unselectify();
    
    cy.on('tap', 'node', function(e){
      // when click on the gene highlights other connected genes and loads in key
      var node = e.cyTarget;
      highlightNetwork(node);
      loadGeneName(node);
     });


    cy.on('tap', function(e){
      // when tap background removed fadedness from all genes
      if( e.cyTarget === cy ){
        cy.elements().removeClass('faded');

          }
    });

   var non_fe;
   $("#fe-link").click(
   function(){
   // remove all genes not affected by fe
    if ($("#fe-link").is(':checked')){
      var fe_stress = cy.elements("node[fe = 0]");
      non_fe = cy.remove(fe_stress);
      cy.style()
      .selector('edge')
      // color edges based on pos or neg correlations
      .css({'line-color':'mapData(fesign,7,15,grey,red)', 'target-arrow-shape': 'mapData(fesign,6,15,blue,red)',})
      .update()
    } else {
      cy.add(non_fe);
    }
  }
  );


    var non_nacl;
    $("#nacl-link").click(
    function(){
    // remove all genes not affected by nacl
      if ($('#nacl-link').is(':checked')){
        var nacl_stress = cy.elements("node[nacl = 0]");
        non_nacl = cy.remove(nacl_stress);
        cy.style()
        .selector('edge')
        // color edges based on pos or neg correlations
        .css({'line-color':'mapData(fesign,7,15,grey,red)', 'target-arrow-shape': 'mapData(fesign,6,15,blue,red)',})
        .update();
      } else {
        cy.add(non_nacl);
      }
    }
    );
  }
});
}
