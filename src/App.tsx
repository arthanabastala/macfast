/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import About from './components/About';
import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-mac-cream font-sans selection:bg-mac-emerald selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <About />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
