/** @jsx React.DOM */
var isNode = typeof module !== 'undefined' && module.exports;
var React = isNode ? require('react/addons') : window.React;

var MapSelect = React.createClass({
  selectLocation: this.props.selectLocation,
  render: function () {
    var locations = data.map(function(loc, index) {
      return <button className="btn btn-default" id={index} onclick="this.selectLocation()">{loc.name}</button>
    });

    return ( 
      <div>
        <div>x{this.props.selectLocation}x</div>
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
      </div>
    );
  }
});


var MapDisplay = React.createClass({
  render: function () {
    return <div id="map"/>
  }
});


$('body').on('click', '.btn-group button', function (e) {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  //Map.selectMap(data[e.currentTarget.id]);
});

 

if (isNode) {
  module.exports = {
    MapSelect: MapSelect,
    MapDisplay: MapDisplay
  };
} 
