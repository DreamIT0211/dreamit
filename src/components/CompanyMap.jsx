import { useEffect, useRef } from 'react';

const CompanyMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const { Map } = await google.maps.importLibrary('maps');
      const { Marker } = await google.maps.importLibrary('marker');
      const { Place } = await google.maps.importLibrary('places');

      const map = new Map(mapRef.current, {
        center: { lat: 22.556614309035904, lng: 72.9644647958839 },
        zoom: 13,
        mapId: '4504f8b37365c3d0',
      });

      // Creating a standard marker
      const marker = new Marker({
        position: { lat: 22.556614309035904, lng: 72.9644647958839 },
        map: map,
        title: 'DreamIT Infotech Pvt Ltd',
      });
    };

    initMap();
  }, []);

  return (
    <>
      <div ref={mapRef} className="h-full w-full"></div>
    </>
  );
};

export default CompanyMap;