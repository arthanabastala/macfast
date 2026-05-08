import { MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-mac-cream text-mac-forest pt-16 pb-8 px-4 md:px-8 border-t border-mac-forest/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-3 mb-6 block w-fit">
            <div>
              <a href="#home" className="flex items-center gap-2">
              <img src="/logomac.png" alt="MAC Logo" className="h-10 w-auto object-contain" />
              </a>
              <span className="text-sm text-mac-forest/70 font-semibold uppercase tracking-wider">PT.MAC GLOBAL NUSANTARA</span>
            </div>
          </a>
          <p className="text-mac-forest/60 max-w-sm mb-6 leading-relaxed">
            Produk home care berkualitas untuk kebutuhan sehari-hari yang dikembangkan oleh komunitas anak serumpun.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-mac-emerald/10 flex items-center justify-center text-mac-emerald hover:bg-mac-emerald hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-mac-emerald/10 flex items-center justify-center text-mac-emerald hover:bg-mac-emerald hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-mac-emerald/10 flex items-center justify-center text-mac-emerald hover:bg-mac-emerald hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Jelajahi</h4>
          <ul className="space-y-4">
            <li><a href="#home" className="text-mac-forest/60 hover:text-mac-emerald font-medium transition-colors">Beranda</a></li>
            <li><a href="#products" className="text-mac-forest/60 hover:text-mac-emerald font-medium transition-colors">Produk Kami</a></li>
            <li><a href="#about" className="text-mac-forest/60 hover:text-mac-emerald font-medium transition-colors">Tentang Komunitas</a></li>
            <li><a href="#contact" className="text-mac-forest/60 hover:text-mac-emerald font-medium transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Contact/Location */}
        <div>
          <h4 className="font-bold text-lg mb-6">Temukan Kami</h4>
          <div className="flex gap-3 text-mac-forest/60 mb-4">
            <MapPin size={20} className="shrink-0 text-mac-emerald" />
            <p className="text-sm leading-relaxed font-medium">
              Kp.Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830
            </p>
          </div>
          <div className="flex gap-3 text-mac-forest/60">
            <MessageCircle size={20} className="shrink-0 text-mac-emerald" />
            <p className="text-sm leading-relaxed font-medium"
            href="https://wa.me/+6285819410509">
              085819410509<br/>
              (WA only)
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-mac-forest/10 text-center md:flex md:justify-between md:text-left text-sm text-mac-forest/50 font-bold">
        <p>&copy; {new Date().getFullYear()} PT.MAC GLOBAL NUSANTARA. All rights reserved.</p>
      </div>
    </footer>
  );
}
