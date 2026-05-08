import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden px-4 md:px-8">
      {/* Premium Background Depth & Glow */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-mac-emerald/15 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-mac-orange/10 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-white/40 rounded-full blur-[120px] -z-10" />
      
      {/* Soft Blurred Floating Orbs */}
      <motion.div 
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] w-32 h-32 bg-mac-emerald/20 rounded-full blur-[30px] -z-10"
      />
      <motion.div 
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }} 
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-mac-orange/15 rounded-full blur-[40px] -z-10"
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left z-20 flex flex-col justify-center space-y-6 w-full lg:max-w-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center self-center md:self-start bg-white border border-mac-emerald/20 text-mac-forest shadow-sm px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-mac-emerald mr-2 animate-pulse" />
            Produk Komunitas
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-mac-forest leading-[1.05]"
          >
            Bersih <br className="hidden md:block" />
            Bukan Sekadar <span className="text-mac-emerald relative inline-block">
              Wangi.
              <svg className="absolute -bottom-2 left-0 w-full text-mac-orange opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none" style={{ height: '12px' }}>
                <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-mac-forest/70 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium"
          >
            Home Care Modern dari Komunitas Anak Muda. Kualitas premium untuk setiap sudut rumah Anda.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center md:justify-start"
          >
            <a 
              href="#products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-mac-forest text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-mac-forest/20 hover:shadow-mac-forest/40 hover:-translate-y-1 hover:bg-mac-emerald"
            >
              Lihat Produk <ArrowRight size={20} />
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-mac-forest border border-mac-emerald/20 shadow-sm px-8 py-4 rounded-2xl font-bold transition-all hover:border-mac-emerald hover:text-mac-emerald hover:-translate-y-1"
            >
              <MessageCircle size={20} className="text-mac-emerald" /> WhatsApp Kami
            </a>
          </motion.div>
        </div>

        {/* Right Side: Central Product Imagery */}
        <div className="flex-1 w-full relative z-10 flex items-center justify-center mt-4 md:mt-0 lg:ml-8 h-[400px] sm:h-[450px] md:h-[550px]">
          
          {/* Layered Glassmorphism Cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[75%] max-w-[320px] h-[75%] md:h-[80%] bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-mac-emerald/10 rotate-6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[75%] max-w-[320px] h-[75%] md:h-[80%] bg-white/90 backdrop-blur-3xl border border-white/80 rounded-[2.5rem] md:rounded-[3rem] shadow-xl -rotate-2" />

          {/* Main Floating Product Image */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-20 w-[65%] sm:w-[55%] max-w-[260px] h-[105%] sm:h-[115%] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(20,83,45,0.4)] border-[6px] border-white/60 bg-mac-cream"
          >
            <img 
              src="/cupirkecil.png" 
              alt="MAC Sabun Cuci Piring Cair" 
              className="w-full h-full object-cover scale-105"
            />
            {/* Glossy Overlay Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/40 mix-blend-overlay" />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
          
          {/* Decorative Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-2 lg:bottom-10 left-[-5%] sm:left-4 z-30 bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl shadow-xl shadow-mac-forest/10 border border-white flex items-center gap-3 w-max"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-mac-emerald/10 flex items-center justify-center text-lg sm:text-xl">🍋</div>
            <div>
              <p className="text-[10px] sm:text-xs text-mac-forest/50 font-bold uppercase tracking-widest">Ekstrak Asli</p>
              <p className="text-sm sm:text-base font-black text-mac-forest mt-0.5">Jeruk Nipis</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-8 lg:top-16 right-[-5%] sm:right-0 z-30 bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl shadow-mac-orange/10 border border-white flex flex-col items-center justify-center"
          >
            <span className="text-mac-orange font-black text-xl sm:text-2xl leading-none">Lemak</span>
            <span className="text-[8px] sm:text-[10px] text-mac-forest/60 font-bold uppercase mt-1 tracking-wider">Cepat Hilang</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
