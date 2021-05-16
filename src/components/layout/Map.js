import React, { Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
      const latitude = this.props.latitude
      const longitude = this.props.longitude
    return (
        
      <div className="map-div">
          <Map style={{width:'600px', height:'400px'}} google={this.props.google} zoom={20} center={{
            lat: 12.955931572548153,
            lng: 77.71247130214398
        }}>
            <Marker position={{lat: 12.955931572548153, lng: 77.71247130214398}} onClick={this.onMarkerClick}
                    name={'Current location'} />    
            <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_MAPS_KEY)
})(MapContainer)