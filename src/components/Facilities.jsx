import React from 'react'
import './Facilities.css'

const Facilities = () => {
  const activities = [
    { icon: '⛳', title: 'Mini-golf', description: 'Parcours de mini-golf pour toute la famille' },
    { icon: '🎣', title: 'Concours de pétanque', description: 'Tournois organisés régulièrement' },
    { icon: '🏓', title: 'Ping-pong', description: 'Tables de ping-pong à disposition' },
    { icon: '🚴', title: 'Piste cyclable', description: 'Au départ du camping vers la région' },
    { icon: '🎮', title: 'Jeux enfants', description: 'Aire de jeux sécurisée' },
    { icon: '🎭', title: 'Animations', description: 'Activités organisées en saison' },
    { icon: '🍕', title: 'Buvette & Pizzas', description: 'Restauration sur place' },
    { icon: '🛒', title: 'Épicerie', description: 'Produits de première nécessité' }
  ]

  return (
    <section id="equipements" className="facilities">
      <div className="container">
        <div className="section-header">
          <h2>Équipements & Loisirs</h2>
          <p>Tout ce qu'il faut pour des vacances réussies</p>
        </div>
        
        <div className="facilities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="facility-card">
              <div className="facility-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="highlight-section">
          <div className="highlight-content">
            <h3>🌟 Services Premium</h3>
            <div className="services-list">
              <div className="service">
                <strong>Accès handicapés</strong>
                <p>Installations adaptées PMR</p>
              </div>
              <div className="service">
                <strong>Machine à laver</strong>
                <p>Laverie automatique</p>
              </div>
              <div className="service">
                <strong>Grands emplacements</strong>
                <p>Spacieux et ombragés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
