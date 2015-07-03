/** @jsx React.DOM */
var isNode = typeof module !== 'undefined' && module.exports;
var React = isNode ? require('react/addons') : window.React;

var Main = React.createClass({

  data: [
    { name: 'Berlin', lat:52.5159, lng:13.3777},
    { name: 'Helsinki', lat:60.1708, lng:24.9375},
    { name: 'Singapore', lat:1.1722, lng:103.5100}
  ],

  init: function() {   
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
    var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map);
    
    // Make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    
    this.moveMap(this.data[1]);
  },

  selectMap: function(evt) {
    console.log('selectMap: ' +  evt);
  },

  moveMap: function(location) {
    this.map.setCenter({lat:location.lat, lng:location.lng});
    this.map.setZoom(14);
  },

  componentDidMount: function () {
    this.init();
  },    
  
  render: function () {
    return ( 
      <div className="container">
        <MapSelect selectLocation={this.selectMap}/>
        <MapDisplay/>
      </div>
    );
  }
});

 

if (isNode) {
  module.exports = Main;
} else {
  React.render(<Main/>, document.getElementById('app'))
}
