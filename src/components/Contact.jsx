import React, { useState } from 'react'
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
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
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const guestOptions = [
    { value: '', label: 'Sélectionner' },
    { value: '1', label: '1 personne' },
    { value: '2', label: '2 personnes' },
    { value: '3', label: '3 personnes' },
    { value: '4', label: '4 personnes' },
    { value: '5', label: '5 personnes' },
    { value: '6+', label: '6 personnes ou plus' }
  ]

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 30, color: '#2c5530' }} />,
      title: 'Téléphone',
      content: (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>04 67 94 20 54</Typography>
          <Typography variant="body2" color="text.secondary">
            Ouvert de 8h à 12h et 14h30 à 18h30
          </Typography>
        </>
      )
    },
    {
      icon: <EmailIcon sx={{ fontSize: 30, color: '#2c5530' }} />,
      title: 'Email',
      content: (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>contact@camping-lacanotte.fr</Typography>
          <Typography variant="body2" color="text.secondary">
            Réponse sous 24h
          </Typography>
        </>
      )
    },
    {
      icon: <LocationIcon sx={{ fontSize: 30, color: '#2c5530' }} />,
      title: 'Adresse',
      content: (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Camping La Canotte</Typography>
          <Typography variant="body2" color="text.secondary">
            Boulevard Saint-Christ<br/>
            34300 Le Grau-d'Agde<br/>
            Hérault, France
          </Typography>
        </>
      )
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 30, color: '#2c5530' }} />,
      title: 'Horaires d\'accueil',
      content: (
        <>
          <Typography variant="body2">
            <strong>Haute saison :</strong> 8h-12h / 14h30-18h30<br/>
            <strong>Basse saison :</strong> 9h-12h / 14h-18h<br/>
            <em>Fermé le dimanche matin</em>
          </Typography>
        </>
      )
    }
  ]

  return (
    <Box id="reservations" component="section" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#2c5530' }}>
            Réservations et Contact
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Réservez votre séjour ou posez-nous vos questions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={{ height: '100%', p: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {info.icon}
                        <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                          {info.title}
                        </Typography>
                      </Box>
                      {info.content}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#2c5530' }}>
                ✉️ Demande de renseignements
              </Typography>
              
              {showSuccess && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Votre demande a été envoyée ! Nous vous répondrons rapidement.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom complet"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Nombre de personnes"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      variant="outlined"
                    >
                      {guestOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Dates souhaitées"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      placeholder="Ex: du 15 au 22 juillet 2024"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      placeholder="Décrivez votre demande, vos besoins spécifiques..."
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                      Envoyer ma demande
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Emergency Contact */}
        <Box sx={{ mt: 6 }}>
          <Card sx={{ backgroundColor: '#ffebee', border: '2px solid #f44336' }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <EmergencyIcon sx={{ fontSize: 40, color: '#f44336', mr: 1 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f44336' }}>
                  Contact d'urgence
                </Typography>
              </Box>
              <Typography variant="body1">
                En cas d'urgence pendant votre séjour :<br/>
                <Typography component="span" variant="h6" sx={{ fontWeight: 'bold' }}>
                  06 12 34 56 78
                </Typography> (24h/24)
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
