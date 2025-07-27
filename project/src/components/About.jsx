import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="camping" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Le Camping La Canotte</h2>
          <p>Un havre de paix au cœur de l'Hérault</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>🌿 Un cadre naturel exceptionnel</h3>
              <p>
                Niché en bordure du fleuve Hérault, notre camping familial 2 étoiles 
                vous offre un cadre naturel préservé où la tranquillité règne en maître. 
                Vous pourrez profiter de la fraîcheur de la rivière et de l'ombre 
                bienfaisante de nos grands arbres.
              </p>
            </div>
            
            <div className="text-block">
              <h3>👨‍👩‍👧‍👦 Ambiance familiale</h3>
              <p>
                La Canotte privilégie une atmosphère conviviale et familiale. 
                Notre équipe vous accueille dans un esprit de simplicité et de 
                bonne humeur, pour que vos vacances soient synonymes de détente 
                et de plaisir partagé.
              </p>
            </div>
            
            <div className="text-block">
              <h3>🏕️ Emplacements spacieux</h3>
              <p>
                Nos grands emplacements ombragés vous permettront d'installer 
                confortablement votre tente, caravane ou camping-car. Chaque 
                emplacement dispose d'un accès facile aux sanitaires et aux 
                différents services du camping.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Camping La Canotte - Vue d'ensemble"
            />
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🚿</div>
            <h4>Sanitaires modernes</h4>
            <p>Blocs sanitaires entretenus quotidiennement</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">♿</div>
            <h4>Accès handicapés</h4>
            <p>Installations adaptées aux personnes à mobilité réduite</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🧺</div>
            <h4>Machine à laver</h4>
            <p>Service de laverie disponible</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🏪</div>
            <h4>Épicerie</h4>
            <p>Produits de première nécessité sur place</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
