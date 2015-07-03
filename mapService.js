mapService = (function() { 

  var map;

  var data = [
    { name: 'Helsinki', lat:60.1708, lng:24.9375},
    { name: 'Berlin', lat:52.5159, lng:13.3777},
    { name: 'Rome', lat:41.9000, lng:12.5000}
  ];
  
  return {
    data: data,
    activate: activate,
    selectMap: selectMap          
  }

  function activate() {
    // Initialize communication with the platform
    // API keys here are the same as in https://developer.here.com/api-explorer
    var platform = new H.service.Platform({
      app_id: 'DemoAppId01082013GAL',
      app_code: 'AJKnXv84fjrb0KIHawS0Tg',
      useCIT: true,
      useHTTPS: true
    });
    var defaultLayers = platform.createDefaultLayers();
    
    // Initialize a map  - not specificing a location will give a whole world view.
    map = new H.Map(document.getElementById('map'), defaultLayers.normal.map);
    
    // Make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
  }
    
  function selectMap(index) {
    moveMap(data[index])
  }

  function moveMap(location) {
    map.setCenter({lat:location.lat, lng:location.lng});
    map.setZoom(14);
  }
}());