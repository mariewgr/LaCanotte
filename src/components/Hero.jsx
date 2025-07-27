import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Water as WaterIcon,
  Waves as WavesIcon,
  CalendarMonth as CalendarIcon,
  AccessibleForward as AccessibleForwardIcon,
  Bungalow as BungalowIcon
} from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Vue générale du camping'
    },
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Emplacements camping'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Rivière Hérault'
    },
    {
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      alt: 'Nature environnante'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change d'image toutes les 5 secondes

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const infoCards = [
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.camping.title'),
      description: t('hero.infoCards.camping.description')
    },
    {
      icon: <WaterIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.river.title'),
      description: t('hero.infoCards.river.description')
    },
    {
      icon: <WavesIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.beach.title'),
      description: t('hero.infoCards.beach.description')
    },
    {
      icon: <BungalowIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.big.title'),
      description: t('hero.infoCards.big.description')
    },
    {
      icon: <CalendarIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.season.title'),
      description: t('hero.infoCards.season.description')
    },
    {
      icon: <AccessibleForwardIcon sx={{ fontSize: 40, color: '#2c5530' }} />,
      title: t('hero.infoCards.handicap.title'),
      description: t('hero.infoCards.handicap.description')
    }
  ]

  return (
    <Box id="accueil" component="section">
      {/* Carousel Section */}
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }
            }}
          />
        ))}
        
        {/* Navigation Buttons */}
        <IconButton
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 30 }} />
        </IconButton>
        
        <IconButton
          onClick={goToNext}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 30 }} />
        </IconButton>
        
        {/* Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 2
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
                backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </Box>

        {/* Hero Content Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Typography 
                variant={isMobile ? 'h3' : 'h1'} 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
              >
                {t('hero.title')}
              </Typography>
              <Typography 
                variant={isMobile ? 'h6' : 'h4'} 
                sx={{ 
                  mb: 3, 
                  color: '#ffd700',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                }}
              >
                {t('hero.subtitle')}
              </Typography>
              <Typography 
                variant={isMobile ? 'body1' : 'h6'} 
                sx={{ 
                  mb: 4, 
                  maxWidth: 600, 
                  mx: 'auto',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                }}
              >
                {t('hero.description')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.getElementById('tarifs').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    backgroundColor: '#2c5530',
                    '&:hover': {
                      backgroundColor: '#1e3a21'
                    },
                    px: 4,
                    py: 1.5
                  }}
                >
                  {t('hero.viewRates')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    px: 4,
                    py: 1.5
                  }}
                >
                  {t('hero.reservations')}
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Info Cards Section */}
      <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {infoCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      {card.icon}
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
