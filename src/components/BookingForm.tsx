import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Translation, Car } from '../types';
import { CARS } from '../constants';
import { X, Calendar, MapPin, User, Mail, Phone, CheckCircle } from 'lucide-react';

interface BookingFormProps {
  t: Translation;
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ t, isOpen, onClose, selectedCarId }) => {
  const [step, setStep] = React.useState<'form' | 'success'>('form');
  const [formData, setFormData] = React.useState({
    carId: selectedCarId || CARS[0].id,
    pickUpDate: '',
    dropOffDate: '',
    pickUpLocation: 'Cannes',
    dropOffLocation: 'Cannes',
    fullName: '',
    email: '',
    phone: ''
  });

  React.useEffect(() => {
    if (selectedCarId) {
      setFormData(prev => ({ ...prev, carId: selectedCarId }));
    }
  }, [selectedCarId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep('form'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 hover:bg-brand-ink/5 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {step === 'form' ? (
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-serif mb-8">{t.bookingTitle}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Car Selection */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.selectCar}
                      </label>
                      <select 
                        value={formData.carId}
                        onChange={(e) => setFormData({ ...formData, carId: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                      >
                        {CARS.map(car => (
                          <option key={car.id} value={car.id}>{car.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Dates */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.pickUpDate}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <input 
                          type="date" 
                          required
                          value={formData.pickUpDate}
                          onChange={(e) => setFormData({ ...formData, pickUpDate: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.dropOffDate}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <input 
                          type="date" 
                          required
                          value={formData.dropOffDate}
                          onChange={(e) => setFormData({ ...formData, dropOffDate: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                        />
                      </div>
                    </div>

                    {/* Locations */}
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.pickUpLocation}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <select 
                          value={formData.pickUpLocation}
                          onChange={(e) => setFormData({ ...formData, pickUpLocation: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                        >
                          <option value="Cannes">Cannes</option>
                          <option value="Nice Airport">Nice Airport (NCE)</option>
                          <option value="Monaco">Monaco</option>
                          <option value="St. Tropez">St. Tropez</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.dropOffLocation}
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <select 
                          value={formData.dropOffLocation}
                          onChange={(e) => setFormData({ ...formData, dropOffLocation: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                        >
                          <option value="Cannes">Cannes</option>
                          <option value="Nice Airport">Nice Airport (NCE)</option>
                          <option value="Monaco">Monaco</option>
                          <option value="St. Tropez">St. Tropez</option>
                        </select>
                      </div>
                    </div>

                    {/* Personal Details */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.fullName}
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <input 
                          type="text" 
                          required
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.emailAddress}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <input 
                          type="email" 
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-brand-ink/40 mb-2 font-bold">
                        {t.phoneNumber}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-purple" />
                        <input 
                          type="tel" 
                          required
                          placeholder="+33 6 00 00 00 00"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-brand-paper border border-brand-ink/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-brand-purple text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-brand-purple/20"
                  >
                    {t.confirmBooking}
                  </motion.button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="w-10 h-10 text-brand-purple" />
                </motion.div>
                <h2 className="text-3xl font-serif mb-4">{t.bookingSuccess}</h2>
                <p className="text-brand-ink/60 mb-10 leading-relaxed">
                  {t.bookingSuccessText}
                </p>
                <button 
                  onClick={handleClose}
                  className="bg-brand-ink text-white px-12 py-4 rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  {t.close}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
