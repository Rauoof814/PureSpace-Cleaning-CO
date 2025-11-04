// // import data from '@/content/services.json'; import Link from 'next/link'; export async function generateStaticParams(){ return Object.values(data as any).map((s:any)=>({slug:s.slug})); } export default function Service({params}:{params:{slug:string}}){ const svc:any=(Object.values(data as any)).find((s:any)=>s.slug===params.slug); if(!svc) return <div className='container py-10'>Not found</div>; return (<div className='container py-10'><h1 className='text-3xl font-semibold'>{svc.title}</h1><p className='opacity-80 mt-2'>{svc.intro}</p><div className='grid gap-4 md:grid-cols-3 mt-6'><div className='card md:col-span-2'><h2 className='text-xl font-semibold mb-2'>Inclusions</h2><ul className='list-disc ml-6 space-y-1'>{svc.inclusions.map((x:string,i:number)=><li key={i}>{x}</li>)}</ul>{svc.addons?.length>0 && (<><h2 className='text-xl font-semibold mt-6 mb-2'>Add-ons</h2><ul className='list-disc ml-6 space-y-1'>{svc.addons.map((x:string,i:number)=><li key={i}>{x}</li>)}</ul></>)}</div><aside className='card'><h3 className='text-lg font-semibold'>Start here</h3><p className='opacity-80 mt-2'>Submit details for a custom quote. No public pricing.</p><div className='mt-4 flex gap-2'><Link href='/booking' className='btn btn-primary'>Request Time</Link><Link className='btn btn-outline' href='/contact'>Get Quote</Link></div></aside></div></div> ); }


// 'use client';
// import { ServiceGrid } from '@/components/ServiceGrid';
// import { motion } from 'framer-motion';

// export default function ServicesPage() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//             {/* Hero Section */}
//             <section className="relative py-32 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
//                 <motion.div
//                     className="absolute inset-0 opacity-10"
//                     style={{
//                         backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//                     }}
//                     animate={{
//                         x: [0, 100, 0],
//                         y: [0, -50, 0],
//                     }}
//                     transition={{ duration: 20, repeat: Infinity }}
//                 />

//                 <div className="container relative z-10 text-center">
//                     <motion.h1
//                         className="text-6xl md:text-8xl font-bold luxury-heading text-white mb-6"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         Our <span className="gradient-text">Services</span>
//                     </motion.h1>
//                     <motion.p
//                         className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                     >
//                         Comprehensive commercial cleaning solutions tailored for enterprise clients,
//                         healthcare facilities, and premium commercial spaces across Washington State.
//                     </motion.p>
//                 </div>
//             </section>

//             {/* Services Grid */}
//             <section className="py-20">
//                 <div className="container">
//                     <ServiceGrid />
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-20 bg-gradient-to-r from-accent-gold to-accent-teal">
//                 <div className="container text-center">
//                     <motion.h2
//                         className="text-4xl md:text-5xl font-bold text-white mb-6"
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         Ready to Transform Your Space?
//                     </motion.h2>
//                     <motion.p
//                         className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                     >
//                         Get a custom quote tailored to your specific commercial cleaning needs.
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <motion.a
//                             href="/booking"
//                             className="btn bg-white text-slate-900 hover:bg-slate-100 px-12 py-4 text-lg font-semibold"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Get Custom Quote
//                         </motion.a>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// }