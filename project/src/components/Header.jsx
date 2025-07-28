import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { t } = useLanguage()

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

  const menuItems = [
    { text: t('header.home'), id: 'accueil' },
    { text: t('header.facilities'), id: 'equipements' },
    { text: t('header.rates'), id: 'tarifs' },
    { text: t('header.location'), id: 'localisation' },
    { text: t('header.contact'), id: 'contact' },
    { text: t('header.gallery'), id: 'galerie' }
  ]

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#2c5530' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'white' }}>
              LA CANOTTE
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#ffd700' }}>
              Camping ★★
            </Typography>
          </Box>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageSelector />
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <LanguageSelector />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#2c5530'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white' }}>
            Menu
          </Typography>
          <IconButton onClick={toggleMenu} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    color: 'white',
                    '& .MuiListItemText-primary': {
                      color: 'white'
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer to account for fixed AppBar */}
      <Toolbar />
    </>
  )
}

export default Header
