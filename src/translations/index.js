import { GrassOutlined } from "@mui/icons-material"

const translations = {
  fr: {
    // Header
    header: {
      home: 'Accueil',
      facilities: 'Équipements',
      activities: 'Activités',
      gallery: 'Galerie',
      location: 'Lieu et Accès',
      rates: 'Tarifs',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title: 'BIENVENUE AU CAMPING LA CANOTTE',
      subtitle: 'Camping familial ★★ au Grau-d\'Agde',
      description: 'Situé en bordure du fleuve Hérault, La Canotte est un camping familial où vous trouverez repos et sérénité dans un cadre naturel exceptionnel.',
      viewRates: 'Voir les tarifs',
      reservations: 'Réservations',
      infoCards: {
        camping: {
          title: 'Camping 2 étoiles',
          description: 'Familial et convivial'
        },
        river: {
          title: 'Bord de rivière',
          description: 'Au bord de l\'Hérault'
        },
        beach: {
          title: 'Proche plages',
          description: 'À 15min à pied de la mer'
        },
        big: {
            title: 'Grands emplacements',
            description: 'Grands emplacements disponibles'
          },
        handicap: {
            title: 'Accès handicapés',
            description: 'Toutes les installations sont accesibles'
          },
        season: {
          title: 'Saison',
          description: '20 mai - 10 septembre'
        }
      }
    },
    // Facilities
    facilities: {
      title: 'Nos Équipements',
      subtitle: 'Tout le confort pour des vacances réussies',
      loisirs: 'Loisirs',
      items: {
        sanitaires: {
          title: 'Sanitaires',
          description: 'Blocs sanitaires avec douches chaudes'
        },
        big: {
          title: 'Grands espaces'
        },
        handicap: {
          title: 'Accès handicapés',
          description: 'Tous les équipements sont accessibles'
        },
        stars: {
          title: 'Camping 2 étoiles',
          description: 'Camping familial 2 étoiles'
        },
        nearseaandriver: {
          title: 'Proche de la mer et de la rivière',
          description: 'À 15 minutes à pied des plages de sable fin'
        },
        laverie: {
          title: 'Laverie',
          description: 'Machines à laver et sèche-linge'
        },
        epicerie: {
          title: 'Épicerie',
          description: 'Produits de première nécessité'
        },
        snack: {
            title: 'Buvette et Snack',
            description: 'Restauration et boissons sur place, vente de Pizzaas à emporter'
          },
        wifi: {
          title: 'WiFi gratuit',
          description: 'Connexion internet dans tout le camping'
        },
        parking: {
          title: 'Parking',
          description: 'Places de stationnement sécurisées'
        },
        playground: {
          title: 'Aire de jeux',
          description: 'Espace de jeux pour enfants'
        }
      }
    },
    // Activities
    activities: {
      title: 'Activités & Loisirs',
      subtitle: 'Profitez de nombreuses activités à faire dans le camping',
      items: {
        cycling: {
          title: 'Vélo',
          description: 'Pistes cyclables aménagées'
        },
        minigolf: {
          title: 'Mini-Golf',
          description: 'Un terrain de mini golf est présent dans le camping'
        },
        pingpong: {
          title: 'Ping Pong',
          description: 'Une table de Ping Pong est à votre disposition'
        },
        petanque: {
          title: 'Concours de Pétanque',
          description: 'Des tournois de pétanque sont régulièrement organisés'
        }
      }
    },

    region: {
      title: 'A proximité',
      subtitle: 'Profitez de nombreuses activités à faire dans la région',
      items: {
        beach: {
          title: 'Plages',
          description: '14 km de sable fin'
        },
        grec: {
          title: 'Ville grecque',
          description: 'À 2km'
        },
        canal: {
          title: 'Canal du midi',
          description: 'À 3km'
        },
        embouchure: {
          title: "Embouchure de l'Hérault",
          description: ''
        },
        fort: {
          title: "Fort Brescou",
          description: ''
        },
        grau: {
          title: "Stations du Grau et de la Tamarissière",
          description: 'Accessible à pied'
        },
        watersports: {
          title: "Activités nautiques",
          description: 'Jet-ski, location de bateaux, visites en bateau'
        }
      }
    },
    // Gallery
    gallery: {
      title: 'Galerie Photos',
      subtitle: 'Découvrez notre camping en images'
    },
    // Location
    location: {
      title: 'Lieu et Accès',
      subtitle: 'Un emplacement privilégié au cœur de l\'Hérault',
      adresse: 'Notre Adresse',
      transport: 'Accès & Transport',
      gare: 'Gare de train',
      gareDescriptions: 'Gare Agde - 5 km',
      road: 'Accès routier',
      roadDescriptions: 'Sortie A9 - Agde puis direction Le Grau-d\'Agde',
      aeroport: 'Aéroport',
      aeroportDescriptions: 'Montpellier - 45 km',
      description: 'Le camping La Canotte bénéficie d\'une situation exceptionnelle au Grau-d\'Agde, entre mer et rivière. À seulement 15 minutes à pied des plages de sable fin et en bordure de l\'Hérault, vous profiterez du meilleur des deux mondes.',
      nearbyAttractions: 'Attractions à proximité',
      attractions: {
        agde: 'Centre-ville d\'Agde - 5 km',
        capAgde: 'Cap d\'Agde - 8 km',
        beziers: 'Béziers - 25 km',
        montpellier: 'Montpellier - 60 km',
        sete: 'Sète - 35 km',
        pezenas: 'Pézenas - 30 km'
      }
    },
    // Rates
    rates: {
      title: 'Nos Tarifs',
      subtitle: 'Tarifs 2024 - Saison du 20 mai au 10 septembre',
      period: 'Période',
      night: '/nuit',
      pricePerNight: 'Prix par nuit',
      withoutelectricity: 'Emplacement sans électricité',
      withelectricity: 'Emplacement avec électricité',
      supplements: 'Suppléments',
      withoutElectricityDescription: 'Emplacement + 2 personnes, comprenant l\'accès aux sanitaires et les taxes',
      withElectricityDescription: 'Emplacement + 2 personnes + électricité, comprenant l\'accès',
      paimentMethods: 'Modes de paiement',
      especes: 'Espèces, chèques acceptés',
      ancv: 'Chèques vacances ANCV acceptés',
      creditCard: 'Cartes Bancaires non acceptées',
      supplementaryPerson: 'Personne supplémentaire majeure',
      supplementaryChild: 'Enfant de -7 ans',
      supplementaryTeen: 'Ado de 7 à 17 ans',
      dog: 'Chien',
      electricity: 'Électricité',
      includes: 'Nos tarifs incluent',
      includedItems: {
        pitch: 'Emplacement délimité',
        electricity: 'Électricité 6A',
        water: 'Point d\'eau à proximité',
        parking: 'Parking véhicule',
        access: 'Accès aux sanitaires',
        wifi: 'WiFi gratuit'
      },
      note: 'Taxe de séjour en sus : 0,50€ par personne et par nuit',
      contact: 'Contactez-nous pour plus d\'informations'
    },
    // Contact
    contact: {
      title: 'Contact & Réservations',
      subtitle: 'N\'hésitez pas à nous contacter pour toute information',
      phone: 'Téléphone',
      email: 'Email',
      address: 'Adresse',
      openingHours: 'Horaires d\'ouverture : 8h – 12h / 14h30 – 18h30',
      askInfos: 'Demande de renseignements',
      season: 'En saison (mai à septembre)',
      demandSuccess: 'Votre demande a été envoyée ! Nous vous répondrons rapidement.',
      reservations: 'Toute réservation se fait par mail ou par téléphone.',
      offSeason: 'Hors saison',
      form: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        send: 'Envoyer',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message'
      }
    },
    // Footer
    footer: {
      description: 'Camping familial 2 étoiles situé au Grau-d\'Agde, en bordure de l\'Hérault.',
      familyCamping: 'Votre camping familial au cœur de l\'Hérault',
      quickLinks: 'Liens rapides',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.'
    }
  },
  en: {
    // Header
    header: {
      home: "Home",
      facilities: "Facilities",
      activities: "Activities",
      gallery: "Gallery",
      location: "Location",
      rates: "Rates",
      contact: "Contact",
    },
    // Hero
    hero: {
      title: "WELCOME TO CAMPING LA CANOTTE",
      subtitle: "2-star family campsite in Grau-d'Agde",
      description:
        "Located on the banks of the Hérault river, La Canotte is a family campsite where you will find rest and serenity in an exceptional natural setting.",
      viewRates: "View rates",
      reservations: "Reservations",
      infoCards: {
        camping: {
          title: "2-star camping",
          description: "Family-friendly and welcoming",
        },
        river: {
          title: "Riverside",
          description: "On the banks of the Hérault",
        },
        beach: {
          title: "Near beaches",
          description: "15min walk to the sea",
        },
        big: {
          title: "Big spaces",
          description: "Large pitches available",
        },
        handicap: {
          title: "Disabled access",
          description: "All facilities are accessible",
        },
        season: {
          title: "Season",
          description: "May 20 - September 10",
        },
      },
    },
    // Facilities
    facilities: {
      title: "Our Facilities",
      subtitle: "All the comfort for a successful vacation",
      loisirs: "Leisure",
      items: {
        sanitaires: {
          title: "Sanitary facilities",
          description: "Sanitary blocks with hot showers",
        },
        big: {
          title: "Big spaces",
        },
        handicap: {
          title: "Disabled access",
          description: "All facilities are accessible",
        },
        stars: {
          title: "2-star camping",
          description: "2-star family campsite",
        },
        nearseaandriver: {
          title: "Close to sea and river",
          description: "15 minutes walk from the sandy beaches",
        },
        laverie: {
          title: "Laundry",
          description: "Washing machines and dryers",
        },
        epicerie: {
          title: "Grocery store",
          description: "Essential products",
        },
        snack: {
          title: "Snack bar and refreshments",
          description: "On-site dining and drinks, takeaway pizza available",
        },
        wifi: {
          title: "Free WiFi",
          description: "Internet connection throughout the campsite",
        },
        parking: {
          title: "Parking",
          description: "Secure parking spaces",
        },
        playground: {
          title: "Playground",
          description: "Play area for children",
        },
      },
    },
    // Activities
    activities: {
      title: "Activities & Leisure",
      subtitle: "Enjoy many activities to do at the campsite",
      items: {
        cycling: {
          title: "Cycling",
          description: "Developed bike paths",
        },
        minigolf: {
          title: "Mini-Golf",
          description: "A mini golf course is available at the campsite",
        },
        pingpong: {
          title: "Ping Pong",
          description: "A ping pong table is available",
        },
        petanque: {
          title: "Pétanque tournaments",
          description: "Pétanque tournaments are regularly organized",
        },
      },
    },
    // Region
    region: {
      title: "Nearby",
      subtitle: "Enjoy many activities in the surrounding area",
      items: {
        beach: {
          title: "Beaches",
          description: "14 km of fine sand",
        },
        grec: {
          title: "Greek city",
          description: "2 km away",
        },
        canal: {
          title: "Canal du Midi",
          description: "3 km away",
        },
        embouchure: {
          title: "Mouth of the Hérault River",
          description: "",
        },
        fort: {
          title: "Fort Brescou",
          description: "",
        },
        grau: {
          title: "Grau and Tamarissière resorts",
          description: "Within walking distance",
        },
        watersports: {
          title: "Water sports",
          description: "Jet ski, boat rentals, boat tours",
        },
      },
    },
    // Gallery
    gallery: {
      title: "Photo Gallery",
      subtitle: "Discover our campsite in pictures",
    },
    // Location
    location: {
      title: "Geographic Location",
      subtitle: "A privileged location in the heart of Hérault",
      description:
        "Camping La Canotte enjoys an exceptional location in Grau-d'Agde, between sea and river. Just 15 minutes walk from fine sand beaches and on the banks of the Hérault, you will enjoy the best of both worlds.",
      nearbyAttractions: "Nearby attractions",
      adresse: "Our Address",
      transport: "Access & Transport",
      gare: "Train station",
      gareDescriptions: "Agde train station - 5 km",
      road: "Road access",
      roadDescriptions: "Exit A9 - Agde then direction Le Grau-d'Agde",
      aeroport: "Airport",
      aeroportDescriptions: "Montpellier - 45 km",
      attractions: {
        agde: "Agde city center - 5 km",
        capAgde: "Cap d'Agde - 8 km",
        beziers: "Béziers - 25 km",
        montpellier: "Montpellier - 60 km",
        sete: "Sète - 35 km",
        pezenas: "Pézenas - 30 km",
      },
    },
    // Rates
    rates: {
      title: "Our Rates",
      subtitle: "2024 Rates - Season from May 20 to September 10",
      period: "Period",
      night: "/night",
      pricePerNight: "Price per night",
      withoutelectricity: "Pitch without electricity",
      withelectricity: "Pitch with electricity",
      supplements: "Supplements",
      withoutElectricityDescription:
        "Pitch + 2 persons, including access to facilities and taxes",
      withElectricityDescription:
        "Pitch + 2 persons + electricity, including access",
      supplementaryPerson: "Additional adult",
      supplementaryChild: "Child under 7",
      supplementaryTeen: "Teenager (7 to 17)",
      dog: "Dog",
      electricity: "Electricity",
      includes: "Our rates include",
      includedItems: {
        pitch: "Delimited pitch",
        electricity: "6A electricity",
        water: "Nearby water point",
        parking: "Vehicle parking",
        access: "Access to sanitary facilities",
        wifi: "Free WiFi",
      },
      paimentMethods: "Payment methods",
      especes: "Cash and checks accepted",
      ancv: "ANCV holiday vouchers accepted",
      creditCard: "Credit cards not accepted",
      note: "Tourist tax extra: €0.50 per person per night",
      contact: "Contact us for more information",
    },
    // Contact
    contact: {
      title: "Contact & Reservations",
      subtitle: "Do not hesitate to contact us for any information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      openingHours: "Opening hours: 8am – 12pm / 2:30pm – 6:30pm",
      askInfos: "Request for information",
      season: "In season (May to September)",
      demandSuccess: "Your request has been sent! We will respond shortly.",
      reservations: "All reservations must be made by email or phone.",
      offSeason: "Off season",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",
        success: "Message sent successfully!",
        error: "Error sending message",
      },
    },
    // Footer
    footer: {
      description:
        "2-star family campsite located in Grau-d'Agde, on the banks of the Hérault.",
      familyCamping: "Your family campsite in the heart of Hérault",
      quickLinks: "Quick links",
      contact: "Contact",
      followUs: "Follow us",
      rights: "All rights reserved.",
    },
  }
}

export default translations
