import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import InternationalCovers from './components/InternationalCovers';
import Memberships from './components/Memberships';
import FAQ from './components/FAQ';
import Application from './components/Application';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaReembolso from './pages/PoliticaReembolso';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <main>
                <Hero />
                <Authority />
                <Method />
                <InternationalCovers />
                <Memberships />
                <FAQ />
                <Application />
              </main>
              <Footer />
              <CookieConsent />
              <Chatbot />
            </div>
          } />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-reembolso" element={<PoliticaReembolso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;