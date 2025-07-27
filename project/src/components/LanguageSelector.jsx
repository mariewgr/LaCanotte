import React from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Language as LanguageIcon } from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (lang) => {
    changeLanguage(lang)
    handleClose()
  }

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <LanguageIcon />
        <Typography variant="body2" sx={{ ml: 0.5, fontSize: '0.8rem' }}>
          {currentLanguage?.flag}
        </Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={lang.code === language}
            sx={{ minWidth: 120 }}
          >
            <Typography variant="body2" sx={{ mr: 1 }}>
              {lang.flag}
            </Typography>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default LanguageSelector
