import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux'
import Map from '../Map'
import { mapLoading } from '../../actions/mapLoading'

class App extends Component {
  componentDidMount(){
    mapLoading(true);
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
    mapLoading: (loading) => {
      dispatch(mapLoading(loading))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
