// import React, { useRef, useEffect, useState } from 'react';




// const GoogleMap = ({ agencies }) => {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [filterType, setFilterType] = useState('all'); // Default filter type
//   const [filterLocation, setFilterLocation] = useState('all'); // Default filter location

//   useEffect(() => {
//     if (!map) {
//       const googleMap = new window.google.maps.Map(mapRef.current, {
//         center: { lat: 20, lng: 79 },
//         zoom: 5,
//       });
//       setMap(googleMap);
//     }
  
//     // Clear existing markers
//     markers.forEach(marker => marker.setMap(null));
  
//         // Define marker icons for different agency types
//         const markerIcons = {
//           hospital: 'src\data\hospital-marker.png', // Replace 'path_to_hospital_icon.png' with the actual path to your hospital icon image
//           fire: 'src\data\hospital-marker.png', // Replace 'path_to_fire_icon.png' with the actual path to your fire icon image
//           flood: 'src\data\hospital-marker.png', // Replace 'path_to_flood_icon.png' with the actual path to your flood icon image
//           // Add more types as needed
//         };

//     // Filter agencies based on selected filter options
//     const filteredAgencies = agencies.filter(agency => {
//       const isTypeMatch = filterType === 'all' || agency.type === filterType;
//       const isLocationMatch =
//         filterLocation.toLowerCase() === 'all' || agency.location.toLowerCase() === filterLocation.toLowerCase();
//       return isTypeMatch && isLocationMatch;
//     });
  
//     // Create new markers for filtered agencies
//     const newMarkers = filteredAgencies.map(agency => {
//       const marker = new window.google.maps.Marker({
//         position: { lat: agency.latitude, lng: agency.longitude },
//         map: map,
//         title: agency.name,
//       });
  
//       return marker;
//     });
  
//     setMarkers(newMarkers);
//   }, [agencies, map, filterType, filterLocation]);
  

//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <label>
//         Filter by Type:
//         <select value={filterType} onChange={e => setFilterType(e.target.value)}>
//           <option value="all">All</option>
//           <option value="hospital">Hospital</option>
//           <option value="fire">Fire</option>
//           <option value="flood">Flood</option>
//           {/* Add more types as needed */}
//         </select>
//       </label>
//       <label style={{ marginLeft: '20px' }}>
//         Filter by Location:
//         <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)}>
//           <option value="all">All</option>
//           <option value="mumbai">Mumbai</option>
//           <option value="delhi">Delhi</option>
//           <option value="uttarakhand">Uttarakhand</option>
//           {/* Add more locations as needed */}
//         </select>
//       </label>

//       <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
//     </div>
//   );
// };

// export default GoogleMap;

import React, { useRef, useEffect, useState } from 'react';

const GoogleMap = ({ agencies }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default filter type
  const [filterLocation, setFilterLocation] = useState('all'); // Default filter location
  const [polyline, setPolyline] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
        // Geolocation is available
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            
            // You can use latitude and longitude here for further processing
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        // Geolocation is not available
        console.error("Geolocation is not available");
      }
    if (!map) {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 19.160571504632134, lng: 72.99628535681877 },
        zoom: 16,
      });
      setMap(googleMap);
    }

    // Clear existing markers and polyline
    markers.forEach(marker => marker.setMap(null));
    if (polyline) {
      polyline.setMap(null);
    }

    // Filter agencies based on selected filter options
    const filteredAgencies = agencies.filter(agency => {
      const isTypeMatch = filterType === 'all' || agency.type === filterType;
      const isLocationMatch =
        filterLocation.toLowerCase() === 'all' || agency.location.toLowerCase() === filterLocation.toLowerCase();
      return isTypeMatch && isLocationMatch;
    });

    // Create new markers for filtered agencies
    const newMarkers = filteredAgencies.map(agency => {
      const marker = new window.google.maps.Marker({
        position: { lat: agency.latitude, lng: agency.longitude },
        map: map,
        title: agency.name,
      });

      return marker;
    });

    // Create polyline path using marker positions
    const pathCoordinates = newMarkers.map(marker => ({
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
    }));

    const newPolyline = new window.google.maps.Polyline({
      path: pathCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    // Add the polyline to the map
    // newPolyline.setMap(map);

    // Set markers and polyline
    setMarkers(newMarkers);
    setPolyline(newPolyline);

  }, [agencies, map, filterType, filterLocation]);

  return (
    <div style={{ marginTop: '40px', marginBottom: '30px'}}>
      <label>
        Filter by Type:
        <select value={filterType} onChange={e => setFilterType(e.target.value)} style={{color: 'black'}}>
        <option value="all">All</option>
        <option value="psychiatry">Psychiatry</option>
        <option value="dietetics">Dietetics</option>
        <option value="fitness training">Fitness Training</option>
        <option value="meditation">Meditation</option>

          {/* Add more types as needed */}
        </select>
      </label>
      <label style={{ marginLeft: '20px' }}>
        Filter by Location:
        <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)} style={{color: 'black'}}>
        <option value="all">All</option>
        <option value="airoli">Airoli</option>
        <option value="rabale">Rabale</option>
        <option value="ghansoli">Ghansoli</option>
        <option value="thane">Thane</option>
        <option value="koparkhairane">Koparkhairane</option>
        <option value="vashi">Vashi</option>
        <option value="juinagar">Juinagar</option>
        <option value="turbhe">Turbhe</option>
        <option value="nerul">Nerul</option>
        <option value="seawoods">Seawoods</option>
        <option value="kharghar">Kharghar</option>
        <option value="panvel">Panvel</option>

          {/* Add more locations as needed */}
        </select>
      </label>

      <div ref={mapRef} style={{ height: '74vh', width: '95vw' }}></div>
    </div>
  );
};

export default GoogleMap;
