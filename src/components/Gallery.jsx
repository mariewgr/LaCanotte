import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton
} from '@mui/material'
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import './Gallery.css'

const Gallery = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      src: 'https://slides.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Vue générale du camping'
    },
    {
      src: 'https://slides.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Emplacements camping'
    },
    {
      src: 'https://slides.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bord de rivière'
    },
    {
      src: 'https://slides.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Aire de jeux'
    },
    {
      src: 'https://slides.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Activités familiales'
    },
    {
      src: 'https://slides.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Soirée camping'
    }
  ]

  // Défilement automatique
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change d'image toutes les 4 secondes

      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, slides.length])

  // Swipe tactile
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX }
    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].clientX
      const distance = touchStartX.current - touchEndX.current
      if (Math.abs(distance) > 50) distance > 0 ? goToNext() : goToPrevious()
    }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Pause l'auto-play quand l'utilisateur interagit
    // Reprendre l'auto-play après 10 secondes
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    goToSlide(newIndex)
  }

  return (
    <section id="galerie" className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>{t('gallery.title')}</h2>
          <p>{t('gallery.subtitle')}</p>
        </div>
        {/* Carrousel */}
              <Box
                sx={{ position: 'relative', height: '70vh', overflow: 'hidden', mb: 4 }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {slides.map((slide, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${slide.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: index === currentSlide ? 1 : 0,
                      transition: 'opacity 1s ease-in-out'
                    }}
                  />
                ))}
        
                {/* Bouton gauche */}
                <IconButton
                  onClick={goToPrevious}
                  sx={{
                    position: 'absolute',
                    left: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    color: '#2c5530',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
                  }}
                >
                  <ChevronLeftIcon sx={{ fontSize: 30 }} />
                </IconButton>
        
                {/* Bouton droit */}
                <IconButton
                  onClick={goToNext}
                  sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    color: '#2c5530',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.6)' }
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 30 }} />
                </IconButton>
        
                {/* Indicateurs */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1
                  }}
                >
                  {slides.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => goToSlide(index)}
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor:
                          index === currentSlide ? '#2c5530' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Box>
              </Box>
      </div>
    </section>
  )
}

export default Gallery