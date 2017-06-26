import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { mapLoaded } from '../../actions/mapLoading'
import { connect } from 'react-redux'


class Map extends Component {
  componentDidMount(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [115.7439,-32.0569],
        zoom: 13
    });
    this.props.mapLoad(map);
    
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mapLoad: (map) => {
      dispatch(mapLoaded(map))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);