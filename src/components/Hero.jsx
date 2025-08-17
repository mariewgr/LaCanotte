import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  const slides = [
    { image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1920&q=80', alt: 'Vue générale du camping' },
    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80', alt: 'Emplacements camping' },
    { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80', alt: 'Rivière Hérault' },
    { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80', alt: 'Nature environnante' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  const goToSlide = (i) => setCurrentSlide(i)

  // Swipe tactile
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].clientX }
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    const distance = touchStartX.current - touchEndX.current
    if (Math.abs(distance) > 50) distance > 0 ? goToNext() : goToPrevious()
  }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box id="accueil" component="section" sx={{ textAlign: 'center', py: 6 }}>
      {/* Texte au-dessus */}
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h2"
          sx={{ fontWeight: 'bold', mb: 2, color: '#2c5530' }}
        >
          {t('hero.title')}
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          sx={{ mb: 2, color: '#2c5530' }}
        >
          {t('hero.subtitle')}
        </Typography>
        <Typography
          variant={'body1'}
          sx={{ mb: 4, maxWidth: 800, mx: 'auto', color: 'text.secondary' }}
        >
          {t('hero.description')}
        </Typography>
      </Container>

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
              backgroundImage: `url(${slide.image})`,
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

      {/* Boutons en dessous */}
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() =>
              document.getElementById('tarifs').scrollIntoView({ behavior: 'smooth' })
            }
            sx={{ backgroundColor: '#2c5530', '&:hover': { backgroundColor: '#1e3a21' } }}
          >
            {t('hero.viewRates')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
            sx={{
              borderColor: '#2c5530',
              color: '#2c5530',
              '&:hover': { backgroundColor: 'rgba(44,85,48,0.1)' }
            }}
          >
            {t('hero.reservations')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
