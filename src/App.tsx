import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Method from './components/Method';
import Memberships from './components/Memberships';
import FAQ from './components/FAQ';
import Application from './components/Application';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Method />
        <Memberships />
        <FAQ />
        <Application />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;