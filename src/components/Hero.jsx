import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1>BIENVENUE AU CAMPING LA CANOTTE</h1>
            <p className="hero-subtitle">Camping familial ★★ au Grau-d'Agde</p>
            <p className="hero-description">
              Situé en bordure du fleuve Hérault, La Canotte est un camping familial 
              où vous trouverez repos et sérénité dans un cadre naturel exceptionnel.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('tarifs').scrollIntoView({ behavior: 'smooth' })}
              >
                Voir les tarifs
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <h3>🏕️ Camping 2 étoiles</h3>
              <p>Familial et convivial</p>
            </div>
            <div className="info-card">
              <h3>🌊 Bord de rivière</h3>
              <p>Au bord de l'Hérault</p>
            </div>
            <div className="info-card">
              <h3>🏖️ Proche plages</h3>
              <p>À 14 km de la mer</p>
            </div>
            <div className="info-card">
              <h3>📅 Saison</h3>
              <p>20 mai - 10 septembre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
