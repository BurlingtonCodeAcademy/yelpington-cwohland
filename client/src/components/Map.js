import React,{useState} from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Map() {
  const [locArr, setLocArr]= useState("")
  fetch("/gitpinlocations") 
  .then(response=>response.json()) 
  .then(response=>{
    if(locArr===""){setLocArr(response)}
  })

 
  return (
    <div id="map-container">
      <MapContainer center={[44.4759, -73.2121]} zoom={13} scrollWheelZoom={false}
      style={{ height: "600px", width: "800px"}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*Shows restaurant name and associated restaurant latitude, longitude map markers */}

        <Marker position={[44.47819, -73.21459]}>
          <Popup>
            A Single Pebble<br />
          </Popup>
        </Marker>
        <Marker position={[44.47682, -73.21427]}>
          <Popup>
          American Flatbread<br />
          </Popup>
        </Marker>
        <Marker position={[44.47656, -73.20302]}>
          <Popup>
          Gaku Ramen<br />
          </Popup>
        </Marker>
        <Marker position={[44.47656, -73.21226]}>
          <Popup>
          Hen of The Wood<br />
          </Popup>
        </Marker>
        <Marker position={[44.47625, -73.21223]}>
          <Popup>
          Honey Road<br />
          </Popup>
        </Marker>
        <Marker position={[44.47746, -73.21279]}>
          <Popup>
          Leunigs<br />
          </Popup>
        </Marker>
        <Marker position={[44.47656, -73.20302]}>
          <Popup>
          Pho Hung<br />
          </Popup>
        </Marker>
        <Marker position={[44.48905, -73.20706]}>
          <Popup>
          Pizzeria Verita<br/>
          </Popup>
        </Marker>
        <Marker position={[44.47783, -73.22266]}>
          <Popup>
          Splash<br />
          </Popup>
        </Marker>
        <Marker position={[44.47768, -73.21356]}>
          <Popup>
          SweetWaters<br />
        </Popup>
        </Marker>
        </MapContainer>
    </div>
)};

export default Map