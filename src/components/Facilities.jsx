import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Facilities.css'

const Facilities = () => {
  const { t } = useLanguage()
  
  const facilities = [
    { title: t('facilities.items.sanitaires.title') },
    { title: t('facilities.items.laverie.title')},
    { title: t('facilities.items.epicerie.title')},
    { title: t('facilities.items.snack.title')},
    { title: t('facilities.items.wifi.title')},
    { title: t('facilities.items.parking.title')},
    { title: t('facilities.items.playground.title')},
    { title: t('facilities.items.big.title')},
    { title: t('facilities.items.handicap.title')},
    { title: t('facilities.items.stars.title')},
    { title: t('facilities.items.nearseaandriver.title')}
  ]

  const activities = [
    { title: t('activities.items.cycling.title') },
    { title: t('activities.items.minigolf.title')},
    { title: t('activities.items.pingpong.title')},
    { title: t('activities.items.petanque.title')}
  ]

  return (
    <section id="equipements" className="facilities">
      <div className="facilities-container">
        {/* Section Équipements */}
        <div className="facilities-section">
          <div className="section-header">
            <h2>{t('facilities.title')}</h2>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <span className="check-icon">✅</span>
                <span className="facility-content">
                  <strong>{facility.title}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Loisirs */}
        <div className="facilities-section">
          <div className="section-header">
            <h2>{t('activities.title')}</h2>
          </div>
          <div className="facilities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="facility-item">
                <span className="check-icon">✅</span>
                <span className="facility-content">
                  <strong>{activity.title}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
