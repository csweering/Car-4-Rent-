import { Car, Translation } from './types';

export const CARS: Car[] = [
  {
    id: 'mercedes-s-class-rental',
    name: 'Mercedes S Class',
    category: 'Sedan',
    pricePerDay: 680,
    image: 'https://car4rent.fr/wp-content/uploads/Mercedes_S450_Side_Profile_Car4Rent-removebg-e1729810571359.png',
    specs: { power: '710 hp', acceleration: '2.9s', topSpeed: '340 km/h' },
    pricing: { days1to3: 680, days4to6: 600, days7plus: 520 },
    description: "Experience the ultimate in luxury and sophistication by renting a Mercedes S Class while exploring the stunning French Riviera. This iconic destination, known for its sun-drenched coastlines, glamorous resorts, and charming towns, deserves to be discovered in style."
  },
  {
    id: 'ferrari-f8-rental',
    name: 'Ferrari F8 Spider',
    category: 'Convertible',
    pricePerDay: 2380,
    image: 'https://car4rent.fr/wp-content/uploads/IMG_8947-removebg-e1695152503352.png',
    specs: { power: '710 hp', acceleration: '2.9s', topSpeed: '340 km/h' },
    pricing: { days1to3: 2380, days4to6: 2080, days7plus: 1880 },
    description: "Looking for a Ferrari F8 rental in Monaco or Cannes? This model carries the legacy of the renowned Ferrari 488 and stands as a notable improvement over its predecessor, pushing the boundaries of what a sports car can achieve, a car designed to turn heads!"
  },
  {
    id: 'rent-an-audi-a5-convertible',
    name: 'Audi A5 Convertible',
    category: 'Convertible',
    pricePerDay: 450,
    image: 'https://car4rent.fr/wp-content/uploads/Audi-A5-Convertible-e1682875146413.jpg',
    specs: { power: '261 hp', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 450, days4to6: 380, days7plus: 320 },
    description: "Rent an Audi A5 Convertible on the French Riviera at an affordable price and discover the fantastic seaside on the route of Provence. Hire an Audi A5 Convertible, and regardless of where you go, the performance and beauty of this vehicle will always shine."
  },
  {
    id: 'rent-a-bmw-x6',
    name: 'BMW X6',
    category: 'SUV',
    pricePerDay: 680,
    image: 'https://car4rent.fr/wp-content/uploads/IMG_6976-removebg-e1692113425199.png',
    specs: { power: '375 hp', acceleration: '5.2s', topSpeed: '209 km/h' },
    pricing: { days1to3: 680, days4to6: 600, days7plus: 520 },
    description: "Renting a BMW X6 in the South of France couldn't be any easier. Car4rent offers a wide range of luxury cars for rent. Our BMW X6 X-Drive M40 Diesel is one of the most dynamic and versatile cars available for hire."
  },
  {
    id: 'rent-bentley-bentayga',
    name: 'Bentley Bentayga',
    category: 'SUV',
    pricePerDay: 1900,
    image: 'https://car4rent.fr/wp-content/uploads/rent-bentley-bentaga-1-e1682875975925.jpg',
    specs: { power: '542 hp', acceleration: '4.4s', topSpeed: '290 km/h' },
    pricing: { days1to3: 1900, days4to6: 1700, days7plus: 1500 },
    description: "Rent Bentley Bentayga and enjoy luxury, speed, and style. The French Riviera provides a luxurious and high-performance driving experience. Behind the wheel of the Bentley Bentayga, discover the attractions, beautiful beaches, and vibrant nightlife."
  },
  {
    id: 'rent-a-mercedes-g500-squared',
    name: 'Mercedes G500 Squared',
    category: 'SUV',
    pricePerDay: 1500,
    image: 'https://car4rent.fr/wp-content/uploads/Rent-Mercedes-G500-squared-1-scaled.jpg',
    specs: { power: '416 hp', acceleration: '6.0s', topSpeed: '160 km/h' },
    pricing: { days1to3: 1500, days4to6: 1300, days7plus: 1100 },
    description: "Rent a Mercedes G500 Squared 4x4 for unparalleled off-road performance and exclusivity. There are only a few G500 Squared rentals on the road, making you the centre of attention with intrigued looks and compliments."
  },
  {
    id: 'audi-q8-rental',
    name: 'Audi Q8',
    category: 'SUV',
    pricePerDay: 580,
    image: 'https://car4rent.fr/wp-content/uploads/Audi-Q8-Competition--e1719323386964.jpg',
    specs: { power: '335 hp', acceleration: '5.9s', topSpeed: 'Not specified' },
    pricing: { days1to3: 580, days4to6: 490, days7plus: 420 },
    description: "Rent an Audi Q8 on the French Riviera at an affordable price and enjoy the Riviera roads. We offer the latest Audi Q8 S Line Competition 60 TFSI e Hybrid for your pleasure."
  },
  {
    id: 'hire-a-mercedes-v-class',
    name: 'Mercedes V Class',
    category: 'Minivan',
    pricePerDay: 360,
    image: 'https://car4rent.fr/wp-content/uploads/Mercedes-v-scaled-e1682882690824.jpg',
    specs: { power: '237 hp', acceleration: '9.1s', topSpeed: 'Not specified' },
    pricing: { days1to3: 360, days4to6: 330, days7plus: 300 },
    description: "Hire a Mercedes V Class to travel with your family in a luxurious minivan. For your next journey in the South of France, the V Class rental is for you! It represents the best in its category and can be considered the reference for passenger transport."
  },
  {
    id: 'rent-a-porsche-992-targa',
    name: 'Porsche 911 Targa',
    category: 'Convertible',
    pricePerDay: 900,
    image: 'https://car4rent.fr/wp-content/uploads/Porsche-992-Targa-4.jpg',
    specs: { power: '379 hp', acceleration: '4.2s', topSpeed: '289 km/h' },
    pricing: { days1to3: 900, days4to6: 810, days7plus: 730 },
    description: "Treat yourself to a Porsche 992 Targa rental in French Riviera. The Porsche 911 (992) Targa is a halfway house between Coupé and convertible models. An elaborate process involves the giant rear screen lifting completely off the car."
  },
  {
    id: 'rent-rolls-royce-cullinan',
    name: 'Rolls-Royce Cullinan',
    category: 'SUV',
    pricePerDay: 4000,
    image: 'https://car4rent.fr/wp-content/uploads/Rolls-royce-Cullinan-scaled-e1682882008387.jpg',
    specs: { power: '563 hp', acceleration: '5.2s', topSpeed: '250 km/h' },
    pricing: { days1to3: 4000, days4to6: 3600, days7plus: 3200 },
    description: "Rent Rolls-Royce Cullinan in French Riviera with Car4rent Luxury Car Rental. Treat yourself to an unforgettable experience in the South of France. The Rolls-Royce Cullinan is the first SUV in the Rolls-Royce range."
  },
  {
    id: 'rent-ferrari-portofino',
    name: 'Ferrari Portofino',
    category: 'Convertible',
    pricePerDay: 1900,
    image: 'https://car4rent.fr/wp-content/uploads/portofino-avtg-1-scaled-e1682880713647.jpg',
    specs: { power: '591 hp', acceleration: '3.5s', topSpeed: '320 km/h' },
    pricing: { days1to3: 1900, days4to6: 1700, days7plus: 1500 },
    description: "Rent Ferrari Portofino in French Riviera, the perfect car for a scenic drive along the coast from Monaco to Saint-Tropez. An experience to remember for a lifetime: the Ferrari Portofino Rental."
  },
  {
    id: 'rent-a-mercedes-g63',
    name: 'Mercedes-AMG G63',
    category: 'SUV',
    pricePerDay: 1080,
    image: 'https://car4rent.fr/wp-content/uploads/mercedes-g63-e1682882197175.jpg',
    specs: { power: '577 hp', acceleration: '4.5s', topSpeed: '240 km/h' },
    pricing: { days1to3: 1080, days4to6: 880, days7plus: 680 },
    description: "Rent a Mercedes G63 on the French Riviera, observe the beautiful landscapes, and enjoy the world-class location. Everything from the Mercedes G63 rental's eye-catching and intimidating exterior to its luxurious leather interior adds to the design, style, and class."
  },
  {
    id: 'hire-a-lamborghini-urus',
    name: 'Lamborghini Urus',
    category: 'SUV',
    pricePerDay: 2100,
    image: 'https://car4rent.fr/wp-content/uploads/Lamborghini-Urus-scaled-e1682875627422.jpg',
    specs: { power: '641 hp', acceleration: '3.6s', topSpeed: '305 km/h' },
    pricing: { days1to3: 2100, days4to6: 1900, days7plus: 1700 },
    description: "Hire a Lamborghini Urus in French Riviera and enjoy an absolute stunner that perfectly balances the functionality of an SUV with an exotic rental car. It is the first 4-door Lamborghini rental ever to be produced."
  },
  {
    id: 'rent-a-mercedes-sl',
    name: 'Mercedes-AMG SL 63',
    category: 'Convertible',
    pricePerDay: 900,
    image: 'https://car4rent.fr/wp-content/uploads/Louer-une-Mercedes-SL.png',
    specs: { power: '362 hp', acceleration: '4.9s', topSpeed: '250 km/h' },
    pricing: { days1to3: 900, days4to6: 810, days7plus: 730 },
    description: "Rent a Mercedes SL AMG in the French Riviera: Experience the Magic Sounds. If you're looking for a way to add a touch of luxury to your next business or vacation trip in France, we have the perfect luxury ride for you."
  },
  {
    id: 'rent-a-bentley-convertible',
    name: 'Bentley Continental GTC',
    category: 'Convertible',
    pricePerDay: 2100,
    image: 'https://car4rent.fr/wp-content/uploads/Rent-Bentley-convertible-4-e1682882537313.jpg',
    specs: { power: '626 hp', acceleration: '3.8s', topSpeed: '333 km/h' },
    pricing: { days1to3: 2100, days4to6: 1900, days7plus: 1700 },
    description: "Rent a Bentley Convertible on French Riviera will be an experience you will never forget. Visualize yourself driving along the great coastal road between Nice and Monaco. At the wheel of your luxurious Bentley Convertible rental car, you will be attracted to its quilted leather seats."
  },
  {
    id: 'rolls-royce-dawn-rental',
    name: 'Rolls-Royce Dawn',
    category: 'Convertible',
    pricePerDay: 3200,
    image: 'https://car4rent.fr/wp-content/uploads/rolls-royce-dawn-scaled-e1682875714193.jpg',
    specs: { power: '563 hp', acceleration: '4.9s', topSpeed: '250 km/h' },
    pricing: { days1to3: 3200, days4to6: 3000, days7plus: 2800 },
    description: "Experience unrivaled opulence in the heart of Monaco when you rent a Rolls-Royce Dawn. Feel the wind through your hair, the sun on your back, and take in your exotic surroundings all at once."
  },
  {
    id: 'rent-a-ferrari-488-spider',
    name: 'Ferrari 488 Spider',
    category: 'Convertible',
    pricePerDay: 1900,
    image: 'https://car4rent.fr/wp-content/uploads/Ferrari-488-spider-scaled-e1682875876515.jpg',
    specs: { power: '661 hp', acceleration: '3.0s', topSpeed: '325 km/h' },
    pricing: { days1to3: 1900, days4to6: 1700, days7plus: 1500 },
    description: "Rent a Ferrari 488 Spider and arrive at your special event in a powerful roadster. Explore the roads of the French Riviera with our Ferrari 488 Spider rental: a car designed to turn heads!"
  },
  {
    id: 'rent-lamborghini-huracan-spyder',
    name: 'Lamborghini Huracán Spyder',
    category: 'Convertible',
    pricePerDay: 1900,
    image: 'https://car4rent.fr/wp-content/uploads/car4rent-lamborghini-huracan-roadside-Edited-Edited.png',
    specs: { power: '631 hp', acceleration: '3.1s', topSpeed: '325 km/h' },
    pricing: { days1to3: 1900, days4to6: 1700, days7plus: 1500 },
    description: "Rent a Lamborghini Huracán Spyder from Car4rent and make your next road trip unforgettable. As one of the fastest cars in the world, a Lamborghini Huracán Spyder rental is guaranteed to turn heads as you cruise along the French Riviera."
  },
  {
    id: 'rent-a-mercedes-convertible',
    name: 'Mercedes E-Class Convertible',
    category: 'Convertible',
    pricePerDay: 450,
    image: 'https://car4rent.fr/wp-content/uploads/Mercedes-E-Class-220d-Convertible-e1682882426922.jpg',
    specs: { power: '362 hp', acceleration: '4.9s', topSpeed: '250 km/h' },
    pricing: { days1to3: 450, days4to6: 380, days7plus: 320 },
    description: "Rent a Mercedes Convertible in France has never been easier with Car4Rent! Find your perfect ride from a wide range of vehicles to suit your needs and budget."
  },
  {
    id: 'rent-a-porsche-992',
    name: 'Porsche 911 Carrera S',
    category: 'Convertible',
    pricePerDay: 900,
    image: 'https://car4rent.fr/wp-content/uploads/porsche-992-cabriolet-e1682843670522.jpg',
    specs: { power: '379 hp', acceleration: '4.2s', topSpeed: '289 km/h' },
    pricing: { days1to3: 900, days4to6: 810, days7plus: 730 },
    description: "At Car4rent, you can rent a Porsche 992 at an affordable price, whether for a day or a long-term rental. No matter the occasion, treat yourself to this iconic model and enjoy the thrill of discovering the coastal roads of the French Riviera."
  },
  {
    id: 'rent-a-chevrolet-corvette',
    name: 'Chevrolet Corvette C8',
    category: 'Sport',
    pricePerDay: 900,
    image: 'https://car4rent.fr/wp-content/uploads/IMG_6130-removebg-e1692273288435.png',
    specs: { power: '495 hp', acceleration: '2.9s', topSpeed: '312 km/h' },
    pricing: { days1to3: 900, days4to6: 810, days7plus: 730 },
    description: "Rent a Chevrolet Corvette Convertible, the return of a legend! Renting a Chevrolet Corvette has been a dream since childhood. After a six-year absence in France, the eighth generation has been profoundly rethought."
  },
  {
    id: 'land-rover-rental',
    name: 'Range Rover Autobiography',
    category: 'SUV',
    pricePerDay: 840,
    image: 'https://car4rent.fr/wp-content/uploads/Land-Rover-Rental-3-e1682882347590.jpg',
    specs: { power: 'Not specified', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 840, days4to6: 680, days7plus: 540 },
    description: "Rent a Range Rover in French Riviera from Car4rent. We offer the 2023 model Range Rover for hire. The revamped SUV attracts global elites with its elegant styling and opulent cabin."
  },
  {
    id: 'rent-a-porsche-911-cabriolet',
    name: 'Porsche 911 Cabriolet',
    category: 'Convertible',
    pricePerDay: 900,
    image: 'https://car4rent.fr/wp-content/uploads/porsche-992-cabriolet-e1682843670522.jpg',
    specs: { power: 'Not specified', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 900, days4to6: 810, days7plus: 730 },
    description: "Rent a Porsche 911 Cabriolet with Car4Rent, the first luxury car rental on the French Riviera. You can experience the thrill of driving a Porsche by renting from Car4rent."
  },
  {
    id: 'rent-a-volkswagen-golf-gte',
    name: 'Volkswagen Golf GTE',
    category: 'Sedan',
    pricePerDay: 260,
    image: 'https://car4rent.fr/wp-content/uploads/VW-e1719323808514.png',
    specs: { power: '245 hp', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 260, days4to6: 235, days7plus: 210 },
    description: "Rent a Volkswagen Golf GTE and imagine yourself crisscrossing the roads of the French Riviera behind the wheel of this hybrid Golf 8 rental car."
  },
  {
    id: 'rent-a-mini-convertible',
    name: 'Mini Cooper Convertible',
    category: 'Convertible',
    pricePerDay: 260,
    image: 'https://car4rent.fr/wp-content/uploads/car4rent-mini-cooper-cabriolet-side-Edited-Edited.png',
    specs: { power: 'Not specified', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 260, days4to6: 235, days7plus: 210 },
    description: "At Car4rent in Cannes, you can rent a MINI Convertible and experience the ultimate driving fun on the French Riviera. This stylish and compact convertible is perfect for cruising along scenic coastal roads."
  },
  {
    id: 'rent-a-range-rover-sport',
    name: 'Range Rover Sport',
    category: 'SUV',
    pricePerDay: 750,
    image: 'https://car4rent.fr/wp-content/uploads/range-sport-svr-avtg.png',
    specs: { power: 'Not specified', acceleration: 'Not specified', topSpeed: 'Not specified' },
    pricing: { days1to3: 750, days4to6: 680, days7plus: 610 },
    description: "Rent a Range Rover Sport P460e Hybrid at an affordable price from Car4rent. The Range Rover Sport offers luxury, on-road performance, and off-road capability."
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
      recommendedCarId: 'rent-a-ferrari-488-spider'
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
      recommendedCarId: 'land-rover-rental'
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
      recommendedCarId: 'rent-lamborghini-huracan-spyder'
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
      recommendedCarId: 'rent-a-mercedes-g63'
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
      recommendedCarId: 'rent-a-ferrari-488-spider'
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
      recommendedCarId: 'land-rover-rental'
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
      recommendedCarId: 'rent-lamborghini-huracan-spyder'
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
      recommendedCarId: 'rent-a-mercedes-g63'
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
