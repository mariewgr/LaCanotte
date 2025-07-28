import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Gallery.css'

const Gallery = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Vue générale du camping'
    },
    {
      src: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Emplacements camping'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bord de rivière'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Aire de jeux'
    },
    {
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Activités familiales'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Soirée camping'
    }
  ]

  // Défilement automatique
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change d'image toutes les 4 secondes

      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Pause l'auto-play quand l'utilisateur interagit
    // Reprendre l'auto-play après 10 secondes
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <section id="galerie" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>{t('gallery.title')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </div>
        
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image.src} alt={image.alt} />
                  <div className="carousel-overlay">
                    <span>{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Boutons de navigation */}
            <button 
              className="carousel-btn carousel-btn-prev" 
              onClick={goToPrevious}
              aria-label="Image précédente"
            >
              &#8249;
            </button>
            <button 
              className="carousel-btn carousel-btn-next" 
              onClick={goToNext}
              aria-label="Image suivante"
            >
              &#8250;
            </button>
          </div>
          
          {/* Indicateurs de navigation */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Contrôle auto-play */}
          <div className="carousel-controls">
            <button
              className={`play-pause-btn ${isAutoPlaying ? 'playing' : 'paused'}`}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? 'Mettre en pause' : 'Reprendre'}
            >
              {isAutoPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery