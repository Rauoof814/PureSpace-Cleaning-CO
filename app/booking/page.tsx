


// 'use client';

// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { bookingSchema, type BookingInput } from '@/lib/validators';
// import { useState } from 'react';
// import { Calendar, Clock, User, Phone, Mail, MapPin, Building } from 'lucide-react';

// export default function Booking() {
//     const [done, setDone] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<BookingInput>({
//         resolver: zodResolver(bookingSchema)
//     });

//     const onSubmit = async (data: BookingInput) => {
//         setIsSubmitting(true);
//         try {
//             // First, save to your database
//             const res = await fetch('/api/booking', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data)
//             });

//             const result = await res.json();

//             if (result.ok) {
//                 // Then create calendar event using Setmore or other service
//                 const calendarRes = await fetch('/api/calendar', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         ...data,
//                         bookingId: result.bookingId
//                     })
//                 });

//                 setDone(true);
//             }
//         } catch (error) {
//             console.error('Submission error:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (done) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-luxury-dark to-luxury-darker flex items-center justify-center p-4 preserve-3d">
//                 <div className="card max-w-lg mx-auto text-center translate-z-20">
//                     <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-emerald to-luxury-accent flex items-center justify-center shimmer-3d">
//                         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                     </div>
//                     <h1 className="luxury-heading text-3xl mb-4">Booking Request Submitted</h1>
//                     <p className="text-luxury-silver/80 mb-6">
//                         We've placed a temporary hold on your requested time. You'll receive a custom quote and calendar invitation via email/text within 24 hours.
//                     </p>
//                     <div className="glass-dark p-4 rounded-2xl mb-6">
//                         <p className="text-sm text-luxury-accent">A calendar invitation will be sent to your email</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-luxury-dark to-luxury-darker py-20 preserve-3d">
//             <div className="container mx-auto px-4">
//                 <div className="max-w-4xl mx-auto">
//                     {/* Header */}
//                     <div className="text-center mb-12 translate-z-10">
//                         <h1 className="luxury-heading text-4xl md:text-5xl mb-4">
//                             Schedule Your Premium Service
//                         </h1>
//                         <p className="text-luxury-silver/70 text-lg">
//                             Book a consultation and receive a custom quote
//                         </p>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
//                         {/* Service Selection */}
//                         <div className="card group hover:translate-z-25">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="p-3 rounded-xl bg-gradient-to-br from-luxury-gold/20 to-luxury-emerald/20">
//                                     <Building className="w-6 h-6 text-luxury-accent" />
//                                 </div>
//                                 <h2 className="text-xl font-semibold gradient-text">Service Details</h2>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-6">
//                                 {/* Service Type */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Service Type *
//                                     </label>
//                                     <select
//                                         className="input-3d w-full"
//                                         {...register('service', { required: true })}
//                                     >
//                                         <option value="">Select a service...</option>
//                                         <option value="commercial-janitorial">Commercial Janitorial</option>
//                                         <option value="construction-cleanup">Construction Cleanup</option>
//                                         <option value="floor-stripping-waxing">Floor Stripping & Waxing</option>
//                                         <option value="carpet-upholstery">Carpet & Upholstery</option>
//                                         <option value="window-cleaning">Window Cleaning</option>
//                                         <option value="pressure-washing">Pressure Washing</option>
//                                         <option value="medical-facility">Medical Facility Cleaning</option>
//                                         <option value="junk-removal">Junk Removal</option>
//                                         <option value="green-cleaning">Green Cleaning</option>
//                                     </select>
//                                     {errors.service && (
//                                         <p className="mt-2 text-sm text-red-400">{errors.service.message}</p>
//                                     )}
//                                 </div>

//                                 {/* Property Type */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Property Type
//                                     </label>
//                                     <select
//                                         className="input-3d w-full"
//                                         {...register('propertyType')}
//                                     >
//                                         <option value="">Select property type...</option>
//                                         <option value="office">Office</option>
//                                         <option value="retail">Retail</option>
//                                         <option value="medical">Medical</option>
//                                         <option value="dental">Dental</option>
//                                         <option value="education">Education</option>
//                                         <option value="industrial">Industrial</option>
//                                         <option value="residential">Residential</option>
//                                         <option value="str">STR / Airbnb</option>
//                                         <option value="construction">Construction</option>
//                                         <option value="event">Event</option>
//                                     </select>
//                                 </div>

//                                 {/* Square Feet (Optional) */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Approximate Square Feet (Optional)
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type="number"
//                                             className="input-3d w-full pr-12"
//                                             placeholder="e.g., 5000"
//                                             {...register('sqft', { valueAsNumber: true })}
//                                         />
//                                         <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-luxury-silver/50">
//                                             ft²
//                                         </span>
//                                     </div>
//                                 </div>

//                                 {/* Additional Notes */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Additional Details
//                                     </label>
//                                     <textarea
//                                         className="input-3d w-full min-h-[120px]"
//                                         placeholder="Tell us about your specific needs, special requirements, or any other details..."
//                                         {...register('notes')}
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Date & Time */}
//                         <div className="card group hover:translate-z-25">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="p-3 rounded-xl bg-gradient-to-br from-luxury-emerald/20 to-luxury-accent/20">
//                                     <Calendar className="w-6 h-6 text-luxury-emerald" />
//                                 </div>
//                                 <h2 className="text-xl font-semibold gradient-text">Date & Time *</h2>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Preferred Date
//                                     </label>
//                                     <input
//                                         type="date"
//                                         className="input-3d w-full"
//                                         {...register('date', { required: true })}
//                                     />
//                                     {errors.date && (
//                                         <p className="mt-2 text-sm text-red-400">{errors.date.message}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Preferred Time
//                                     </label>
//                                     <input
//                                         type="time"
//                                         className="input-3d w-full"
//                                         {...register('time', { required: true })}
//                                     />
//                                     {errors.time && (
//                                         <p className="mt-2 text-sm text-red-400">{errors.time.message}</p>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Contact Information */}
//                         <div className="card group hover:translate-z-25">
//                             <div className="flex items-center gap-3 mb-6">
//                                 <div className="p-3 rounded-xl bg-gradient-to-br from-luxury-accent/20 to-luxury-gold/20">
//                                     <User className="w-6 h-6 text-luxury-gold" />
//                                 </div>
//                                 <h2 className="text-xl font-semibold gradient-text">Contact Information *</h2>
//                             </div>

//                             <div className="space-y-6">
//                                 {/* Name */}
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                             First Name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="input-3d w-full"
//                                             placeholder="John"
//                                             {...register('firstName', { required: true })}
//                                         />
//                                         {errors.firstName && (
//                                             <p className="mt-2 text-sm text-red-400">{errors.firstName.message}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                             Last Name *
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="input-3d w-full"
//                                             placeholder="Doe"
//                                             {...register('lastName', { required: true })}
//                                         />
//                                         {errors.lastName && (
//                                             <p className="mt-2 text-sm text-red-400">{errors.lastName.message}</p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Contact Details */}
//                                 <div className="grid md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                             Email Address *
//                                         </label>
//                                         <div className="relative">
//                                             <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-silver/50" />
//                                             <input
//                                                 type="email"
//                                                 className="input-3d w-full pl-12"
//                                                 placeholder="john@example.com"
//                                                 {...register('email', { required: true })}
//                                             />
//                                         </div>
//                                         {errors.email && (
//                                             <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                             Phone Number *
//                                         </label>
//                                         <div className="relative">
//                                             <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-silver/50" />
//                                             <input
//                                                 type="tel"
//                                                 className="input-3d w-full pl-12"
//                                                 placeholder="(555) 123-4567"
//                                                 {...register('phone', { required: true })}
//                                             />
//                                         </div>
//                                         {errors.phone && (
//                                             <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
//                                         )}
//                                     </div>
//                                 </div>

//                                 {/* Address */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-luxury-silver/90 mb-2">
//                                         Service Address
//                                     </label>
//                                     <div className="relative">
//                                         <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-silver/50" />
//                                         <input
//                                             type="text"
//                                             className="input-3d w-full pl-12"
//                                             placeholder="123 Main St, City, State ZIP"
//                                             {...register('address')}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Communication Preferences */}
//                                 <div className="glass-dark p-4 rounded-2xl">
//                                     <label className="flex items-center gap-3 cursor-pointer">
//                                         <div className="relative">
//                                             <input
//                                                 type="checkbox"
//                                                 className="sr-only peer"
//                                                 {...register('smsOptIn')}
//                                             />
//                                             <div className="w-6 h-6 rounded-lg bg-luxury-card border border-luxury-accent/30 peer-checked:bg-gradient-to-br peer-checked:from-luxury-emerald peer-checked:to-luxury-accent transition-all duration-300 flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <span className="text-luxury-silver">
//                                             I'd like to receive SMS updates about my booking status
//                                         </span>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="text-center translate-z-20">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="btn btn-primary px-12 py-4 text-lg relative overflow-hidden group"
//                             >
//                                 <span className="relative z-10 flex items-center gap-3">
//                                     {isSubmitting ? (
//                                         <>
//                                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                             Processing...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Calendar className="w-5 h-5" />
//                                             Schedule Consultation & Get Quote
//                                         </>
//                                     )}
//                                 </span>
//                                 <div className="absolute inset-0 bg-gradient-to-r from-luxury-emerald via-luxury-accent to-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                             </button>

//                             <p className="text-sm text-luxury-silver/60 mt-4">
//                                 By submitting, you agree to receive a custom quote and calendar invitation
//                             </p>

//                             {/* Error Summary */}
//                             {Object.keys(errors).length > 0 && (
//                                 <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
//                                     <p className="text-red-400 flex items-center gap-2">
//                                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                         </svg>
//                                         Please fill in all required fields (*) to continue
//                                     </p>
//                                 </div>
//                             )}
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




// app/booking/page.tsx

export const metadata = {
    title: "Book a Consultation | PureSpace Cleaning",
    description: "Schedule a consultation and get a custom quote.",
};

export default function BookingPage() {
    // CHANGE THIS to your real Cal.com event link:
    // From your screenshot, your event is: /purespace/30min
    const calLink = "https://cal.com/purespcae/purespace-cleaning-co";

    return (
        <div className="min-h-screen bg-gradient-to-br from-luxury-dark to-luxury-darker py-20 preserve-3d">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 translate-z-10">
                        <h1 className="luxury-heading text-4xl md:text-5xl mb-4">
                            Schedule Your Premium Service
                        </h1>
                        <p className="text-luxury-silver/70 text-lg">
                            Pick a time that works for you. We’ll confirm details and send your quote.
                        </p>
                    </div>

                    {/* Embed */}
                    <div className="card p-0 overflow-hidden">
                        <div className="w-full">
                            <iframe
                                src={calLink}
                                title="PureSpace Booking"
                                className="w-full"
                                style={{
                                    height: "900px",
                                    border: "0",
                                }}
                                allow="camera; microphone; fullscreen; payment"
                            />
                        </div>
                    </div>

                    {/* Small note */}
                    <p className="text-center text-sm text-luxury-silver/60 mt-6">
                        After booking, you’ll receive a confirmation email. If you don’t see it, check spam/junk.
                    </p>
                </div>
            </div>
        </div>
    );
}
