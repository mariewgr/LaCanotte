import React from 'react'
import './Footer.css'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Camping La Canotte</h3>
            <p>{t('footer.familyCamping')}</p>
            <div className="contact-info">
              <p>📍 Le Grau-d'Agde</p>
              <p>📞 04 67 94 20 54</p>
              <a
              href="mailto:campinglacanotte@outlook.fr"
              style={{ color: '#d0d0d0', textDecoration: 'none' }}
            >
              campinglacanotte@outlook.fr
            </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Camping La Canotte. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer