import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-mac-emerald py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
      
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mac-forest/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
        >
          Siap bikin rumah lebih fresh bareng MAC?
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://wa.me/+6285819410509"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-mac-orange text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-mac-orange/20"
          >
            <MessageCircle size={24} /> Hubungi WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
