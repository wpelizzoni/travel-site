{"filter":false,"title":"maps.js","tooltip":"/js/maps.js","undoManager":{"mark":28,"position":28,"stack":[[{"start":{"row":0,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });","","    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}"],"id":1}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["n"],"id":2},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["e"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["w"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":[" "],"id":3},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["g"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["o"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["o"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["g"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["l"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["."],"id":4},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["m"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["a"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["p"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["s"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["."]}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["L"],"id":5},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["a"]},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["t"]},{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["l"]},{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["n"]},{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["g"]}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":[" "],"id":6}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":39},"action":"remove","lines":["new google.maps.Latlng "],"id":7}],[{"start":{"row":7,"column":7},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":4},"end":{"row":15,"column":1},"action":"insert","lines":["function myMap() {","var mapProp= {","  center:new google.maps.LatLng(51.508742,-0.120850),","  zoom:5,","};","var map = new google.maps.Map(document.getElementById(\"googleMap\"),mapProp);","}"],"id":9}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":10},{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":12}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":13},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":[" "],"id":14}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["*"],"id":15},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["}"],"id":16}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":62},"action":"remove","lines":["googleM"],"id":17},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["g"],"id":18},{"start":{"row":14,"column":56},"end":{"row":14,"column":57},"action":"insert","lines":["o"]},{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["o"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["g"]},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["l"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["e"]},{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["M"]}],[{"start":{"row":14,"column":62},"end":{"row":14,"column":63},"action":"remove","lines":["m"],"id":19}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"remove","lines":["/* "],"id":20}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":6},"action":"remove","lines":["*/"],"id":21}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["/"],"id":22},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["*"]}],[{"start":{"row":33,"column":1},"end":{"row":33,"column":2},"action":"insert","lines":[" "],"id":23},{"start":{"row":33,"column":2},"end":{"row":33,"column":3},"action":"insert","lines":["*"]},{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":33,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["","    ",""],"id":24}],[{"start":{"row":7,"column":7},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["}"]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":26},"action":"remove","lines":["46.619261"],"id":26},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["5"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["1"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":27},"action":"remove","lines":["-33.134766"],"id":27},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["9"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":28},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":[" "],"id":29}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":286,"mode":"ace/mode/javascript"}},"timestamp":1570221355393,"hash":"101065d79ad8a166f99add6c624788f53e2dae7d"}