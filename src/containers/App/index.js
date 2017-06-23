import React, { Component } from 'react';
import './index.css';
import mapboxgl from 'mapbox-gl';
import { mapLoaded } from '../../actions/mapLoading'
import { connect } from 'react-redux'
import Map from '../Map'

class App extends Component {
  componentDidMount(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
    mapLoaded(map);
    
  }

  render() {
    return (
      <div className="App">
        <div id="map" />
        <Map/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mapLoaded: (map) => {
      dispatch(mapLoaded(map))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
