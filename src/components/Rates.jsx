import { useLanguage } from '../contexts/LanguageContext'
import values from '../updates/rates.json'
import './Rates.css'

const Rates = () => { 
  const { t, language } = useLanguage()
  
  const rates = [
    {
      period: t('rates.withoutelectricity'),
      price: values.rates.withoutElec + '€',
      description: t('rates.withoutElectricityDescription'),
    },
    {
      period: t('rates.withelectricity'),
      price: values.rates.withElec + '€',
      description: t('rates.withElectricityDescription'),
    }
  ]

  const extras = [
    { item: t('rates.supplementaryPerson'), price: values.rates.supplementaryPerson + '€' + t('rates.night') },
    { item: t('rates.supplementaryChild'), price: values.rates.supplementaryChild + '€' + t('rates.night') },
    { item: t('rates.supplementaryTeen'), price: values.rates.supplementaryTeen + '€' + t('rates.night') },
    { item: t('rates.dog'), price: values.rates.dog + '€' + t('rates.night') },
    { item: t('rates.electricity'), price: values.rates.electricity + '€' + t('rates.night') }
  ]

  return (
    <section id="tarifs" className="rates">
      <div className="container">
        <div className="section-header">
          <h2>{t('rates.title')}</h2>
          <p>{language === 'fr' ? values.rates.subtitleFr : values.rates.subtitleEn}</p>
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
          
          <div className="info-card">
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
