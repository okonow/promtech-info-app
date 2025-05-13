import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      // Инициализация карты
      mapInstanceRef.current = L.map(mapRef.current).setView([55.7558, 37.6173], 13);

      // Добавление слоя OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);

      // Добавление маркера
      L.marker([55.7558, 37.6173])
        .addTo(mapInstanceRef.current)
        .bindPopup('OKB АКС')
        .openPopup();
    }

    // Очистка при размонтировании
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-page">
      <h1>Карта</h1>
      <div ref={mapRef} style={{ height: 'calc(100vh - 200px)', width: '100%' }} />
    </div>
  );
};

export default Map; 