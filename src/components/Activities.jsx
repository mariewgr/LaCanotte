import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Activities.css'

const Activities = () => {
  const { t } = useLanguage()
  
  const activities = [
    { icon: '🚴', title: t('activities.items.cycling.title'), description: t('activities.items.cycling.description') },
    { icon: '⛳️', title: t('activities.items.minigolf.title'), description: t('activities.items.minigolf.description') },
    { icon: '🏓', title: t('activities.items.pingpong.title'), description: t('activities.items.pingpong.description') },
    { icon: '🥇', title: t('activities.items.petanque.title'), description: t('activities.items.petanque.description') }

  ]

  const region = [
    { icon: '🏖️', title: t('region.items.beach.title'), description: t('region.items.beach.description') },
    { icon: '🏛️', title: t('region.items.grec.title'), description: t('region.items.grec.description') },
    { icon: 'canal', title: t('region.items.canal.title'), description: t('region.items.canal.description') },
    { icon: 'embouchure', title: t('region.items.embouchure.title'), description: t('region.items.embouvhure.description') },
    { icon: 'Grau', title: t('region.items.grau.title'), description: t('region.items.grau.description') },
    { icon: 'fort', title: t('region.items.fort.title'), description: t('region.items.fort.description') },
    { icon: '⛵️', title: t('region.items.watersports.title'), description: t('region.items.watersports.description') }
  ]

  return (
    <>
    <section id="activites" className="activities">
      <div className="container">
        <div className="section-header">
          <h2>{t('activities.title')}</h2>
          <p>{t('activities.subtitle')}</p>
        </div>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="region" className="region">
      <div className="container">
        <div className="section-header">
        <h2>{t('region.title')}</h2>
        <p>{t('region.subtitle')}</p>
        </div>
      <ul className="activities-grid">
      {region.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
      </ul>
      </div>
    </section>
  </>
  )
}

export default Activities
