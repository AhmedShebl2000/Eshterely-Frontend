import SearchBar from "../components/Locations/SearchBar";
import StoreList from "../components/Locations/StoreList";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { useState } from "react";
import { useSelector } from "react-redux";

function LocationPage() {
  const [position, setPosition] = useState([30.1005, 31.2613]); // default lat, lng for Cairo
  const stores = useSelector((state) => state.stores.stores);
  const filterdStores = useSelector((state) => state.stores.filterdStores);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-2/5  bg-white flex flex-col border-r max-h-[50vh] md:max-h-full">
        <SearchBar />
        <StoreList setPosition={setPosition} />
      </div>

      <div className="w-full md:flex-1 h-[50vh] md:h-full">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={14}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filterdStores.length === 0
            ? stores.map((store) => (
                <Marker
                  key={store.id}
                  position={[store.position.lat, store.position.lng]}
                >
                  <Popup>
                    <span>{store.name}</span>
                  </Popup>
                </Marker>
              ))
            : filterdStores.map((store) => (
                <Marker
                  key={store.id}
                  position={[store.position.lat, store.position.lng]}
                >
                  <Popup>
                    <span>{store.name}</span>
                  </Popup>
                </Marker>
              ))}
          <ChangeCenter position={position} />
        </MapContainer>
      </div>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default LocationPage;
