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
  
  elements: {
 nodes: [
{ data: {id: '-245', name: 'AT5G61590'}, position: {x: -737.961547852, y:307.74230957}},
{ data: {id: '-239', name: 'AT5G13910'}, position: {x: -1358.53100586, y:992.43927002}},
{ data: {id: '-236', name: 'AT1G12840'}, position: {x: -826.386962891, y:1383.72412109}},
{ data: {id: '-234', name: 'AT1G15950'}, position: {x: -760.858581543, y:1383.72412109}},
{ data: {id: '-233', name: 'AT3G06590'}, position: {x: -672.96081543, y:1050.47857666}},
{ data: {id: '-231', name: 'AT5G47220'}, position: {x: -54.9491481781, y:1050.47857666}},
{ data: {id: '-225', name: 'AT1G27380'}, position: {x: -564.2734375, y:1383.72412109}},
{ data: {id: '-217', name: 'AT1G21910'}, position: {x: -585.695922852, y:640.572265625}},
{ data: {id: '-214', name: 'AT2G22840'}, position: {x: -1018.45309448, y:307.74230957}},
{ data: {id: '-209', name: 'AT3G22760'}, position: {x: 290.507598877, y:307.74230957}},
{ data: {id: '-206', name: 'AT5G05410'}, position: {x: -207.221496582, y:375.835464478}},
{ data: {id: '-201', name: 'AT5G60200'}, position: {x: -994.161315918, y:375.835479736}},
{ data: {id: '-200', name: 'AT3G61850'}, position: {x: -836.773376465, y:375.835479736}},
{ data: {id: '-198', name: 'AT5G65210'}, position: {x: 197.010421753, y:307.74230957}},
{ data: {id: '-197', name: 'AT1G51680'}, position: {x: -1154.02880859, y:1383.72412109}},
{ data: {id: '-194', name: 'AT3G08500'}, position: {x: -720.185791016, y:992.43927002}},
{ data: {id: '-188', name: 'AT5G26660'}, position: {x: -755.362365723, y:1050.47857666}},
{ data: {id: '-187', name: 'AT3G57230'}, position: {x: 68.6531791687, y:1050.47857666}},
{ data: {id: '-186', name: 'AT1G77450'}, position: {x: -730.324768066, y:640.572265625}},
{ data: {id: '-185', name: 'AT1G22640'}, position: {x: -965.703186035, y:992.43927002}},
{ data: {id: '-181', name: 'AT1G66230'}, position: {x: -466.95690918, y:1050.47857666}},
{ data: {id: '-180', name: 'AT1G79180'}, position: {x: -572.875366211, y:992.43927002}},
{ data: {id: '-178', name: 'AT1G61820'}, position: {x: -1219.55725098, y:1383.72412109}},
{ data: {id: '-174', name: 'AT1G62990'}, position: {x: -180.047523499, y:992.43927002}},
{ data: {id: '-173', name: 'AT2G36400'}, position: {x: 186.248428345, y:375.835464478}},
{ data: {id: '-169', name: 'AT3G23690'}, position: {x: 325.756881714, y:701.965698242}},
{ data: {id: '-165', name: 'AT1G71930'}, position: {x: -53.3942546844, y:701.965698242}},
{ data: {id: '-163', name: 'AT5G61600'}, position: {x: -1151.54931641, y:375.835479736}},
{ data: {id: '-159', name: 'AT4G17490'}, position: {x: -128.527507782, y:375.835479736}},
{ data: {id: '-156', name: 'AT5G62020'}, position: {x: -443.303436279, y:375.835479736}},
{ data: {id: '-154', name: 'AT4G35040'}, position: {x: -83.4811687469, y:307.74230957}},
{ data: {id: '-144', name: 'AT4G28140'}, position: {x: -1019.58233643, y:640.572265625}},
{ data: {id: '-141', name: 'AT1G24625'}, position: {x: 230.969085693, y:701.965698242}},
{ data: {id: '-136', name: 'AT2G28110'}, position: {x: -302.159881592, y:1383.72412109}},
{ data: {id: '-132', name: 'AT2G30490'}, position: {x: -1022.97210693, y:1383.72412109}},
{ data: {id: '-126', name: 'AT2G27050'}, position: {x: -878.964660645, y:1050.47857666}},
{ data: {id: '-123', name: 'AT5G63280'}, position: {x: 439.460174561, y:1050.47857666}},
{ data: {id: '-118', name: 'AT3G21890'}, position: {x: -769.289245605, y:992.43927002}},
{ data: {id: '-116', name: 'AT1G10480'}, position: {x: 420.544647217, y:701.965698242}},
{ data: {id: '-106', name: 'AT3G19580'}, position: {x: 315.857849121, y:1050.47851562}},
{ data: {id: '-105', name: 'AT3G14230'}, position: {x: 233.456291199, y:1050.47851562}},
{ data: {id: '-101', name: 'AT3G23050'}, position: {x: -714.161560059, y:1050.47851562}},
{ data: {id: '-100', name: 'AT1G78600'}, position: {x: -523.771865845, y:992.43927002}},
{ data: {id: '-99', name: 'AT3G11280'}, position: {x: -671.082305908, y:992.43927002}},
{ data: {id: '-98', name: 'AT2G47890'}, position: {x: 310.987258911, y:992.43927002}},
{ data: {id: '-97', name: 'AT2G37040'}, position: {x: -891.915344238, y:1383.72412109}},
{ data: {id: '-96', name: 'AT2G37090'}, position: {x: -171.103111267, y:1383.72412109}},
{ data: {id: '-93', name: 'AT4G17460'}, position: {x: 398.259399414, y:1050.47857666}},
{ data: {id: '-91', name: 'AT1G22985'}, position: {x: 521.861709595, y:1050.47857666}},
{ data: {id: '-89', name: 'AT2G40890'}, position: {x: -1481.67077637, y:1383.72412109}},
{ data: {id: '-86', name: 'AT4G25470'}, position: {x: -1332.17321777, y:1050.47857666}},
{ data: {id: '-84', name: 'AT3G07340'}, position: {x: -1653.15185547, y:992.43927002}},
{ data: {id: '-81', name: 'AT5G37020'}, position: {x: -947.267944336, y:640.572265625}},
{ data: {id: '-79', name: 'AT4G36620'}, position: {x: -1661.77941895, y:1050.47851562}},
{ data: {id: '-78', name: 'AT3G10340'}, position: {x: -1612.72753906, y:1383.72412109}},
{ data: {id: '-76', name: 'AT5G60690'}, position: {x: -916.59967041, y:992.43927002}},
{ data: {id: '-75', name: 'AT5G02840'}, position: {x: 563.0625, y:1050.47857666}},
{ data: {id: '-73', name: 'AT3G18660'}, position: {x: -105.574726105, y:1383.72412109}},
{ data: {id: '-69', name: 'AT3G19450'}, position: {x: -1088.50042725, y:1383.72412109}},
{ data: {id: '-68', name: 'AT3G23090'}, position: {x: -433.216644287, y:1383.72412109}},
{ data: {id: '-67', name: 'AT4G37790'}, position: {x: -1063.91015625, y:992.43927002}},
{ data: {id: '-66', name: 'AT3G62020'}, position: {x: -236.631500244, y:1383.72412109}},
{ data: {id: '-65', name: 'AT4G18780'}, position: {x: 91.0104179382, y:1383.72412109}},
{ data: {id: '-64', name: 'AT5G12870'}, position: {x: -621.978820801, y:992.43927002}},
{ data: {id: '-63', name: 'AT4G26220'}, position: {x: -1547.19909668, y:1383.72412109}},
{ data: {id: '-61', name: 'AT4G27435'}, position: {x: 353.123962402, y:1383.72412109}},
{ data: {id: '-57', name: 'AT3G20840'}, position: {x: 654.711608887, y:992.43927002}},
{ data: {id: '-55', name: 'AT3G51910'}, position: {x: 802.022033691, y:992.43927002}},
{ data: {id: '-54', name: 'AT1G32640'}, position: {x: 703.815063477, y:992.43927002}},
{ data: {id: '-52', name: 'AT2G46400'}, position: {x: 769.066345215, y:1050.47857666}},
{ data: {id: '-50', name: 'AT5G28040'}, position: {x: 810.267150879, y:1050.47851562}},
{ data: {id: '-44', name: 'AT1G34310'}, position: {x: 360.09072876, y:992.43927002}},
{ data: {id: '-43', name: 'AT4G34050'}, position: {x: -1416.14233398, y:1383.72412109}},
{ data: {id: '-42', name: 'AT4G34410'}, position: {x: -1407.63452148, y:992.43927002}},
{ data: {id: '-41', name: 'AT1G22190'}, position: {x: -1014.80664062, y:992.43927002}},
{ data: {id: '-40', name: 'AT1G78080'}, position: {x: -1554.94494629, y:992.43927002}},
{ data: {id: '-39', name: 'AT3G47620'}, position: {x: -867.49621582, y:992.43927002}},
{ data: {id: '-35', name: 'AT1G52150'}, position: {x: -1380.4230957, y:701.965698242}},
{ data: {id: '-33', name: 'AT1G04550'}, position: {x: -513.381530762, y:640.572265625}},
{ data: {id: '-31', name: 'AT4G31420'}, position: {x: -1381.15429688, y:640.572265625}},
{ data: {id: '-30', name: 'AT2G26150'}, position: {x: -1308.83996582, y:640.572265625}},
{ data: {id: '-26', name: 'AT5G13180'}, position: {x: 418.65234375, y:1383.72412109}},
{ data: {id: '-25', name: 'AT5G15630'}, position: {x: 222.067184448, y:1383.72412109}},
{ data: {id: '-24', name: 'AT1G12260'}, position: {x: -818.39276123, y:992.43927002}},
{ data: {id: '-23', name: 'AT5G47230'}, position: {x: -1113.0135498, y:992.43927002}},
{ data: {id: '-21', name: 'AT3G10500'}, position: {x: -1290.97241211, y:1050.47857666}},
{ data: {id: '-18', name: 'AT5G16600'}, position: {x: 549.709106445, y:1383.72412109}},
{ data: {id: '-17', name: 'AT5G17420'}, position: {x: 156.538803101, y:1383.72412109}},
{ data: {id: '-15', name: 'AT5G48930'}, position: {x: -957.443725586, y:1383.72412109}},
{ data: {id: '-10', name: 'AT2G22850'}, position: {x: -1096.05981445, y:701.965698242}},
{ data: {id: '-8', name: 'AT4G14770'}, position: {x: -658.010345459, y:640.572265625}},
{ data: {id: '-6', name: 'AT3G21270'}, position: {x: -906.484344482, y:701.965698242}},
{ data: {id: '-4', name: 'AT3G12270'}, position: {x: -148.182037354, y:701.965698242}}
 ],
 edges: [
{ data: {id: 'AT5G61590 (pd) AT1G71930', source: '-245', target: '-165'}},
{ data: {id: 'AT5G61590 (pd) AT5G15630', source: '-245', target: '-25'}},
{ data: {id: 'AT5G13910 (pd) AT5G15630', source: '-239', target: '-25'}},
{ data: {id: 'AT3G06590 (pd) AT1G15950', source: '-233', target: '-234'}},
{ data: {id: 'AT5G47220 (pd) AT1G15950', source: '-231', target: '-234'}},
{ data: {id: 'AT5G47220 (pd) AT3G10340', source: '-231', target: '-78'}},
{ data: {id: 'AT5G47220 (pd) AT5G15630', source: '-231', target: '-25'}},
{ data: {id: 'AT1G21910 (pd) AT1G51680', source: '-217', target: '-197'}},
{ data: {id: 'AT1G21910 (pd) AT2G30490', source: '-217', target: '-132'}},
{ data: {id: 'AT1G21910 (pd) AT3G18660', source: '-217', target: '-73'}},
{ data: {id: 'AT1G21910 (pd) AT5G15630', source: '-217', target: '-25'}},
{ data: {id: 'AT1G21910 (pd) AT5G17420', source: '-217', target: '-17'}},
{ data: {id: 'AT1G21910 (pd) AT5G60690', source: '-217', target: '-76'}},
{ data: {id: 'AT2G22840 (pd) AT1G61820', source: '-214', target: '-178'}},
{ data: {id: 'AT2G22840 (pd) AT2G37090', source: '-214', target: '-96'}},
{ data: {id: 'AT2G22840 (pd) AT2G40890', source: '-214', target: '-89'}},
{ data: {id: 'AT2G22840 (pd) AT5G12870', source: '-214', target: '-64'}},
{ data: {id: 'AT2G22840 (pd) AT5G60690', source: '-214', target: '-76'}},
{ data: {id: 'AT5G05410 (pd) AT1G71930', source: '-206', target: '-165'}},
{ data: {id: 'AT5G05410 (pd) AT5G12870', source: '-206', target: '-64'}},
{ data: {id: 'AT5G05410 (pd) AT5G13180', source: '-206', target: '-26'}},
{ data: {id: 'AT5G05410 (pd) AT5G17420', source: '-206', target: '-17'}},
{ data: {id: 'AT5G60200 (pd) AT1G51680', source: '-201', target: '-197'}},
{ data: {id: 'AT5G60200 (pd) AT2G40890', source: '-201', target: '-89'}},
{ data: {id: 'AT5G60200 (pd) AT5G60690', source: '-201', target: '-76'}},
{ data: {id: 'AT3G61850 (pd) AT4G27435', source: '-200', target: '-61'}},
{ data: {id: 'AT3G61850 (pd) AT5G60690', source: '-200', target: '-76'}},
{ data: {id: 'AT3G08500 (pd) AT1G51680', source: '-194', target: '-197'}},
{ data: {id: 'AT3G08500 (pd) AT2G30490', source: '-194', target: '-132'}},
{ data: {id: 'AT3G08500 (pd) AT4G18780', source: '-194', target: '-65'}},
{ data: {id: 'AT3G08500 (pd) AT5G48930', source: '-194', target: '-15'}},
{ data: {id: 'AT5G26660 (pd) AT1G51680', source: '-188', target: '-197'}},
{ data: {id: 'AT5G26660 (pd) AT2G30490', source: '-188', target: '-132'}},
{ data: {id: 'AT5G26660 (pd) AT4G34050', source: '-188', target: '-43'}},
{ data: {id: 'AT5G26660 (pd) AT5G48930', source: '-188', target: '-15'}},
{ data: {id: 'AT3G57230 (pd) AT1G51680', source: '-187', target: '-197'}},
{ data: {id: 'AT1G77450 (pd) AT1G51680', source: '-186', target: '-197'}},
{ data: {id: 'AT1G77450 (pd) AT2G40890', source: '-186', target: '-89'}},
{ data: {id: 'AT1G77450 (pd) AT5G48930', source: '-186', target: '-15'}},
{ data: {id: 'AT1G77450 (pd) AT5G60690', source: '-186', target: '-76'}},
{ data: {id: 'AT1G22640 (pd) AT1G51680', source: '-185', target: '-197'}},
{ data: {id: 'AT1G22640 (pd) AT2G30490', source: '-185', target: '-132'}},
{ data: {id: 'AT1G22640 (pd) AT5G48930', source: '-185', target: '-15'}},
{ data: {id: 'AT1G66230 (pd) AT1G51680', source: '-181', target: '-197'}},
{ data: {id: 'AT1G66230 (pd) AT2G30490', source: '-181', target: '-132'}},
{ data: {id: 'AT1G66230 (pd) AT5G48930', source: '-181', target: '-15'}},
{ data: {id: 'AT1G79180 (pd) AT1G51680', source: '-180', target: '-197'}},
{ data: {id: 'AT1G79180 (pd) AT2G30490', source: '-180', target: '-132'}},
{ data: {id: 'AT1G79180 (pd) AT4G18780', source: '-180', target: '-65'}},
{ data: {id: 'AT1G79180 (pd) AT4G34050', source: '-180', target: '-43'}},
{ data: {id: 'AT1G79180 (pd) AT5G48930', source: '-180', target: '-15'}},
{ data: {id: 'AT2G36400 (pd) AT1G62990', source: '-173', target: '-174'}},
{ data: {id: 'AT2G36400 (pd) AT1G71930', source: '-173', target: '-165'}},
{ data: {id: 'AT2G36400 (pd) AT2G37090', source: '-173', target: '-96'}},
{ data: {id: 'AT3G23690 (pd) AT1G62990', source: '-169', target: '-174'}},
{ data: {id: 'AT1G71930 (pd) AT5G60690', source: '-165', target: '-76'}},
{ data: {id: 'AT5G61600 (pd) AT1G71930', source: '-163', target: '-165'}},
{ data: {id: 'AT5G61600 (pd) AT5G15630', source: '-163', target: '-25'}},
{ data: {id: 'AT4G17490 (pd) AT1G71930', source: '-159', target: '-165'}},
{ data: {id: 'AT4G17490 (pd) AT3G10340', source: '-159', target: '-78'}},
{ data: {id: 'AT5G62020 (pd) AT1G71930', source: '-156', target: '-165'}},
{ data: {id: 'AT5G62020 (pd) AT2G40890', source: '-156', target: '-89'}},
{ data: {id: 'AT4G35040 (pd) AT1G71930', source: '-154', target: '-165'}},
{ data: {id: 'AT4G35040 (pd) AT2G40890', source: '-154', target: '-89'}},
{ data: {id: 'AT4G35040 (pd) AT3G10340', source: '-154', target: '-78'}},
{ data: {id: 'AT4G28140 (pd) AT4G34050', source: '-144', target: '-43'}},
{ data: {id: 'AT4G28140 (pd) AT5G60690', source: '-144', target: '-76'}},
{ data: {id: 'AT1G24625 (pd) AT2G37090', source: '-141', target: '-96'}},
{ data: {id: 'AT1G24625 (pd) AT3G18660', source: '-141', target: '-73'}},
{ data: {id: 'AT1G24625 (pd) AT3G62020', source: '-141', target: '-66'}},
{ data: {id: 'AT1G24625 (pd) AT5G60690', source: '-141', target: '-76'}},
{ data: {id: 'AT2G27050 (pd) AT2G30490', source: '-126', target: '-132'}},
{ data: {id: 'AT3G21890 (pd) AT2G40890', source: '-118', target: '-89'}},
{ data: {id: 'AT1G10480 (pd) AT5G60690', source: '-116', target: '-76'}},
{ data: {id: 'AT1G78600 (pd) AT2G40890', source: '-100', target: '-89'}},
{ data: {id: 'AT3G11280 (pd) AT2G40890', source: '-99', target: '-89'}},
{ data: {id: 'AT4G17460 (pd) AT2G37090', source: '-93', target: '-96'}},
{ data: {id: 'AT1G22985 (pd) AT2G37090', source: '-91', target: '-96'}},
{ data: {id: 'AT4G25470 (pd) AT2G40890', source: '-86', target: '-89'}},
{ data: {id: 'AT3G07340 (pd) AT2G40890', source: '-84', target: '-89'}},
{ data: {id: 'AT5G37020 (pd) AT3G08500', source: '-81', target: '-194'}},
{ data: {id: 'AT4G36620 (pd) AT3G10340', source: '-79', target: '-78'}},
{ data: {id: 'AT5G60690 (pd) AT3G10340', source: '-76', target: '-78'}},
{ data: {id: 'AT5G02840 (pd) AT3G10340', source: '-75', target: '-78'}},
{ data: {id: 'AT4G37790 (pd) AT3G23090', source: '-67', target: '-68'}},
{ data: {id: 'AT5G12870 (pd) AT4G18780', source: '-64', target: '-65'}},
{ data: {id: 'AT4G34410 (pd) AT4G34050', source: '-42', target: '-43'}},
{ data: {id: 'AT1G22190 (pd) AT4G34050', source: '-41', target: '-43'}},
{ data: {id: 'AT1G78080 (pd) AT4G34050', source: '-40', target: '-43'}},
{ data: {id: 'AT3G47620 (pd) AT4G34050', source: '-39', target: '-43'}},
{ data: {id: 'AT1G52150 (pd) AT5G12870', source: '-35', target: '-64'}},
{ data: {id: 'AT1G04550 (pd) AT5G12870', source: '-33', target: '-64'}},
{ data: {id: 'AT4G31420 (pd) AT5G12870', source: '-31', target: '-64'}},
{ data: {id: 'AT2G26150 (pd) AT5G12870', source: '-30', target: '-64'}},
{ data: {id: 'AT2G26150 (pd) AT5G60690', source: '-30', target: '-76'}},
{ data: {id: 'AT1G12260 (pd) AT5G15630', source: '-24', target: '-25'}},
{ data: {id: 'AT5G47230 (pd) AT5G15630', source: '-23', target: '-25'}},
{ data: {id: 'AT3G10500 (pd) AT5G15630', source: '-21', target: '-25'}},
{ data: {id: 'AT2G22850 (pd) AT5G60690', source: '-10', target: '-76'}},
{ data: {id: 'AT4G14770 (pd) AT5G60690', source: '-8', target: '-76'}},
{ data: {id: 'AT3G21270 (pd) AT5G60690', source: '-6', target: '-76'}},
{ data: {id: 'AT3G12270 (pd) AT5G60690', source: '-4', target: '-76'}}
 ]
 },
  
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

