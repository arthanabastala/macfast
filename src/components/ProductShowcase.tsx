import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'MAC Dish Soap',
    description: 'Sabun cuci piring wangi jeruk nipis segar, lembut di tangan.',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1585833758252-ebabeeb0e28f?fm=jpg&q=80&w=400&h=400&fit=crop',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'MAC Ironing Spray',
    description: 'Pelican pakaian dengan aroma floral premium tahan lama.',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1610557434522-861c8a142bee?fm=jpg&q=80&w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'MAC Floor Cleaner',
    description: 'Pembersih lantai antibakteri aroma pinus menenangkan.',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe6c1c9af5?fm=jpg&q=80&w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'MAC Premium Detergent',
    description: 'Deterjen cair ampuh angkat noda dan merawat serat kain.',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?fm=jpg&q=80&w=400&h=400&fit=crop',
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mac-forest mb-4">Pilihan Produk MAC</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hadir dengan formula fresh dan wangi tahan lama untuk bantu selesaikan pekerjaan rumahmu dengan lebih menyenangkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-5 rounded-3xl shadow-card border border-mac-emerald/10 group transition-all hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-mac-cream flex items-center justify-center">
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-mac-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                    {product.tag}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply"
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-mac-forest mb-1">{product.name}</h3>
                <p className="text-xs text-mac-forest/60 mb-4 italic min-h-[32px]">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-mac-emerald text-lg">{product.price}</span>
                  <a 
                    href="https://wa.me/something"
                    className="p-2 rounded-lg bg-mac-emerald/10 text-mac-emerald hover:bg-mac-emerald hover:text-white transition-colors"
                  >
                    <ShoppingBag size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
