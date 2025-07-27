import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    message: ''
  })

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
    alert('Votre demande a été envoyée ! Nous vous répondrons rapidement.')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Nous Contacter</h2>
          <p>Réservez votre séjour ou posez-nous vos questions</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📞 Téléphone</h3>
              <p>
                <strong>04 67 94 20 54</strong><br/>
                Ouvert de 8h à 12h et 14h30 à 18h30
              </p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>
                <strong>contact@camping-lacanotte.fr</strong><br/>
                Réponse sous 24h
              </p>
            </div>

            <div className="info-card">
              <h3>📍 Adresse</h3>
              <p>
                <strong>Camping La Canotte</strong><br/>
                Boulevard Saint-Christ<br/>
                34300 Le Grau-d'Agde<br/>
                Hérault, France
              </p>
            </div>

            <div className="info-card">
              <h3>🕒 Horaires d'accueil</h3>
              <p>
                <strong>Haute saison :</strong> 8h-12h / 14h30-18h30<br/>
                <strong>Basse saison :</strong> 9h-12h / 14h-18h<br/>
                <em>Fermé le dimanche matin</em>
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h3>✉️ Demande de renseignements</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Nombre de personnes</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionner</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6+">6 personnes ou plus</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="dates">Dates souhaitées</label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  value={formData.dates}
                  onChange={handleChange}
                  placeholder="Ex: du 15 au 22 juillet 2024"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Décrivez votre demande, vos besoins spécifiques..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>

        <div className="emergency-contact">
          <div className="emergency-card">
            <h3>🚨 Contact d'urgence</h3>
            <p>
              En cas d'urgence pendant votre séjour :<br/>
              <strong>06 12 34 56 78</strong> (24h/24)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
