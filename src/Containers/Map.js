import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import mapStyles from '../Style/Map';


function Map({ data }) {

    const cities = {
        sanJose: {
            lat: 37.338207,
            lng: -121.886330
        },
        losAngeles: {
            lat: 34.052235,
            lng: -118.243683
        },
        berkley: {
            lat: 39.812820,
            lng: -105.025299
        },
        tahoe: {
            lat: 39.096848,
            lng: -120.032349
        },
        manhattan: {
            lat: 40.754932,
            lng: -73.984016
        },
        boston: {
            lat: 42.364506,
            lng: -71.038887
        },
        fortLauderdale: {
            lat: 26.12243,
            lng: -80.137314
        },
        orlando: {
            lat: 28.385233,
            lng: -81.563873
        },
    }

    function showMap() {
        return (
            <GoogleMap
                defaultZoom={5}
                defaultCenter={{
                    lat: cities[data[0]].lat,
                    lng: cities[data[0]].lng
                }}
                defaultOptions={{ styles: mapStyles }}
            >
                <Marker
                    position={{
                        lat: cities[data[0]].lat,
                        lng: cities[data[0]].lng
                    }}
                />
                <Marker
                    position={{
                        lat: cities[data[1]].lat,
                        lng: cities[data[1]].lng
                    }}
                />
            </GoogleMap>
        )
    }

    const WrapShowMap = withScriptjs(withGoogleMap(showMap));



    return (
        <div style={{ width: '75vw', height: '75vh' }}>
            <WrapShowMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA57RUdvu20_j29mc6zciU9Cryqy_TRmkg`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    )
}

export default Map
