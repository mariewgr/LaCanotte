import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Rates.css'

const Rates = () => {
  const { t } = useLanguage()
  
  const rates = [
    {
      period: t('rates.withoutelectricity'),
      price: '19€',
      description: t('rates.withoutElectricityDescription'),
    },
    {
      period: t('rates.withelectricity'),
      price: '25€',
      description: t('rates.withElectricityDescription'),
    }
  ]

  const extras = [
    { item: t('rates.supplementaryPerson'), price: '8€/nuit' },
    { item: t('rates.supplementaryChild'), price: '5€/nuit' },
    { item: t('rates.supplementaryTeen'), price: '6,5€/nuit' },
    { item: t('rates.dog'), price: '2€/nuit' },
    { item: t('rates.electricity'), price: '6€/nuit' }
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
                <div className="price">{rate.price}<span>{t('rates.night')}</span></div>
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
            <h3>{t('rates.supplements')}</h3>
            <ul>
            {extras.map((extra, index) => (
              <li key={index} style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
                <span className="extra-name">{extra.item}</span>
                <span className="extra-price">{extra.price}</span>
              </li>
            ))}
            </ul>
          </div>
          
          <div className="payment-info">
            <h3>💳 {t('rates.paimentMethods')}</h3>
            <ul>
              <li>{t('rates.especes')}</li>
              <li>{t('rates.ancv')}</li>
              <li >{t('rates.creditCard')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rates
