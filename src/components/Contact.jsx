import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  Alert
} from '@mui/material'
import {
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

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
      name: formData.name,
      email: formData.email,
      title: `Demande de contact de ${formData.name}`,
      message: `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone}\nMessage : ${formData.message}`
    }

    emailjs
      .send(
        'service_tn1leos',     // ⚠️ mets ton vrai service ID
        'template_q68oq5p',    // ⚠️ mets ton vrai template ID
        mailData,
        'xhRHZGKtTAodVGuhy'    // ⚠️ ta clé publique
      )
      .then(() => {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 5000)
        setFormData({ name: '', email: '', phone: '', message: '' })
      })
      .catch(() => {
        console.error('Erreur lors de l’envoi de la demande de contact.')
      })
  }

  return (
    <section id="contact" className="contact">
      <Container maxWidth="lg">
        {/* En-tête */}
        <div className="section-header">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        {/* Contenu responsive */}
        <div className="contact-content">
          {/* Bloc infos */}
          <div className="info-card">
            <h3>{t('contact.phone')} & {t('contact.email')}</h3>

            <div className="contact-item">
              <EmailIcon style={{ color: '#2c5530', marginRight: '8px' }} />
              <a href="mailto:campinglacanotte@outlook.fr">
                campinglacanotte@outlook.fr
              </a>
            </div>

            <div className="contact-item">
              <PhoneIcon style={{ color: '#2c5530', marginRight: '8px' }} />
              <a href="tel:0626150157">06 26 15 01 57</a> ou{' '}
              <a href="tel:0467941574">04 67 94 15 74</a>
            </div>

            <p className="contact-note">{t('contact.openingHours')}</p>

            <Alert severity="info" sx={{ mt: 2 }}>
              {t('contact.reservations')}
            </Alert>
          </div>

          {/* Bloc formulaire */}
          <div className="contact-form">
            <h3>✉️ {t('contact.askInfos')}</h3>

            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                {t('contact.demandSuccess')}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
