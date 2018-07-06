import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/***************************************
      ⯆⯆⯆ STEVE LOOK RIGHT BELOW HERE ⯆⯆⯆
      ***************************************/

const mapDispatchToProps = dispatch => ({
  fillBox: stuff =>
    dispatch({
      type: "MAP_CENTER",
      payload: stuff
    })
});
/***************************************
      ⯅⯅⯅ STEVE LOOK RIGHT ABOVE HERE ⯅⯅⯅
      ***************************************/

const google = window.google;

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");

const {
  SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");

const MapWithASearchBox = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSVdV2a02zGL_5KwNWA6_xy9ZWuUB5-BU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          height: `400px`,
          position: "relative",
          right: "-450px",
          bottom: "-30px",
          position: "absolute",
          left: "500px",
          top: "60px",
          zindex: "5"
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: 33.454417,
          lng: -111.986495
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );
          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={10}
    center={props.center}
    // onBoundsChanged={props.onBoundsChanged}
  >
    {/***************************************
      ⯆⯆⯆ STEVE LOOK RIGHT BELOW HERE ⯆⯆⯆
      ***************************************/}

    {/* props.fillBox(props.center) */}

    {/***************************************
      ⯅⯅⯅ STEVE LOOK RIGHT ABOVE HERE ⯅⯅⯅
      ***************************************/}

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
      />
    </SearchBox>
    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
  </GoogleMap>
));

// <MapWithASearchBox />;

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(MapWithASearchBox)
);
