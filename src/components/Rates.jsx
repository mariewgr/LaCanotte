import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Rates.css'

const Rates = () => {
  const { t } = useLanguage()
  
  const rates = [
    {
      period: t('rates.lowSeason'),
      dates: '20 mai - 30 juin & 1er - 10 septembre',
      price: '25€',
      description: 'Emplacement + 2 personnes + électricité'
    },
    {
      period: t('rates.midSeason'),
      dates: '1er juillet - 15 juillet & 16 août - 31 août',
      price: '32€',
      description: 'Emplacement + 2 personnes + électricité'
    },
    {
      period: t('rates.highSeason'),
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
          <h2>{t('rates.title')}</h2>
          <p>{t('rates.subtitle')}</p>
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

        <div className="booking-info">
          <div className="info-card">
            <h3>Suppléments</h3>
            <ul>
            {extras.map((extra, index) => (
              <li key={index} className="extra-row">
                <span className="extra-name">{extra.item}</span>
                <span className="extra-price">{extra.price}</span>
              </li>
            ))}
            </ul>
          </div>
          
          <div className="payment-info">
            <h3>💳 Modalités de paiement</h3>
            <ul>
              <li>Espèces, chèques acceptés</li>
              <li>Chèques vacances ANCV acceptés</li>
              <li >Cartes Bancaires non acceptés</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rates
