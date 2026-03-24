import { Car, Translation } from './types';

export const CARS: Car[] = [
  {
    id: 'ferrari-f8',
    name: 'Ferrari F8 Tributo',
    category: 'Sport',
    pricePerDay: 1200,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '720 HP',
      acceleration: '2.9s',
      topSpeed: '340 km/h'
    }
  },
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracán Evo',
    category: 'Sport',
    pricePerDay: 1100,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '640 HP',
      acceleration: '3.0s',
      topSpeed: '325 km/h'
    }
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera S',
    category: 'Sport',
    pricePerDay: 650,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '450 HP',
      acceleration: '3.5s',
      topSpeed: '308 km/h'
    }
  },
  {
    id: 'range-rover',
    name: 'Range Rover Autobiography',
    category: 'SUV',
    pricePerDay: 550,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '525 HP',
      acceleration: '5.4s',
      topSpeed: '250 km/h'
    }
  },
  {
    id: 'mercedes-g63',
    name: 'Mercedes-AMG G63',
    category: 'SUV',
    pricePerDay: 850,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '585 HP',
      acceleration: '4.5s',
      topSpeed: '220 km/h'
    }
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost',
    category: 'Luxury',
    pricePerDay: 1800,
    image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '563 HP',
      acceleration: '4.8s',
      topSpeed: '250 km/h'
    }
  },
  {
    id: 'porsche-911-cabrio',
    name: 'Porsche 911 Cabriolet',
    category: 'Convertible',
    pricePerDay: 750,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '450 HP',
      acceleration: '3.7s',
      topSpeed: '306 km/h'
    }
  },
  {
    id: 'lamborghini-huracan-spyder',
    name: 'Lamborghini Huracán Spyder',
    category: 'Convertible',
    pricePerDay: 1250,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '610 HP',
      acceleration: '3.4s',
      topSpeed: '324 km/h'
    }
  },
  {
    id: 'ferrari-488-spider',
    name: 'Ferrari 488 Spider',
    category: 'Convertible',
    pricePerDay: 1300,
    image: 'https://images.unsplash.com/photo-1594731802114-192669694002?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '670 HP',
      acceleration: '3.0s',
      topSpeed: '325 km/h'
    }
  },
  {
    id: 'rolls-royce-dawn',
    name: 'Rolls-Royce Dawn',
    category: 'Convertible',
    pricePerDay: 2200,
    image: 'https://images.unsplash.com/photo-1631214524020-5e183976b9ad?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '563 HP',
      acceleration: '4.9s',
      topSpeed: '250 km/h'
    }
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley Bentayga',
    category: 'SUV',
    pricePerDay: 950,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '542 HP',
      acceleration: '4.5s',
      topSpeed: '290 km/h'
    }
  },
  {
    id: 'chevrolet-corvette',
    name: 'Chevrolet Corvette C8',
    category: 'Sport',
    pricePerDay: 800,
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '495 HP',
      acceleration: '2.9s',
      topSpeed: '312 km/h'
    }
  },
  {
    id: 'mercedes-sl',
    name: 'Mercedes-AMG SL 63',
    category: 'Convertible',
    pricePerDay: 900,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '585 HP',
      acceleration: '3.6s',
      topSpeed: '315 km/h'
    }
  },
  {
    id: 'bmw-x6',
    name: 'BMW X6 M Competition',
    category: 'SUV',
    pricePerDay: 700,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
    specs: {
      power: '625 HP',
      acceleration: '3.8s',
      topSpeed: '290 km/h'
    }
  }
];

export const TRANSLATIONS: Record<string, Translation> = {
  en: {
    heroTitle: 'Experience Luxury on the French Riviera',
    heroSubtitle: 'Not just a rental, but a tailor-made solution for your premier experience. Delivering your car where and how you want, under the guidance of Pascal Hals.',
    fleetTitle: 'Our Exclusive Fleet',
    fleetSubtitle: 'Select from the world\'s most prestigious automotive brands.',
    bookNow: 'Book Now',
    contactUs: 'Contact Us',
    aboutTitle: 'Car4Rent Cannes',
    aboutText: 'Welcome! If you’re looking to rent a car for your upcoming trip, we’d love to help. Contact us with the car or category you’re interested in and we’ll provide all the details. Ordering directly online is not available because model availability varies; we want to provide the best option based on your needs. Speak with our team after receiving your quote to confirm the perfect match. From compact options to spacious vans, don’t hesitate to contact us. We’re here to help you find the perfect rental for your journey.',
    reviewsTitle: 'What Our Clients Say',
    locationsTitle: 'Operating Across the Riviera',
    locationsText: 'We deliver to Cannes, Nice Airport, Monaco, Saint-Tropez, and all major destinations across the South of France.',
    viewFleet: 'View Fleet',
    perDay: '/ day',
    faqTitle: 'Key Rental Guidelines & Information',
    faqs: [
      {
        question: 'What are the key rental guidelines?',
        answer: 'Minimum rental age: 25 years with a valid driving license for at least 2 years. Security deposit required via credit card pre-authorization. Rates include insurance, mileage allowance, and VAT. Additional driver option available for an extra fee. Fuel costs are the renter’s responsibility. Delivery and collection available on request. Penalties apply for late returns, excess mileage, and traffic violations. 24-hour roadside assistance included. Free cancellation up to 72 hours before start; fees apply thereafter. Long-term rental options with special rates.'
      },
      {
        question: 'What kind of insurance do you provide?',
        answer: 'For your peace of mind during your luxury car hire experience, Car4rent provides comprehensive insurance cover. This includes: Collision Damage Waiver (CDW): Limits your financial responsibility for damage to the rented vehicle, subject to the rental agreement. Theft Protection (TP): Covers the cost of replacing the vehicle in case of theft, subject to terms and conditions. Third-Party Liability: Protects you from legal liability for injury or property damage to third parties. Personal Accident Insurance (PAI): Offers coverage for the driver and passengers in case of accidents. Please review the rental agreement for full terms, deductibles, and exclusions.'
      },
      {
        question: 'How can I rent my dream car?',
        answer: 'Welcome! If you’re looking to rent a car for your upcoming trip, we’d love to help. Contact us with the car or category you’re interested in and we’ll provide all the details. Ordering directly online is not available because model availability varies; we want to provide the best option based on your needs. Speak with our team after receiving your quote to confirm the perfect match. From compact options to spacious vans, don’t hesitate to contact us. We’re here to help you find the perfect rental for your journey.'
      }
    ],
    bookingTitle: 'Book Your Luxury Experience',
    selectCar: 'Select Vehicle',
    pickUpDate: 'Pick-up Date',
    dropOffDate: 'Drop-off Date',
    pickUpLocation: 'Pick-up Location',
    dropOffLocation: 'Drop-off Location',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    confirmBooking: 'Confirm Booking',
    bookingSuccess: 'Booking Confirmed',
    bookingSuccessText: 'Thank you for choosing Car4Rent. Our concierge team will contact you shortly to finalize your reservation.',
    close: 'Close',
    galleryTitle: 'Our Luxury Gallery',
    pricingTitle: 'Pricing & Availability',
    destinationsTitle: 'Explore the Riviera',
    recommendations: 'Travel Recommendations',
    bestCarForTrip: 'The Best Car for Your Trip'
  },
  fr: {
    heroTitle: 'Vivez le luxe sur la Côte d\'Azur',
    heroSubtitle: 'Plus qu\'une simple location, une solution sur mesure pour votre expérience de prestige. Livraison de votre voiture où et comme vous le souhaitez, avec Pascal Hals.',
    fleetTitle: 'Notre Flotte Exclusive',
    fleetSubtitle: 'Choisissez parmi les marques automobiles les plus prestigieuses au monde.',
    bookNow: 'Réserver',
    contactUs: 'Contactez-nous',
    aboutTitle: 'Car4Rent Cannes',
    aboutText: 'Bienvenue ! Si vous cherchez à louer une voiture pour votre prochain voyage, nous serions ravis de vous aider. Contactez-nous avec la voiture ou la catégorie qui vous intéresse et nous vous fournirons tous les détails. La commande directe en ligne n\'est pas disponible car la disponibilité des modèles varie ; nous voulons vous proposer la meilleure option en fonction de vos besoins. Parlez avec notre équipe après avoir reçu votre devis pour confirmer la correspondance parfaite. Des options compactes aux vans spacieux, n\'hésitez pas à nous contacter. Nous sommes là pour vous aider à trouver la location idéale pour votre voyage.',
    reviewsTitle: 'Ce que disent nos clients',
    locationsTitle: 'Présent sur toute la Riviera',
    locationsText: 'Nous livrons à Cannes, à l\'aéroport de Nice, à Monaco, à Saint-Tropez et dans toutes les destinations majeures du sud de la France.',
    viewFleet: 'Voir la Flotte',
    perDay: '/ jour',
    faqTitle: 'Directives clés et informations de location',
    faqs: [
      {
        question: 'Quelles sont les principales directives de location ?',
        answer: 'Âge minimum de location : 25 ans avec un permis de conduire valide depuis au moins 2 ans. Dépôt de garantie requis via pré-autorisation de carte de crédit. Les tarifs incluent l\'assurance, le kilométrage et la TVA. Option conducteur supplémentaire disponible moyennant des frais. Les frais de carburant sont à la charge du locataire. Livraison et récupération disponibles sur demande. Des pénalités s\'appliquent pour les retours tardifs, le kilométrage excédentaire et les infractions au code de la route. Assistance routière 24h/24 incluse. Annulation gratuite jusqu\'à 72 heures avant le début ; des frais s\'appliquent ensuite. Options de location longue durée avec des tarifs spéciaux.'
      },
      {
        question: 'Quel type d\'assurance proposez-vous ?',
        answer: 'Pour votre tranquillité d\'esprit lors de votre expérience de location de voiture de luxe, Car4rent propose une couverture d\'assurance complète. Cela comprend : Collision Damage Waiver (CDW) : Limite votre responsabilité financière pour les dommages au véhicule loué, sous réserve du contrat de location. Protection contre le vol (TP) : Couvre le coût de remplacement du véhicule en cas de vol, sous réserve des conditions générales. Responsabilité civile : Vous protège de la responsabilité légale pour les blessures ou les dommages matériels causés à des tiers. Assurance accident personnel (PAI) : Offre une couverture pour le conducteur et les passagers en cas d\'accident. Veuillez consulter le contrat de location pour les conditions complètes, les franchises et les exclusions.'
      },
      {
        question: 'Comment puis-je louer la voiture de mes rêves ?',
        answer: 'Bienvenue ! Si vous cherchez à louer une voiture pour votre prochain voyage, nous serions ravis de vous aider. Contactez-nous avec la voiture ou la catégorie qui vous intéresse et nous vous fournirons tous les détails. La commande directe en ligne n\'est pas disponible car la disponibilité des modèles varie ; nous voulons vous proposer la meilleure option en fonction de vos besoins. Parlez avec notre équipe après avoir reçu votre devis pour confirmer la correspondance parfaite. Des options compactes aux vans spacieux, n\'hésitez pas à nous contacter. Nous sommes là pour vous aider à trouver la location idéale pour votre voyage.'
      }
    ],
    bookingTitle: 'Réservez votre expérience de luxe',
    selectCar: 'Sélectionnez le véhicule',
    pickUpDate: 'Date de départ',
    dropOffDate: 'Date de retour',
    pickUpLocation: 'Lieu de départ',
    dropOffLocation: 'Lieu de retour',
    fullName: 'Nom complet',
    emailAddress: 'Adresse e-mail',
    phoneNumber: 'Numéro de téléphone',
    confirmBooking: 'Confirmer la réservation',
    bookingSuccess: 'Réservation confirmée',
    bookingSuccessText: 'Merci d\'avoir choisi Car4Rent. Notre équipe de conciergerie vous contactera sous peu pour finaliser votre réservation.',
    close: 'Fermer',
    galleryTitle: 'Notre Galerie de Luxe',
    pricingTitle: 'Tarifs & Disponibilité',
    destinationsTitle: 'Explorez la Riviera',
    recommendations: 'Recommandations de voyage',
    bestCarForTrip: 'La meilleure voiture pour votre voyage'
  }
};

export const CITIES: Record<string, any> = {
  en: [
    {
      id: 'cannes',
      name: 'Cannes',
      image: 'https://images.unsplash.com/photo-1506012733851-00f4e69850fa?auto=format&fit=crop&q=80&w=1000',
      description: 'The star of the French Riviera, famous for its film festival and luxury lifestyle.',
      recommendations: [
        'Stroll along the Boulevard de la Croisette',
        'Visit the Palais des Festivals',
        'Take a boat to the Îles de Lérins',
        'Dine at a beachfront restaurant'
      ],
      bestCarAdvice: 'For the ultimate Croisette experience, a convertible is a must to see and be seen.',
      recommendedCarId: 'ferrari-488-spider'
    },
    {
      id: 'nice',
      name: 'Nice',
      image: 'https://images.unsplash.com/photo-1533619019048-990091bc7320?auto=format&fit=crop&q=80&w=1000',
      description: 'A vibrant city with a mix of old-world charm and modern elegance.',
      recommendations: [
        'Walk the Promenade des Anglais',
        'Explore the Old Town (Vieux Nice)',
        'Visit the Cours Saleya Market',
        'Hike up to Castle Hill for the view'
      ],
      bestCarAdvice: 'A stylish SUV like the Range Rover is perfect for navigating the city and nearby hills.',
      recommendedCarId: 'range-rover'
    },
    {
      id: 'monaco',
      name: 'Monaco',
      image: 'https://images.unsplash.com/photo-1559586652-a79a26939e65?auto=format&fit=crop&q=80&w=1000',
      description: 'The playground of the rich and famous, known for its grand casino and Formula 1 track.',
      recommendations: [
        'Visit the Casino de Monte-Carlo',
        'Watch the changing of the guard at the Prince\'s Palace',
        'Explore the Oceanographic Museum',
        'Drive the legendary F1 circuit'
      ],
      bestCarAdvice: 'Only a high-performance supercar like the Lamborghini Huracán fits the prestige of Monte Carlo.',
      recommendedCarId: 'lamborghini-huracan'
    },
    {
      id: 'st-tropez',
      name: 'Saint-Tropez',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000',
      description: 'A glamorous coastal town that remains a top destination for the global elite.',
      recommendations: [
        'Relax at Pampelonne Beach',
        'Visit the Citadel of Saint-Tropez',
        'Shop at the Place des Lices market',
        'Enjoy the nightlife at the Port'
      ],
      bestCarAdvice: 'The Mercedes G63 is the iconic choice for the rugged yet glamorous St-Tropez lifestyle.',
      recommendedCarId: 'mercedes-g63'
    }
  ],
  fr: [
    {
      id: 'cannes',
      name: 'Cannes',
      image: 'https://images.unsplash.com/photo-1506012733851-00f4e69850fa?auto=format&fit=crop&q=80&w=1000',
      description: 'La star de la Côte d\'Azur, célèbre pour son festival du film et son style de vie luxueux.',
      recommendations: [
        'Flâner sur le Boulevard de la Croisette',
        'Visiter le Palais des Festivals',
        'Prendre un bateau pour les Îles de Lérins',
        'Dîner dans un restaurant en bord de mer'
      ],
      bestCarAdvice: 'Pour l\'expérience ultime de la Croisette, un cabriolet est indispensable pour voir et être vu.',
      recommendedCarId: 'ferrari-488-spider'
    },
    {
      id: 'nice',
      name: 'Nice',
      image: 'https://images.unsplash.com/photo-1533619019048-990091bc7320?auto=format&fit=crop&q=80&w=1000',
      description: 'Une ville vibrante mêlant charme d\'antan et élégance moderne.',
      recommendations: [
        'Marcher sur la Promenade des Anglais',
        'Explorer la Vieille Ville (Vieux Nice)',
        'Visiter le marché du Cours Saleya',
        'Monter à la Colline du Château pour la vue'
      ],
      bestCarAdvice: 'Un SUV élégant comme le Range Rover est parfait pour naviguer en ville et dans les collines voisines.',
      recommendedCarId: 'range-rover'
    },
    {
      id: 'monaco',
      name: 'Monaco',
      image: 'https://images.unsplash.com/photo-1559586652-a79a26939e65?auto=format&fit=crop&q=80&w=1000',
      description: 'Le terrain de jeu des riches et célèbres, connu pour son grand casino et son circuit de Formule 1.',
      recommendations: [
        'Visiter le Casino de Monte-Carlo',
        'Regarder la relève de la garde au Palais Princier',
        'Explorer le Musée Océanographique',
        'Conduire sur le légendaire circuit de F1'
      ],
      bestCarAdvice: 'Seule une supercar haute performance comme la Lamborghini Huracán correspond au prestige de Monte-Carlo.',
      recommendedCarId: 'lamborghini-huracan'
    },
    {
      id: 'st-tropez',
      name: 'Saint-Tropez',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=1000',
      description: 'Une ville côtière glamour qui reste une destination phare pour l\'élite mondiale.',
      recommendations: [
        'Se détendre à la plage de Pampelonne',
        'Visiter la Citadelle de Saint-Tropez',
        'Faire du shopping au marché de la Place des Lices',
        'Profiter de la vie nocturne sur le Port'
      ],
      bestCarAdvice: 'Le Mercedes G63 est le choix iconique pour le style de vie à la fois robuste et glamour de St-Tropez.',
      recommendedCarId: 'mercedes-g63'
    }
  ]
};

export const REVIEWS = [
  {
    name: 'James Wilson',
    rating: 5,
    text: 'Exceptional service from start to finish. The Ferrari F8 was in pristine condition. Highly recommend for anyone visiting Cannes.',
    date: 'March 2026'
  },
  {
    name: 'Marie Lefebvre',
    rating: 5,
    text: 'Une expérience inoubliable. La livraison à l\'aéroport de Nice était parfaite. Équipe très professionnelle.',
    date: 'February 2026'
  },
  {
    name: 'Robert Chen',
    rating: 5,
    text: 'Best rental agency on the Riviera. The G63 was perfect for our trip to Monaco. Will definitely use again.',
    date: 'January 2026'
  }
];
