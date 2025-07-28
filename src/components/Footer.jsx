import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Camping La Canotte</h3>
            <p>Votre camping familial au cœur de l'Hérault</p>
            <div className="contact-info">
              <p>📍 Le Grau-d'Agde</p>
              <p>📞 04 67 94 20 54</p>
              <p>📧 contact@camping-lacanotte.fr</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#equipements">Equipements</a></li>
              <li><a href="#activites">Activités</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#localisation">Lieu et Accès</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#galerie">Galerie</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Conditions générales</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Règlement intérieur</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Plan du camping</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Camping La Canotte. Tous droits réservés.</p>
            <p>Site développé avec ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer