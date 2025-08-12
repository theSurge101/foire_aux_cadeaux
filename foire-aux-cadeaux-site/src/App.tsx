import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Gift, Heart, ShoppingBag, Mic, Star, ChevronRight, Download, Phone, Mail, Instagram, Facebook, MessageCircle, Camera, Trophy, Zap, Shield } from 'lucide-react';

const FoireAuxCadeaux = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [newsletterForm, setNewsletterForm] = useState({
    email: '',
    whatsapp: false
  });

  const testimonials = [
    { 
      name: "Marie Kouassi", 
      role: "Exposante - Bijoux artisanaux", 
      content: "Une expérience incroyable ! J'ai vendu plus en 3 jours qu'en un mois normal.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9d80e9a?w=80&h=80&fit=crop&crop=face"
    },
    { 
      name: "Jean-Baptiste Agbo", 
      role: "Visiteur fidèle", 
      content: "Chaque année, je trouve des cadeaux uniques. C'est devenu notre sortie familiale préférée !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    { 
      name: "Fatima Al-Hassan", 
      role: "Directrice Marketing", 
      content: "Excellent retour sur investissement pour notre marque. Le public est très engagé.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_BUFFET_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AUTHENTIC_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_AFRICADOU_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_CROWD_PRESS_DANCE_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_CROWD_PRESS_KidsGames_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_BOOTHSPOT_PUBLIC_DJONOUVI_EPSIGATE_001.jpg?w=800&h=600&fit=crop",
    "https://marketing.anaisconcept.biz/hubfs/FAC/FAC2024_PORTRAIT_EXHIBITOR_EXHIBITOR_FRUTIFRESH_EPSIGATE_001.jpg?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterForm.email.trim()) {
      alert('Veuillez entrer votre adresse email.');
      return;
    }
    alert(`Inscription confirmée ! ${newsletterForm.whatsapp ? 'Vous recevrez aussi nos actus sur WhatsApp.' : ''}`);
    setNewsletterForm({ email: '', whatsapp: false });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/22890123148?text=Bonjour, j\'aimerais avoir plus d\'informations sur la Foire Aux Cadeaux', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              La Foire Aux Cadeaux
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">À propos</button>
              <button onClick={() => scrollToSection('exhibitor')} className="text-gray-700 hover:text-gray-900 transition-colors">Exposants</button>
              <button onClick={() => scrollToSection('info')} className="text-gray-700 hover:text-gray-900 transition-colors">Infos pratiques</button>
              <button onClick={() => scrollToSection('newsletter')} className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">S'inscrire</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">À propos</button>
                <button onClick={() => scrollToSection('exhibitor')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Exposants</button>
                <button onClick={() => scrollToSection('info')} className="text-left text-gray-700 hover:text-gray-900 transition-colors">Infos pratiques</button>
                <button onClick={() => scrollToSection('newsletter')} className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors w-fit">S'inscrire</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                La Foire Aux<br/>
                <span className="text-gray-600">Cadeaux</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Le rendez-vous incontournable du shopping et des découvertes à Lomé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Calendar size={18} />
                  <span className="font-medium">12-14 Décembre 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <MapPin size={18} />
                  <span className="font-medium">Hôtel Sarakawa, Lomé</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                  <Download size={20} />
                  Télécharger le programme
                </button>
                <button 
                  onClick={() => scrollToSection('exhibitor')}
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
                >
                  Devenir exposant
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={galleryImages[activeGalleryImage]} 
                  alt="La Foire Aux Cadeaux"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-gray-900">+3K</div>
                <div className="text-sm text-gray-600">Visiteurs attendus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is La Foire Aux Cadeaux */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Qu'est-ce que La Foire Aux Cadeaux ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Le plus grand rassemblement de créateurs, artisans et marques lifestyle au Togo. 
            Trois jours de découvertes, de shopping et de moments partagés en famille dans une 
            ambiance festive et conviviale.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <ShoppingBag className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Shopping</h3>
              <p className="text-gray-600 text-sm">Découvrez les dernières tendances</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Gift className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Découvertes</h3>
              <p className="text-gray-600 text-sm">Trouvez des créations uniques</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Heart className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Famille</h3>
              <p className="text-gray-600 text-sm">Une sortie pour tous les âges</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <Users className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Networking</h3>
              <p className="text-gray-600 text-sm">Rencontrez la communauté</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Pourquoi visiter la foire ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Marques locales</h3>
              <p className="text-gray-600">Découvrez le savoir-faire togolais et soutenez les créateurs locaux</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sortie familiale</h3>
              <p className="text-gray-600">Des activités pour petits et grands dans une ambiance festive</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cadeaux exclusifs</h3>
              <p className="text-gray-600">Trouvez des idées cadeaux originales qu'on ne trouve nulle part ailleurs</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expériences live</h3>
              <p className="text-gray-600">Assistez à des démonstrations, ateliers et spectacles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Become an Exhibitor */}
      <section id="exhibitor" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Devenez exposant
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Rejoignez plus de 150 exposants et bénéficiez d'une visibilité exceptionnelle 
            auprès de notre audience qualifiée.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">+3,000</div>
                <p className="text-gray-600">Visiteurs ciblés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3 jours</div>
                <p className="text-gray-600">De visibilité maximale</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-600">Stands</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href='https://marketing.anaisconcept.biz/hubfs/FAC/Guides_Brochures/Exposant_Visuel_Guide_V1.png'
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center">
                <Download size={18} />
                Guide exposant
              </a>
              <a
                href="https://marketing.anaisconcept.biz/participez-à-la-foire-aux-cadeaux-de-lomé-2025-anaïs-concept"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                Formulaire de participation
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Pass Teaser */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pass Premium
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Vivez une expérience VIP exclusive avec des privilèges uniques.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Fast Track</h3>
              <p className="text-gray-400 text-sm">Accès prioritaire sans file d'attente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Accès privé</h3>
              <p className="text-gray-400 text-sm">Zone VIP et avant-premières exclusives</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Conciergerie</h3>
              <p className="text-gray-400 text-sm">Service personnalisé et cadeaux VIP</p>
            </div>
          </div>

          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all">
            Découvrir le Pass Premium
          </button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              L'ambiance de nos précédentes éditions
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Foire aux cadeaux ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ils témoignent
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
{/*               <div className="flex items-center mb-6">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
              </div> */}
              <p className="text-lg text-gray-700 italic">"{testimonials[activeTestimonial].content}"</p>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section id="info" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Informations pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Lieu</h3>
              <p className="text-gray-600 text-sm">Hôtel Sarakawa de Lomé<br/>Boulevard du Mono<br/>Lomé, Togo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calendar className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Dates</h3>
              <p className="text-gray-600 text-sm">Vendredi 12 Décembre<br/>Samedi 13 Décembre<br/>Dimanche 14 Décembre 2025</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Horaires</h3>
              <p className="text-gray-600 text-sm">Ven-Sam: 09h-20h<br/>Dimanche: 09h-21h</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-gray-700" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Contact</h3>
              <p className="text-gray-600 text-sm">WhatsApp<br/>+228 90 12 31 48<br/>Questions rapides</p>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 rounded-2xl p-4">
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
               {/*  <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Carte interactive Google Maps</p>
                </div> */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.950894850715!2d1.2655943!3d6.1373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c43781dcfb%3A0x573d2529a58fa70c!2zSMO0dGVsIFNBUkFLQVdBIExvbcOp!5e0!3m2!1sfr!2stg!4v1754682566205!5m2!1sfr!2stg" 
                  width="100%" height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
{/*       <section id="newsletter" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restez informés !
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Recevez toutes les actualités de la foire et les dernières nouveautés de nos exposants.
          </p>

          <div className="bg-white/5 rounded-2xl p-8">
            <div className="mb-6">
              <input
                type="email"
                value={newsletterForm.email}
                onChange={(e) => setNewsletterForm({...newsletterForm, email: e.target.value})}
                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                placeholder="Votre adresse email"
              />
            </div>

            <div className="mb-8 flex items-center justify-center">
              <input
                type="checkbox"
                id="whatsapp-opt"
                checked={newsletterForm.whatsapp}
                onChange={(e) => setNewsletterForm({...newsletterForm, whatsapp: e.target.checked})}
                className="mr-3 w-4 h-4"
              />
              <label htmlFor="whatsapp-opt" className="text-gray-300 text-sm">
                Je souhaite recevoir les actus sur WhatsApp
              </label>
            </div>

            <button
              onClick={handleNewsletterSubmit}
              className="w-full bg-white text-gray-900 hover:bg-gray-100 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              S'inscrire à la newsletter
            </button>
          </div>
        </div>
      </section> */}
            <section id="newsletter" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restez informés !
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Recevez toutes les actualités de la foire et les dernières nouveautés de nos exposants.
          </p>

            <div className="bg-white/5 rounded-2xl p-8">
            <a
              href="https://whatsapp.com/channel/0029Vb6GoQ67T8bSvwi2zt3E"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-white text-gray-900 hover:bg-gray-100 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              La chaîne WhatsApp
            </a>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                La Foire Aux Cadeaux
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Le rendez-vous shopping incontournable de Lomé. Découvrez, partagez, célébrez !
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/foireauxcadeaux/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
                </a>
                <a href="https://www.facebook.com/LaFoireAuxCadeaux/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                  <Facebook className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
                </a>
                <a href="https://wa.me/22890123148?text=Bonjour, j\'aimerais avoir plus d\'informations sur la Foire Aux Cadeaux" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@anaisconcept.biz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+228 90 12 31 48</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>WhatsApp Business</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Liens</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-gray-900 transition-colors">Mentions légales</a>
                <a href="#" className="block hover:text-gray-900 transition-colors">Conditions générales</a>
                <a href="#" className="block hover:text-gray-900 transition-colors">Politique de confidentialité</a>
                <a href="#" className="block hover:text-gray-900 transition-colors">Espace presse</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 La Foire Aux Cadeaux. Tous droits réservés. • Organisé par ANAÏS Concept</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoireAuxCadeaux;