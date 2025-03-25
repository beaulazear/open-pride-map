import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LoadingScreen from "./LoadingScreen";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const markerIcon = new L.Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const MapComponent = () => {
    const [windmillLocations, setWindmillLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOverpassData = async () => {
            const url =
                "https://overpass-api.de/api/interpreter?data=%5Bout:json%5D%5Btimeout:25%5D;%20nwr%5B%22dhm_id%22%5D;%20out%20geom;";

            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                const filteredLocations = data.elements
                    .filter(item => item.lat && item.lon)
                    .map(item => ({
                        id: item.id,
                        lat: item.lat,
                        lon: item.lon,
                        name: item.tags?.name || "Unknown Windmill",
                        description: item.tags?.description || "No description available",
                    }));

                setWindmillLocations(filteredLocations);
            } catch (error) {
                console.error("Error fetching Overpass API data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOverpassData();
    }, []);

    return (
        <div>
            {loading ? (
                <LoadingScreen />
            ) : (
                <MapContainer center={[52.3676, 4.9041]} zoom={7} style={{ height: "500px", width: "100%" }}>
                    <TileLayer
                        url={`https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=${process.env.REACT_APP_THUNDERFOREST_API_KEY}`}
                        attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
                    />

                    {windmillLocations.map(({ id, lat, lon, name, description }) => (
                        <Marker key={id} position={[lat, lon]} icon={markerIcon}>
                            <Popup>
                                <strong>{name}</strong>
                                <br />
                                {description}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            )}
        </div>
    );
};

export default MapComponent;