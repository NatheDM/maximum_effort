import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//import { componentDidUpdate } from "react-google-maps/lib/utils/MapChildHelper";

const mapDispatchToProps = dispatch => ({
  fillBox: stuff =>
    dispatch({
      type: "MAP_CENTER",
      payload: stuff
    })
});

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
        class="maps"
        style={{
          height: "400px",
          width: "100%",
          position: "relative",
          right: "-35%",

          left: "0%",
          top: "50px",
          zindex: "20"
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
    },
    componentDidUpdate() {
      if (this.state.center) {
        /** Demanding information from the component in a way I can use, and not taking 'no' for an answer **/
        let myCenter = this.state.center;
        myCenter = "" + myCenter;
        myCenter = myCenter
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .split(",");
        myCenter = {
          lat: myCenter[0],
          lng: myCenter[1]
        };
        this.props.fillBox(myCenter);
        /** ********************************************************************************************* **/
      }
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
