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
            <p>
              Votre camping familial au cœur de l'Hérault, 
              pour des vacances inoubliables entre mer et nature.
            </p>
            <div className="contact-info">
              <p>📍 Boulevard Saint-Christ, 34300 Le Grau-d'Agde</p>
              <p>📞 04 67 94 20 54</p>
              <p>📧 contact@camping-lacanotte.fr</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#equipements">Équipements</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#region">La région</a></li>
              <li><a href="#tarifs">Tarifs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informations</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Conditions générales</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Règlement intérieur</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Politique de confidentialité</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Mentions légales</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Plan du camping</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" onClick={(e) => e.preventDefault()} className="social-link">
                📘 Facebook
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="social-link">
                📷 Instagram
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="social-link">
                🐦 Twitter
              </a>
            </div>
            
            <div className="certifications">
              <h5>Nos labels</h5>
              <div className="labels">
                <span className="label">🌟 3 étoiles</span>
                <span className="label">🌿 Éco-responsable</span>
                <span className="label">👨‍👩‍👧‍👦 Famille Plus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Camping La Canotte. Tous droits réservés.</p>
            <p>
              Site développé avec ❤️ pour vous offrir la meilleure expérience de réservation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
