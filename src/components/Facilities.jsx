import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Facilities.css'

const Facilities = () => {
  const { t } = useLanguage()
  
  const facilities = [
    { title: t('facilities.items.stars.title')},
    { title: t('facilities.items.sanitaires.title') },
    { title: t('facilities.items.laverie.title')},
    { title: t('facilities.items.epicerie.title')},
    { title: t('facilities.items.snack.title')},
    { title: t('facilities.items.wifi.title')},
    { title: t('facilities.items.parking.title')},
    { title: t('facilities.items.big.title')},
    { title: t('facilities.items.handicap.title')}
  ]

  const activities = [
    { title: t('activities.items.cycling.title') },
    { title: t('activities.items.minigolf.title')},
    { title: t('activities.items.pingpong.title')},
    { title: t('activities.items.petanque.title')},
    { title: t('facilities.items.playground.title')},
    { title: t('facilities.items.nearseaandriver.title')}
  ]

  return (
    <section id="equipements" className="facilities">
      <div className="booking-info">
        <div>
          <h2 style={{color: '#2c5530'}}>{t('header.facilities')}</h2>
          <ul className="facilities-grid">
            {facilities.map((extra, index) => (
              <li key={index} className="extra-row">
                <span className="extra-name">{extra.title}</span>
              </li>
            ))}
          </ul>
        </div>
          
          <div>
            <h2 style={{color: '#2c5530'}}>{t('facilities.loisirs')}</h2>
            <ul className="facilities-grid">
            {activities.map((extra, index) => (
              <li key={index} className="extra-row">
                <span className="extra-name">{extra.title}</span>
              </li>
            ))}
            </ul>
          </div>
        
        </div>
    </section>
  )
}

export default Facilities
