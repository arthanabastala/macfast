import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?fm=jpg&q=80&w=600&h=400&fit=crop',
    alt: 'Customer shopping',
    className: 'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto'
  },
  {
    src: 'https://images.unsplash.com/photo-1512418490979-9ce792d5e1f9?fm=jpg&q=80&w=400&h=400&fit=crop',
    alt: 'Product detail',
    className: 'col-span-1 row-span-1 aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?fm=jpg&q=80&w=400&h=400&fit=crop',
    alt: 'Event booth vibe',
    className: 'col-span-1 row-span-1 aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?fm=jpg&q=80&w=800&h=400&fit=crop',
    alt: 'Community team',
    className: 'col-span-2 row-span-1 aspect-[2/1]'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 md:px-8 bg-mac-cream/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-mac-forest mb-3">Momen Kami</h2>
            <p className="text-mac-forest/70 max-w-lg">
              Keseruan di booth MAC dan antusiasme pengguna saat mencoba produk kami secara langsung.
            </p>
          </div>
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-mac-forest font-semibold hover:text-mac-emerald transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm"
          >
            <Instagram size={20} /> @mac.homecare
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full text-mac-forest translate-y-4 group-hover:translate-y-0 transform">
                  <Instagram size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <a 
            href="#" 
            className="flex items-center gap-2 text-mac-forest font-semibold hover:text-mac-emerald transition-colors bg-white px-6 py-3 rounded-full shadow-sm"
          >
            <Instagram size={20} /> Follow Instagram Kami
          </a>
        </div>
      </div>
    </section>
  );
}
