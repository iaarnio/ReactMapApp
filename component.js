/** @jsx React.DOM */
var isNode = typeof module !== 'undefined' && module.exports;
var React = isNode ? require('react/addons') : window.React;

var map; 

var data = [
      { name: 'Berlin', lat:52.5159, lng:13.3777},
      { name: 'Helsinki', lat:60.1708, lng:24.9375},
      { name: 'Singapore', lat:1.1722, lng:103.5100}
    ];

var Map = React.createClass({

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
        map = new H.Map(document.getElementById('map'), defaultLayers.normal.map);
        
        // Make the map interactive
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        
        // Create the default UI components
        var ui = H.ui.UI.createDefault(map, defaultLayers);
        
        this.moveMap(data[1]);
    },

    selectMap: function(evt) {
      console.log('selectMap: ' +  evt);
    },

    moveMap: function(location) {
      map.setCenter({lat:location.lat, lng:location.lng});
      map.setZoom(14);
    },

    componentDidMount: function () {
      this.init();
    },    
    
    render: function () {
        var locations = data.map(function(loc, index) {
          return <button className="btn btn-default" id={index} onclick="this.selectMap()">{loc.name}</button>
        });

        return ( 
            <div className="container">
                <div>x{this.props.name}x</div>
                <div className="btn-group btn-toolbar">
                  {locations}
                </div>                
                
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Select location
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="Select location">
                    <li><a tabIndex="-1" href="#?name=Berlin">Action</a></li>
                    <li><a tabIndex="-1" href="#">Another action</a></li>
                    <li><a tabIndex="-1" href="#">Something else here</a></li>
                  </ul>
                </div>                
                
                <div id="map" />
            </div>
        );
    }
});


$('body').on('click', '.btn-group button', function (e) {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    //Map.selectMap(data[e.currentTarget.id]);
});

 

if (isNode) {
  module.exports = Map;
} else {
  React.render(<Map/>, document.getElementById('app'))
}
