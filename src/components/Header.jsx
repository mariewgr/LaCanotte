import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>LA CANOTTE</h1>
          <span>Camping ★★</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#accueil" onClick={() => scrollToSection('accueil')}>Accueil</a></li>
            <li><a href="#camping" onClick={() => scrollToSection('camping')}>Le Camping</a></li>
            <li><a href="#equipements" onClick={() => scrollToSection('equipements')}>Équipements</a></li>
            <li><a href="#galerie" onClick={() => scrollToSection('galerie')}>Galerie</a></li>
            <li><a href="#region" onClick={() => scrollToSection('region')}>La Région</a></li>
            <li><a href="#tarifs" onClick={() => scrollToSection('tarifs')}>Tarifs</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
