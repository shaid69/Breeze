import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle2, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { ReservationDetails } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  initialOpen?: boolean;
}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('7:30 PM');
  const [guestsCount, setGuestsCount] = useState(2);
  const [seatingArea, setSeatingArea] = useState<ReservationDetails['seatingArea']>('private_booth');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationDetails | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Casual Dining',
    'Anniversary',
    'Birthday Celebration',
    'Romantic Date Night',
    'Family Gathering',
    'Business Lunch/Dinner'
  ];

  const seatingOptions = [
    { id: 'private_booth', label: 'Private Booth', desc: 'Velvet booth with soft acoustic seclusion' },
    { id: 'window', label: 'Window View', desc: 'Naturally lit road-facing table' },
    { id: 'main_hall', label: 'Central Dining', desc: 'Vibrant dining floor with ambient lighting' },
    { id: 'celebration', label: 'Celebration Long Table', desc: 'Best for 6+ guests and special occasions' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your contact phone number (+880...)');
      return;
    }

    setErrorMsg('');
    const newReservation: ReservationDetails = {
      reservationId: `BRZ-RES-${Math.floor(1000 + Math.random() * 9000)}`,
      guestName,
      phone,
      email: email || undefined,
      date,
      time,
      guestsCount,
      seatingArea,
      occasion,
      specialRequests: specialRequests || undefined,
      status: 'confirmed',
    };

    setConfirmedReservation(newReservation);
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setGuestName('');
    setPhone('');
    setSpecialRequests('');
  };

  return (
    <section id="reservations" className="py-24 bg-[#0d1214] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#d4b358] font-semibold mb-2">
            Table Reservations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fbf8ee] tracking-tight mb-4 [text-wrap:balance]">
            Reserve Your Experience
          </h2>
          <p className="text-sm sm:text-base text-[#a8a49c] font-light leading-relaxed">
            Guarantee your preferred seating and private booths in advance. Instant confirmation with zero reservation fees.
          </p>
        </div>

        {confirmedReservation ? (
          /* Confirmation Pass Card */
          <div className="bg-[#141b1e] border border-[#d4b358]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4b358]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 text-[#d4b358] mb-4">
              <CheckCircle2 className="w-7 h-7" />
              <span className="font-serif text-2xl font-bold text-[#fbf8ee]">
                Reservation Confirmed!
              </span>
            </div>

            <p className="text-sm text-[#c4c1b9] mb-8">
              We look forward to welcoming you, <strong className="text-white">{confirmedReservation.guestName}</strong>. A table is being reserved for your party at Breeze Restaurant.
            </p>

            {/* Ticket Info Card */}
            <div className="bg-[#0d1214] border border-white/10 rounded-xl p-5 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#9c988f]">Booking ID</div>
                <div className="font-mono text-base font-bold text-[#d4b358] mt-0.5">
                  {confirmedReservation.reservationId}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#9c988f]">Date & Time</div>
                <div className="text-sm font-semibold text-[#fbf8ee] mt-0.5">
                  {confirmedReservation.date} · {confirmedReservation.time}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#9c988f]">Party Size</div>
                <div className="text-sm font-semibold text-[#fbf8ee] mt-0.5">
                  {confirmedReservation.guestsCount} {confirmedReservation.guestsCount === 1 ? 'Guest' : 'Guests'}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#9c988f]">Seating Area</div>
                <div className="text-sm font-semibold text-[#fbf8ee] mt-0.5 capitalize">
                  {confirmedReservation.seatingArea.replace('_', ' ')}
                </div>
              </div>
            </div>

            {/* Location & Contact Notice */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-white/5 border border-white/5 text-xs text-[#a8a49c] mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4b358] shrink-0" />
                <span>House# 1/C, Road# 16, Nikunja-2, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4b358] shrink-0" />
                <span>Need to modify? Call {RESTAURANT_INFO.phoneDisplay}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-2.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-[#eae7e1] transition-colors cursor-pointer"
              >
                Book Another Table
              </button>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-6 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#d4b358] hover:bg-[#e2cb8b] text-[#0d1214] transition-colors text-center cursor-pointer"
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <form 
            onSubmit={handleSubmit}
            className="bg-[#141b1e] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-8"
          >
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Row 1: Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#d4b358]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-sm text-[#eae7e1] focus:outline-none focus:border-[#d4b358] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4b358]" />
                  <span>Time Slot</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full py-2.5 px-3 bg-[#182024] border border-white/10 rounded-lg text-sm text-[#eae7e1] focus:outline-none focus:border-[#d4b358] transition-colors cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#d4b358]" />
                  <span>Guests</span>
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-[#182024] border border-white/10 rounded-lg text-sm text-[#eae7e1] focus:outline-none focus:border-[#d4b358] transition-colors cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 2: Seating Area Selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-3">
                Seating Atmosphere Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seatingOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSeatingArea(opt.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      seatingArea === opt.id
                        ? 'bg-white/10 border-[#d4b358] text-[#fbf8ee]'
                        : 'bg-white/5 border-white/10 text-[#a8a49c] hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#fbf8ee]">{opt.label}</div>
                    <div className="text-[11px] text-[#9c988f] mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Occasion */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
                Occasion (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`py-1.5 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                      occasion === occ
                        ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                        : 'bg-white/5 text-[#c4c1b9] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 4: Guest Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tanvir Ahmed"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-sm text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
                  Phone Number (Bangladesh) *
                </label>
                <input
                  type="tel"
                  placeholder="+880 17XX-XXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-sm text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                  required
                />
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
                Special Requests or Dietary Inquiries
              </label>
              <textarea
                rows={2}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="e.g. Birthday candle arrangement, quiet booth away from door, high chair needed..."
                className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm Table Reservation</span>
            </button>

            <div className="text-center text-xs text-[#9c988f]">
              No deposit required. Reservations are held for 15 minutes past scheduled time.
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
