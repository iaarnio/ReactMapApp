/** @jsx React.DOM */

var Main = React.createClass({
  componentDidMount: function () { 
    mapService.activate();
  },
  
  render: function () {
    return ( 
      <div className="container">
        <MapSelect mapService={mapService}/>
        <MapDisplay/>
      </div>
    );
  }
});
 

var MapSelect = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.active
    };
  },
  
  handleMapSelect: function (e) {
    // Get an array of DOM elements
    // Then find which element was clicked
    var buttons = Array.prototype.slice.call(e.currentTarget.children);
    var index = buttons.indexOf(e.target);

    this.setState({ active: index });   
    this.props.mapService.selectMap(index); 
  },
  
  render: function () {
    var that = this;
    var locations = this.props.mapService.data.map(function(loc, index) {
      var button = <button className="btn btn-default" key={index} id={index}>{loc.name}</button>;
      if (index === this.state.active) {
        button.props.className += ' active';
      }
      return(button);
    }, this);

    return ( 
      <div className="well my-toolbar">
        <span className="title">React Map App</span>
        <div className="btn-group btn-toolbar" onClick={this.handleMapSelect}>
          {locations}
        </div>                
      </div>
    );
  }
});


var MapDisplay = React.createClass({
  render: function () {
    return (
      <div id="map"/>
    );
  }
});



React.render(<Main/>, document.getElementById('app'))
