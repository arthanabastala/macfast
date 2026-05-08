import { motion } from 'motion/react';
import { Droplet, Wind, Wallet, Users } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: 'Fresh Formula',
    description: 'Diformulasikan khusus untuk angkat kotoran membandel dengan cepat.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Wind,
    title: 'Wangi Tahan Lama',
    description: 'Aroma premium yang dirancang agar awet sepanjang hari.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Wallet,
    title: 'Harga Terjangkau',
    description: 'Kualitas premium tanpa harus menguras isi dompetmu.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Community Product',
    description: 'Asli karya anak muda dari komunitas dengan passion tinggi.',
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-8 bg-mac-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mac-forest mb-4">Kenapa Beralih ke MAC?</h2>
          <p className="text-mac-forest/70 max-w-2xl mx-auto text-lg">
            Kami nggak cuma ngejual barang, tapi ngasi alasan kuat kenapa kamu bakal suka bersih-bersih pakai MAC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-card border border-mac-emerald/10 flex flex-col items-start transition-all hover:-translate-y-1"
            >
              <div className={`p-4 rounded-2xl mb-6 ${feature.color}`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-mac-forest mb-3">{feature.title}</h3>
              <p className="text-mac-forest/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
