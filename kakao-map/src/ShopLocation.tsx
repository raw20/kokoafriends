import { Map, MapMarker } from "react-kakao-maps-sdk";
import useGetshopLocationById from "./hooks/queries/useGetshopLocationById";
import useGetshopLocation from "./hooks/queries/useGetshopLocation";
import {useState} from "react";

const {kakao} = window;


function ShopLocation() {
    const { data, loading} = useGetshopLocation()
    const [lat,setLat] = useState<number>()
    const [lng,setLng] =  useState<number>()
/* useEffect(() => {
     const container = document.getElementById('map');
     const options = {
         center : new kakao.maps.LatLng(33.450701, 126.570667),
         level : 3
     };
     const map = new kakao.maps.Map(container, options);
 }, [])*/

    console.log(lng,lat)
return (
    <>
        <Map center={{lat: lat === undefined ? 33.450701 : lat, lng: lng === undefined ? 126.570667  : lng}}
             style={{width: "500px", height: "500px"}}>

            {data?.shopLocation.map(shop=> lat ?  <MapMarker key={shop.id} position={{lat: shop.lat, lng: shop.lng }}
        >
            <div style={{color:"#000"}}>{shop.name}</div>
        </MapMarker> :null)}
        </Map>
        <div>
            {data?.shopLocation.map(shop=> <div key={shop.id}><button onClick={()=>{
                console.log(shop.lng,shop.lat)
                setLat((shop.lat))
                setLng(shop.lng)
            }}>{shop.name}</button></div>)}
        </div>
    </>

);}
export default ShopLocation;