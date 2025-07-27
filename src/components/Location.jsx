import React from 'react'
import './Location.css'

const Location = () => {
  const attractions = [
    { name: 'Plages de sable fin', distance: '14 km', icon: '🏖️' },
    { name: 'Ville grecque d\'Agde', distance: '2 km', icon: '🏛️' },
    { name: 'Canal du Midi', distance: '3 km', icon: '🚤' },
    { name: 'Embouchure de l\'Hérault', distance: '5 km', icon: '🌊' },
    { name: 'Stations du Grau et de la Tamarissière', distance: '8 km', icon: '🏖️' },
    { name: 'Fort Brescou au large', distance: '15 km', icon: '🏰' }
  ]

  return (
    <section id="region" className="location">
      <div className="container">
        <div className="section-header">
          <h2>Découvrir la Région</h2>
          <p>Un emplacement privilégié au cœur de l'Hérault</p>
        </div>
        
        <div className="location-content">
          <div className="location-info">
            <div className="address-card">
              <h3>📍 Notre Adresse</h3>
              <p>
                <strong>Camping La Canotte</strong><br/>
                Boulevard Saint-Christ<br/>
                34300 Le Grau-d'Agde<br/>
                Hérault, France
              </p>
            </div>
            
            <div className="season-info">
              <h3>📅 Période d'ouverture</h3>
              <p>
                <strong>Du 20 mai au 10 septembre</strong><br/>
                Accueil : 8h à 12h - 14h30 à 18h30
              </p>
            </div>
          </div>
          
          <div className="attractions-grid">
            <h3>🎯 À proximité</h3>
            <div className="attractions-list">
              {attractions.map((attraction, index) => (
                <div key={index} className="attraction-item">
                  <span className="attraction-icon">{attraction.icon}</span>
                  <div className="attraction-info">
                    <strong>{attraction.name}</strong>
                    <span className="distance">{attraction.distance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h3>🗺️ Situation géographique</h3>
          <div className="map-placeholder">
            <p>Carte interactive disponible sur demande</p>
            <div className="map-info">
              <div className="map-point">
                <strong>🚗 Accès routier</strong>
                <p>Sortie A9 - Agde puis direction Le Grau-d'Agde</p>
              </div>
              <div className="map-point">
                <strong>🚂 Gare SNCF</strong>
                <p>Gare d'Agde à 5 km</p>
              </div>
              <div className="map-point">
                <strong>✈️ Aéroport</strong>
                <p>Montpellier à 45 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
