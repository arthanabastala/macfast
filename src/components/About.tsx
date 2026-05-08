import { motion } from 'motion/react';
import { Sparkles, MapPin, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Images */}
          <div className="flex-1 relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-mac-emerald/10 rounded-[3rem] transform -rotate-3 scale-105 z-0" />
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fm=jpg&q=80&w=500&h=600&fit=crop" 
                alt="Community work" 
                className="w-full h-64 object-cover rounded-3xl mt-8 shadow-md"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?fm=jpg&q=80&w=500&h=600&fit=crop" 
                alt="Community event" 
                className="w-full h-64 object-cover rounded-3xl -mt-4 shadow-lg"
              />
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 whitespace-nowrap"
              >
                <div className="bg-mac-orange/20 p-2 rounded-full text-mac-orange">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-mac-forest">Lokal & Bangga</p>
                  <p className="text-xs text-mac-forest/60">100% Buatan Komunitas</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-mac-emerald font-bold tracking-wider uppercase text-sm mb-4 block flex items-center justify-center lg:justify-start gap-2">
              <Sparkles size={16} /> Tentang MAC
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-mac-forest mb-6 leading-tight">
              Lebih Dari Sekadar <span className="text-mac-emerald">Solusi Bersih-Bersih.</span>
            </h2>
            <p className="text-lg text-mac-forest/70 mb-8 leading-relaxed">
              MAC adalah komunitas kreatif yang menghadirkan produk home care modern, terjangkau, dan berkualitas. Berawal dari semangat anak muda, kami percaya bahwa setiap rumah berhak merasakan kesegaran premium setiap hari.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <h4 className="text-3xl font-extrabold text-mac-forest mb-1">5+</h4>
                <p className="text-sm font-medium text-mac-forest/70">Produk Pilihan</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-mac-forest mb-1">100+</h4>
                <p className="text-sm font-medium text-mac-forest/70">Pengguna Aktif</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-3xl font-extrabold text-mac-forest mb-1">Event</h4>
                <p className="text-sm font-medium text-mac-forest/70">Collaboration</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
