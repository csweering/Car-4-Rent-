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
    aboutText: 'Based in the heart of Cannes, Car4Rent is not your normal car rental company. Under the vision of Pascal Hals, we provide tailor-made solutions to your specific needs. Whether it is delivery to a remote villa or a custom pick-up at any location, we provide a premier experience designed around you.',
    reviewsTitle: 'What Our Clients Say',
    locationsTitle: 'Operating Across the Riviera',
    locationsText: 'We deliver to Cannes, Nice Airport, Monaco, Saint-Tropez, and all major destinations across the South of France.',
    viewFleet: 'View Fleet',
    perDay: '/ day',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What documents are required for rental?',
        answer: 'You will need a valid passport, a driver\'s license held for at least 3 years, and a credit card for the security deposit.'
      },
      {
        question: 'Is insurance included in the price?',
        answer: 'Yes, basic comprehensive insurance is included. We also offer additional CDW (Collision Damage Waiver) options for extra peace of mind.'
      },
      {
        question: 'Where can you deliver the car?',
        answer: 'We deliver to all major locations on the French Riviera, including Nice Airport (NCE), Cannes, Monaco, and Saint-Tropez. Delivery to your hotel or villa is also available.'
      },
      {
        question: 'What is the minimum age for renting a luxury car?',
        answer: 'The minimum age is 25 years for most models, and 30 years for high-performance supercars.'
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
    galleryTitle: 'Our Luxury Gallery'
  },
  fr: {
    heroTitle: 'Vivez le luxe sur la Côte d\'Azur',
    heroSubtitle: 'Plus qu\'une simple location, une solution sur mesure pour votre expérience de prestige. Livraison de votre voiture où et comme vous le souhaitez, avec Pascal Hals.',
    fleetTitle: 'Notre Flotte Exclusive',
    fleetSubtitle: 'Choisissez parmi les marques automobiles les plus prestigieuses au monde.',
    bookNow: 'Réserver',
    contactUs: 'Contactez-nous',
    aboutTitle: 'Car4Rent Cannes',
    aboutText: 'Basé au cœur de Cannes, Car4Rent n\'est pas une agence de location classique. Sous la direction de Pascal Hals, nous proposons des solutions sur mesure adaptées à vos besoins. Qu\'il s\'agisse d\'une livraison à votre villa ou d\'une prise en charge personnalisée, nous offrons une expérience de premier ordre conçue pour vous.',
    reviewsTitle: 'Ce que disent nos clients',
    locationsTitle: 'Présent sur toute la Riviera',
    locationsText: 'Nous livrons à Cannes, à l\'aéroport de Nice, à Monaco, à Saint-Tropez et dans toutes les destinations majeures du sud de la France.',
    viewFleet: 'Voir la Flotte',
    perDay: '/ jour',
    faqTitle: 'Questions Fréquentes',
    faqs: [
      {
        question: 'Quels documents sont requis pour la location ?',
        answer: 'Vous aurez besoin d\'un passeport valide, d\'un permis de conduire détenu depuis au moins 3 ans et d\'une carte de crédit pour le dépôt de garantie.'
      },
      {
        question: 'L\'assurance est-elle incluse dans le prix ?',
        answer: 'Oui, l\'assurance tous risques de base est incluse. Nous proposons également des options CDW (rachat de franchise) supplémentaires pour plus de sérénité.'
      },
      {
        question: 'Où pouvez-vous livrer la voiture ?',
        answer: 'Nous livrons dans tous les lieux majeurs de la Côte d\'Azur, y compris l\'aéroport de Nice (NCE), Cannes, Monaco et Saint-Tropez. La livraison à votre hôtel ou villa est également possible.'
      },
      {
        question: 'Quel est l\'âge minimum pour louer une voiture de luxe ?',
        answer: 'L\'âge minimum est de 25 ans pour la plupart des modèles, et de 30 ans pour les supercars de haute performance.'
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
    galleryTitle: 'Notre Galerie de Luxe'
  }
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
