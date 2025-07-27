import React, { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Location.css';

const Location = () => {
  const { t } = useLanguage();

  const campingAddress = "Camping La Canotte, Boulevard Saint-Christ, 34300 Le Grau-d'Agde, France";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campingAddress)}`;

  const position = {
    lat: 43.29075,
    lng: 3.44735
  };

  const containerStyle = {
    width: '100%',
    height: '250px',
    borderRadius: '15px 15px 0 0'
  };

  const onLoad = useCallback(marker => {
    console.log('Marker loaded:', marker);
  }, []);

  return (
    <section id="localisation" className="location">
      <div className="container">
        <div className="section-header">
          <h2>{t('location.title')}</h2>
          <p>{t('location.subtitle')}</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="map-address-card">
              <div className="map-container" onClick={() => window.open(googleMapsUrl, '_blank')}>
                <LoadScript googleMapsApiKey="VOTRE_CLÉ_API">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={15}
                    onLoad={onLoad}
                  >
                    <Marker position={position} />
                  </GoogleMap>
                </LoadScript>
              </div>

              <div className="address-section" onClick={() => window.open(googleMapsUrl, '_blank')}>
                <h3>📍 Notre Adresse</h3>
                <p>
                  <strong>Camping La Canotte</strong><br />
                  Boulevard Saint-Christ<br />
                  34300 Le Grau-d'Agde<br />
                  Hérault, France
                </p>
              </div>
            </div>

            <div className="access-info">
              <h3>🗺️ Accès & Transport</h3>
              <div className="access-points">
                <div className="access-point">
                  <strong>🚗 Accès routier</strong>
                  <p>Sortie A9 - Agde puis direction Le Grau-d'Agde</p>
                </div>
                <div className="access-point">
                  <strong>🚂 Gare SNCF</strong>
                  <p>Gare d'Agde à 5 km</p>
                </div>
                <div className="access-point">
                  <strong>✈️ Aéroport</strong>
                  <p>Montpellier à 45 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
