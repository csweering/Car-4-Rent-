export interface Car {
  id: string;
  name: string;
  category: 'Sport' | 'SUV' | 'Luxury' | 'Convertible' | 'Sedan' | 'Minivan';
  pricePerDay: number;
  image: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  pricing?: {
    days1to3: number;
    days4to6: number;
    days7plus: number;
  };
  description?: string;
}

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  fleetTitle: string;
  fleetSubtitle: string;
  bookNow: string;
  contactUs: string;
  aboutTitle: string;
  aboutText: string;
  reviewsTitle: string;
  locationsTitle: string;
  locationsText: string;
  viewFleet: string;
  perDay: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  bookingTitle: string;
  selectCar: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpLocation: string;
  dropOffLocation: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  confirmBooking: string;
  bookingSuccess: string;
  bookingSuccessText: string;
  close: string;
  galleryTitle: string;
  pricingTitle: string;
  destinationsTitle: string;
  recommendations: string;
  bestCarForTrip: string;
}

export interface City {
  id: string;
  name: string;
  image: string;
  description: string;
  recommendations: string[];
  bestCarAdvice: string;
  recommendedCarId: string;
}

export type Language = 'en' | 'fr';
