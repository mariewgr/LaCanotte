import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Alert
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as AccessTimeIcon,
  Emergency as EmergencyIcon
} from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailData = {
      name: '',
      title: '',
      email: '',
      message: ''
    }
    mailData.name = formData.name
    mailData.email = formData.email
    mailData.title = `Demande de contact de ${formData.name}`
    mailData.message = `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\nMessage : ${formData.message}`

    emailjs.send(
      'service_tn1leos',      // <- remplace par ton vrai ID
      'template_q68oq5p',     // <- remplace par ton vrai ID
      mailData,               // <- contient name, email, phone, message
      'xhRHZGKtTAodVGuhy'       // <- remplace par ta clé publique EmailJS
    )
    .then(() => {
      console.log('Demande de contact envoyée.',)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    })
    .catch(() => {
      console.error('Erreur lors de l’envoi de la demande de contact.')
    })
  }
  

  return (
    <Box id="contact" component="section" sx={{ py: 8}}>
      <Container maxWidth="lg" >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#2c5530' }}>
            {t('contact.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {t('contact.subtitle')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Colonne Gauche : Infos de contact */}
          {/* Colonne Gauche : Infos de contact */}
<Box sx={{ flex: 1, pb: 4, borderRadius: 10 }}>
  <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
    
    {/* Title at the top */}
    <Typography
      variant="h5"
      sx={{
        mb: 3,
        fontWeight: 'bold',
        color: '#2c5530',
        textAlign: 'center'
      }}
    >
      {t('contact.phone')} & {t('contact.email')}
    </Typography>

    {/* Centered Content */}
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        textAlign: 'center',
        borderRadius: 8
      }}
    >
      {/* Email */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <EmailIcon sx={{ color: '#2c5530'}} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <a
              href="mailto:campinglacanotte@outlook.fr"
              style={{ color: '#2c5530', textDecoration: 'none' }}
            >
              campinglacanotte@outlook.fr
            </a>
          </Typography>
        </Box>
      </Box>

      {/* Phones */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <PhoneIcon sx={{ color: '#2c5530', mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <a href="tel:0626150157" style={{ color: '#2c5530', textDecoration: 'none' }}>
              06 26 15 01 57
            </a>{' '}ou{' '}
            <a href="tel:0467941574" style={{ color: '#2c5530' }}>
              04 67 94 15 74
            </a>
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
        {t('contact.openingHours')}
        </Typography>
      </Box>

      {/* Alert */}
      <Alert severity="info" sx={{ maxWidth: 300 }}>
      {t('contact.reservations')}
      </Alert>
    </Box>
  </Card>
</Box>




  {/* Colonne Droite : Formulaire */}
  <Box sx={{ flex: 1, pb: 4, paddingLeft: 5, borderRadius: 10 }}>
    <Card sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#2c5530' }}>
        ✉️ {t('contact.askInfos')}
      </Typography>

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {t('contact.demandSuccess')}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            fullWidth
            label={t('contact.form.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            label={t('contact.form.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
          <TextField
            fullWidth
            label={t('contact.form.phone')}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            label={t('contact.form.message')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={5}
            placeholder="Décrivez votre demande, vos besoins spécifiques..."
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: '#2c5530',
              '&:hover': {
                backgroundColor: '#1e3a21'
              },
              py: 1.5
            }}
          >
            {t('contact.form.send')}
          </Button>
        </Box>
      </Box>
    </Card>
  </Box>
</Box>
      </Container>
    </Box>
  )
}

export default Contact
