import React from 'react'
import './Rates.css'

const Rates = () => {
  const rates = [
    {
      period: 'Basse saison',
      dates: '20 mai - 30 juin & 1er - 10 septembre',
      price: '25€',
      description: 'Emplacement + 2 personnes + électricité'
    },
    {
      period: 'Moyenne saison',
      dates: '1er juillet - 15 juillet & 16 août - 31 août',
      price: '32€',
      description: 'Emplacement + 2 personnes + électricité'
    },
    {
      period: 'Haute saison',
      dates: '16 juillet - 15 août',
      price: '38€',
      description: 'Emplacement + 2 personnes + électricité'
    }
  ]

  const extras = [
    { item: 'Personne supplémentaire', price: '5€/nuit' },
    { item: 'Enfant (3-7 ans)', price: '3€/nuit' },
    { item: 'Enfant (-3 ans)', price: 'Gratuit' },
    { item: 'Animal domestique', price: '3€/nuit' },
    { item: 'Véhicule supplémentaire', price: '3€/nuit' }
  ]

  return (
    <section id="tarifs" className="rates">
      <div className="container">
        <div className="section-header">
          <h2>Nos Tarifs</h2>
          <p>Des prix attractifs pour des vacances inoubliables</p>
        </div>

        <div className="rates-grid">
          {rates.map((rate, index) => (
            <div key={index} className="rate-card">
              <div className="rate-header">
                <h3>{rate.period}</h3>
                <div className="price">{rate.price}<span>/nuit</span></div>
              </div>
              <div className="rate-content">
                <p className="dates">{rate.dates}</p>
                <p className="description">{rate.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="extras-section">
          <h3>🎯 Suppléments</h3>
          <div className="extras-grid">
            {extras.map((extra, index) => (
              <div key={index} className="extra-item">
                <span className="extra-name">{extra.item}</span>
                <span className="extra-price">{extra.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="booking-info">
          <div className="info-card">
            <h3>📋 Informations importantes</h3>
            <ul>
              <li>Arrivée : à partir de 14h</li>
              <li>Départ : avant 12h</li>
              <li>Séjour minimum : 3 nuits en haute saison</li>
              <li>Caution : 100€ (restituée au départ)</li>
              <li>Taxe de séjour : 0,66€/personne/nuit</li>
            </ul>
          </div>
          
          <div className="payment-info">
            <h3>💳 Modalités de paiement</h3>
            <ul>
              <li>Acompte de 30% à la réservation</li>
              <li>Solde à l'arrivée</li>
              <li>Espèces, chèques, cartes bancaires acceptés</li>
              <li>Chèques vacances ANCV acceptés</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rates
