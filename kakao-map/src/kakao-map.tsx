import { Map, MapMarker } from "react-kakao-maps-sdk";

export const SdkMap = () => {
    return (
        <Map center={{lat: 37.537698091271, lng: 126.95712878133632}}
             style={{width: "500px", height: "500px"}}>
        <MapMarker position={{lat: 37.537698091271, lng: 126.95712878133632}}
        >
            <div style={{color:"#000"}}>Hello</div>
        </MapMarker>
        </Map>
    );
};