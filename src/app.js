import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class App extends Component {
  static defaultProps = {
    center: {
      lat: 12.58,
      lng: 77.34
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5ky1HojZ3tW6OY8Wd4dBV6fSO2T4BEdg" }} //your api key
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent lat={12.972442} lng={77.580643} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
