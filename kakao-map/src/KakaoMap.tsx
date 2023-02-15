import { Map, MapMarker } from "react-kakao-maps-sdk";

const {kakao} = window;



function shopLocation() {
/* useEffect(() => {
     const container = document.getElementById('map');
     const options = {
         center : new kakao.maps.LatLng(33.450701, 126.570667),
         level : 3
     };
     const map = new kakao.maps.Map(container, options);
 }, [])*/
return (
    <Map center={{lat: 37.537698091271, lng: 126.95712878133632}}
         style={{width: "500px", height: "500px"}}>
        <MapMarker position={{lat: 37.555803223562876, lng: 126.9703654153776 }}
        >
            <div style={{color:"#000"}}>카카오프렌즈 서울역점</div>
        </MapMarker>

        <MapMarker position={{lat: 37.55639511754489, lng: 126.92393239853642}}
        >
            <div style={{color:"#000"}}>카카오프렌즈 홍대플래그십스토어
            </div>
        </MapMarker>
    </Map>
);}
export default shopLocation;