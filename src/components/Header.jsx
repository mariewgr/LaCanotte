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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
    { text: 'Accueil', id: 'accueil' },
    { text: 'Le Camping', id: 'camping' },
    { text: 'Équipements', id: 'equipements' },
    { text: 'Les Activités', id: 'activites' },
    { text: 'La Région', id: 'region' },
    { text: 'Tarifs', id: 'tarifs' },
    { text: 'Localisation', id: 'localisation' },
    {text: 'Reservations', id: 'reservations'},
    { text: 'Galerie', id: 'galerie' }
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
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
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
