import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Facilities.css'

const Facilities = () => {
  const { t } = useLanguage()
  
  const activities = [
    { icon: '🚿', title: t('facilities.items.sanitaires.title'), description: t('facilities.items.sanitaires.description') },
    { icon: '🧺', title: t('facilities.items.laverie.title'), description: t('facilities.items.laverie.description') },
    { icon: '🛒', title: t('facilities.items.epicerie.title'), description: t('facilities.items.epicerie.description') },
    { icon: '🍕', title: t('facilities.items.snack.title'), description: t('facilities.items.snack.description') },
    { icon: '📶', title: t('facilities.items.wifi.title'), description: t('facilities.items.wifi.description') },
    { icon: '🚗', title: t('facilities.items.parking.title'), description: t('facilities.items.parking.description') },
    { icon: '🎮', title: t('facilities.items.playground.title'), description: t('facilities.items.playground.description') }
  ]

  return (
    <section id="equipements" className="facilities">
      <div className="container">
        <div className="section-header">
          <h2>{t('facilities.title')}</h2>
          <p>{t('facilities.subtitle')}</p>
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
      </div>
    </section>
  )
}

export default Facilities
