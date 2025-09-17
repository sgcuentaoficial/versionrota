import { useState, useEffect } from 'react';

interface LocationData {
  country: string;
  countryCode: string;
  language: string;
  detected: boolean;
}

interface TranslationData {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: TranslationData = {
  es: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Coaching personalizado de élite con',
    'hero.subtitle.actor': 'IFBB Pro & Zeus en Justice League',
    'hero.cta.primary': 'Solicitar Consulta VIP',
    'hero.cta.secondary': 'Ver Método',
    'hero.trust.years': '15+ años IFBB Pro',
    'hero.trust.actor': 'Actor de Hollywood',
    'hero.trust.guarantee': 'Garantía 30 días',
    
    // Stats
    'stats.transformations': 'Transformaciones',
    'stats.years': 'Años Pro',
    'stats.success': 'Tasa Éxito',
    'stats.vip': 'Plazas VIP',
    'stats.clients': 'clientes',
    
    // Authority
    'authority.badge': 'AUTORIDAD MUNDIAL',
    'authority.title.why': '¿Por qué',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'No soy solo otro coach. Soy un profesional con credenciales reales, resultados comprobados y la experiencia de haber transformado más de 500 vidas.',
    
    // Method
    'method.badge': 'MÉTODO EXCLUSIVO',
    'method.title.method': 'El Método',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'Un sistema científico de 4 pilares que ha transformado más de 500 vidas. No es solo entrenamiento, es una transformación completa.',
    
    // Memberships
    'memberships.badge': 'PLANES DE MEMBRESÍA',
    'memberships.title.choose': 'Elige tu',
    'memberships.title.transformation': 'Transformación',
    'memberships.subtitle': 'Planes diseñados para diferentes objetivos y presupuestos. Todos incluyen mi método probado y garantía de resultados.',
    'memberships.plan.basic': 'Básica',
    'memberships.plan.quarterly': 'Trimestral',
    'memberships.plan.biannual': 'Semestral',
    'memberships.plan.annual': 'Premium Anual',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'MÁS POPULAR',
    'memberships.exclusive': 'EXCLUSIVO',
    'memberships.select': 'Seleccionar Plan',
    'memberships.schedule': 'Agendar Llamada',
    'memberships.guarantee.title': 'Garantía de Satisfacción',
    'memberships.guarantee.text': 'Si no estás completamente satisfecho con tu progreso en los primeros 30 días, te devolvemos el',
    'memberships.guarantee.money': '100% de tu dinero',
    'memberships.guarantee.no': '. Sin preguntas.',
    'memberships.guarantee.days': '30 días de garantía total',
    
    // FAQ
    'faq.badge': 'PREGUNTAS FRECUENTES',
    'faq.title.resolve': 'Resuelve tus',
    'faq.title.doubts': 'Dudas',
    'faq.subtitle': 'Las respuestas a las preguntas más comunes sobre mi método de coaching y cómo puede transformar tu vida.',
    
    // Application
    'application.badge': 'SOLICITUD VIP',
    'application.title.request': 'Solicita tu',
    'application.title.vip': 'Plaza VIP',
    'application.subtitle': 'Solo acepto 12 clientes VIP por trimestre para garantizar resultados excepcionales. Completa esta solicitud para ser considerado.',
    'application.form.title': 'Formulario de Solicitud',
    'application.form.name': 'Nombre Completo',
    'application.form.email': 'Email',
    'application.form.phone': 'Teléfono',
    'application.form.age': 'Edad',
    'application.form.submit': 'ENVIAR SOLICITUD VIP',
    
    // Footer
    'footer.coaching': 'VIP COACHING',
    'footer.description': 'Coaching VIP exclusivo para transformaciones reales. IFBB Pro, Actor de Hollywood, y mentor de más de 500 transformaciones exitosas.',
    'footer.links': 'ENLACES',
    'footer.legal': 'LEGAL',
    'footer.home': 'Inicio',
    'footer.about': 'Sobre Sergi',
    'footer.method': 'Método',
    'footer.testimonials': 'Testimonios',
    'footer.join': 'Únete',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookies': 'Política de Cookies',
    'footer.terms': 'Términos y Condiciones',
    'footer.refund': 'Política de Reembolso',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.credentials': 'IFBB PRO • ZEUS • VIP COACH'
  },
  en: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Elite personalized coaching with',
    'hero.subtitle.actor': 'IFBB Pro & Zeus in Justice League',
    'hero.cta.primary': 'Request VIP Consultation',
    'hero.cta.secondary': 'View Method',
    'hero.trust.years': '15+ years IFBB Pro',
    'hero.trust.actor': 'Hollywood Actor',
    'hero.trust.guarantee': '30-day guarantee',
    
    // Stats
    'stats.transformations': 'Transformations',
    'stats.years': 'Pro Years',
    'stats.success': 'Success Rate',
    'stats.vip': 'VIP Spots',
    'stats.clients': 'clients',
    
    // Authority
    'authority.badge': 'WORLD AUTHORITY',
    'authority.title.why': 'Why',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'I\'m not just another coach. I\'m a professional with real credentials, proven results and the experience of having transformed over 500 lives.',
    
    // Method
    'method.badge': 'EXCLUSIVE METHOD',
    'method.title.method': 'The Method',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'A scientific 4-pillar system that has transformed over 500 lives. It\'s not just training, it\'s a complete transformation.',
    
    // Memberships
    'memberships.badge': 'MEMBERSHIP PLANS',
    'memberships.title.choose': 'Choose your',
    'memberships.title.transformation': 'Transformation',
    'memberships.subtitle': 'Plans designed for different goals and budgets. All include my proven method and results guarantee.',
    'memberships.plan.basic': 'Basic',
    'memberships.plan.quarterly': 'Quarterly',
    'memberships.plan.biannual': 'Biannual',
    'memberships.plan.annual': 'Premium Annual',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'MOST POPULAR',
    'memberships.exclusive': 'EXCLUSIVE',
    'memberships.select': 'Select Plan',
    'memberships.schedule': 'Schedule Call',
    'memberships.guarantee.title': 'Satisfaction Guarantee',
    'memberships.guarantee.text': 'If you\'re not completely satisfied with your progress in the first 30 days, we\'ll refund',
    'memberships.guarantee.money': '100% of your money',
    'memberships.guarantee.no': '. No questions asked.',
    'memberships.guarantee.days': '30-day total guarantee',
    
    // FAQ
    'faq.badge': 'FREQUENTLY ASKED QUESTIONS',
    'faq.title.resolve': 'Resolve your',
    'faq.title.doubts': 'Doubts',
    'faq.subtitle': 'Answers to the most common questions about my coaching method and how it can transform your life.',
    
    // Application
    'application.badge': 'VIP APPLICATION',
    'application.title.request': 'Request your',
    'application.title.vip': 'VIP Spot',
    'application.subtitle': 'I only accept 12 VIP clients per quarter to guarantee exceptional results. Complete this application to be considered.',
    'application.form.title': 'Application Form',
    'application.form.name': 'Full Name',
    'application.form.email': 'Email',
    'application.form.phone': 'Phone',
    'application.form.age': 'Age',
    'application.form.submit': 'SUBMIT VIP APPLICATION',
    
    // Footer
    'footer.coaching': 'VIP COACHING',
    'footer.description': 'Exclusive VIP coaching for real transformations. IFBB Pro, Hollywood Actor, and mentor of 500+ successful transformations.',
    'footer.links': 'LINKS',
    'footer.legal': 'LEGAL',
    'footer.home': 'Home',
    'footer.about': 'About Sergi',
    'footer.method': 'Method',
    'footer.testimonials': 'Testimonials',
    'footer.join': 'Join',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.terms': 'Terms and Conditions',
    'footer.refund': 'Refund Policy',
    'footer.rights': 'All rights reserved.',
    'footer.credentials': 'IFBB PRO • ZEUS • VIP COACH'
  },
  fr: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Coaching personnalisé d\'élite avec',
    'hero.subtitle.actor': 'IFBB Pro & Zeus dans Justice League',
    'hero.cta.primary': 'Demander Consultation VIP',
    'hero.cta.secondary': 'Voir Méthode',
    'hero.trust.years': '15+ années IFBB Pro',
    'hero.trust.actor': 'Acteur d\'Hollywood',
    'hero.trust.guarantee': 'Garantie 30 jours',
    
    // Stats
    'stats.transformations': 'Transformations',
    'stats.years': 'Années Pro',
    'stats.success': 'Taux de Succès',
    'stats.vip': 'Places VIP',
    'stats.clients': 'clients',
    
    // Authority
    'authority.badge': 'AUTORITÉ MONDIALE',
    'authority.title.why': 'Pourquoi',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'Je ne suis pas juste un autre coach. Je suis un professionnel avec de vraies références, des résultats prouvés et l\'expérience d\'avoir transformé plus de 500 vies.',
    
    // Method
    'method.badge': 'MÉTHODE EXCLUSIVE',
    'method.title.method': 'La Méthode',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'Un système scientifique à 4 piliers qui a transformé plus de 500 vies. Ce n\'est pas seulement de l\'entraînement, c\'est une transformation complète.',
    
    // Memberships
    'memberships.badge': 'PLANS D\'ADHÉSION',
    'memberships.title.choose': 'Choisissez votre',
    'memberships.title.transformation': 'Transformation',
    'memberships.subtitle': 'Plans conçus pour différents objectifs et budgets. Tous incluent ma méthode éprouvée et une garantie de résultats.',
    'memberships.plan.basic': 'Basique',
    'memberships.plan.quarterly': 'Trimestriel',
    'memberships.plan.biannual': 'Semestriel',
    'memberships.plan.annual': 'Premium Annuel',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'PLUS POPULAIRE',
    'memberships.exclusive': 'EXCLUSIF',
    'memberships.select': 'Sélectionner Plan',
    'memberships.schedule': 'Programmer Appel',
    'memberships.guarantee.title': 'Garantie de Satisfaction',
    'memberships.guarantee.text': 'Si vous n\'êtes pas complètement satisfait de vos progrès dans les 30 premiers jours, nous remboursons',
    'memberships.guarantee.money': '100% de votre argent',
    'memberships.guarantee.no': '. Sans questions.',
    'memberships.guarantee.days': '30 jours de garantie totale',
    
    // FAQ
    'faq.badge': 'QUESTIONS FRÉQUENTES',
    'faq.title.resolve': 'Résolvez vos',
    'faq.title.doubts': 'Doutes',
    'faq.subtitle': 'Réponses aux questions les plus courantes sur ma méthode de coaching et comment elle peut transformer votre vie.',
    
    // Application
    'application.badge': 'CANDIDATURE VIP',
    'application.title.request': 'Demandez votre',
    'application.title.vip': 'Place VIP',
    'application.subtitle': 'Je n\'accepte que 12 clients VIP par trimestre pour garantir des résultats exceptionnels. Complétez cette candidature pour être considéré.',
    'application.form.title': 'Formulaire de Candidature',
    'application.form.name': 'Nom Complet',
    'application.form.email': 'Email',
    'application.form.phone': 'Téléphone',
    'application.form.age': 'Âge',
    'application.form.submit': 'SOUMETTRE CANDIDATURE VIP',
    
    // Footer
    'footer.coaching': 'COACHING VIP',
    'footer.description': 'Coaching VIP exclusif pour des transformations réelles. IFBB Pro, Acteur d\'Hollywood, et mentor de 500+ transformations réussies.',
    'footer.links': 'LIENS',
    'footer.legal': 'LÉGAL',
    'footer.home': 'Accueil',
    'footer.about': 'À propos de Sergi',
    'footer.method': 'Méthode',
    'footer.testimonials': 'Témoignages',
    'footer.join': 'Rejoindre',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.cookies': 'Politique des Cookies',
    'footer.terms': 'Termes et Conditions',
    'footer.refund': 'Politique de Remboursement',
    'footer.rights': 'Tous droits réservés.',
    'footer.credentials': 'IFBB PRO • ZEUS • COACH VIP'
  },
  it: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Coaching personalizzato d\'élite con',
    'hero.subtitle.actor': 'IFBB Pro & Zeus in Justice League',
    'hero.cta.primary': 'Richiedi Consulenza VIP',
    'hero.cta.secondary': 'Vedi Metodo',
    'hero.trust.years': '15+ anni IFBB Pro',
    'hero.trust.actor': 'Attore di Hollywood',
    'hero.trust.guarantee': 'Garanzia 30 giorni',
    
    // Stats
    'stats.transformations': 'Trasformazioni',
    'stats.years': 'Anni Pro',
    'stats.success': 'Tasso di Successo',
    'stats.vip': 'Posti VIP',
    'stats.clients': 'clienti',
    
    // Authority
    'authority.badge': 'AUTORITÀ MONDIALE',
    'authority.title.why': 'Perché',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'Non sono solo un altro coach. Sono un professionista con credenziali reali, risultati comprovati e l\'esperienza di aver trasformato oltre 500 vite.',
    
    // Method
    'method.badge': 'METODO ESCLUSIVO',
    'method.title.method': 'Il Metodo',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'Un sistema scientifico a 4 pilastri che ha trasformato oltre 500 vite. Non è solo allenamento, è una trasformazione completa.',
    
    // Memberships
    'memberships.badge': 'PIANI DI MEMBERSHIP',
    'memberships.title.choose': 'Scegli la tua',
    'memberships.title.transformation': 'Trasformazione',
    'memberships.subtitle': 'Piani progettati per diversi obiettivi e budget. Tutti includono il mio metodo provato e garanzia di risultati.',
    'memberships.plan.basic': 'Base',
    'memberships.plan.quarterly': 'Trimestrale',
    'memberships.plan.biannual': 'Semestrale',
    'memberships.plan.annual': 'Premium Annuale',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'PIÙ POPOLARE',
    'memberships.exclusive': 'ESCLUSIVO',
    'memberships.select': 'Seleziona Piano',
    'memberships.schedule': 'Programma Chiamata',
    'memberships.guarantee.title': 'Garanzia di Soddisfazione',
    'memberships.guarantee.text': 'Se non sei completamente soddisfatto dei tuoi progressi nei primi 30 giorni, rimborsiamo il',
    'memberships.guarantee.money': '100% dei tuoi soldi',
    'memberships.guarantee.no': '. Senza domande.',
    'memberships.guarantee.days': '30 giorni di garanzia totale',
    
    // FAQ
    'faq.badge': 'DOMANDE FREQUENTI',
    'faq.title.resolve': 'Risolvi i tuoi',
    'faq.title.doubts': 'Dubbi',
    'faq.subtitle': 'Risposte alle domande più comuni sul mio metodo di coaching e come può trasformare la tua vita.',
    
    // Application
    'application.badge': 'CANDIDATURA VIP',
    'application.title.request': 'Richiedi il tuo',
    'application.title.vip': 'Posto VIP',
    'application.subtitle': 'Accetto solo 12 clienti VIP per trimestre per garantire risultati eccezionali. Completa questa candidatura per essere considerato.',
    'application.form.title': 'Modulo di Candidatura',
    'application.form.name': 'Nome Completo',
    'application.form.email': 'Email',
    'application.form.phone': 'Telefono',
    'application.form.age': 'Età',
    'application.form.submit': 'INVIA CANDIDATURA VIP',
    
    // Footer
    'footer.coaching': 'COACHING VIP',
    'footer.description': 'Coaching VIP esclusivo per trasformazioni reali. IFBB Pro, Attore di Hollywood, e mentore di 500+ trasformazioni di successo.',
    'footer.links': 'COLLEGAMENTI',
    'footer.legal': 'LEGALE',
    'footer.home': 'Home',
    'footer.about': 'Su Sergi',
    'footer.method': 'Metodo',
    'footer.testimonials': 'Testimonianze',
    'footer.join': 'Unisciti',
    'footer.privacy': 'Politica sulla Privacy',
    'footer.cookies': 'Politica sui Cookie',
    'footer.terms': 'Termini e Condizioni',
    'footer.refund': 'Politica di Rimborso',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.credentials': 'IFBB PRO • ZEUS • COACH VIP'
  },
  pt: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Coaching personalizado de elite com',
    'hero.subtitle.actor': 'IFBB Pro & Zeus em Justice League',
    'hero.cta.primary': 'Solicitar Consulta VIP',
    'hero.cta.secondary': 'Ver Método',
    'hero.trust.years': '15+ anos IFBB Pro',
    'hero.trust.actor': 'Ator de Hollywood',
    'hero.trust.guarantee': 'Garantia 30 dias',
    
    // Stats
    'stats.transformations': 'Transformações',
    'stats.years': 'Anos Pro',
    'stats.success': 'Taxa de Sucesso',
    'stats.vip': 'Vagas VIP',
    'stats.clients': 'clientes',
    
    // Authority
    'authority.badge': 'AUTORIDADE MUNDIAL',
    'authority.title.why': 'Por que',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'Não sou apenas mais um coach. Sou um profissional com credenciais reais, resultados comprovados e a experiência de ter transformado mais de 500 vidas.',
    
    // Method
    'method.badge': 'MÉTODO EXCLUSIVO',
    'method.title.method': 'O Método',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'Um sistema científico de 4 pilares que transformou mais de 500 vidas. Não é apenas treino, é uma transformação completa.',
    
    // Memberships
    'memberships.badge': 'PLANOS DE MEMBERSHIP',
    'memberships.title.choose': 'Escolha sua',
    'memberships.title.transformation': 'Transformação',
    'memberships.subtitle': 'Planos projetados para diferentes objetivos e orçamentos. Todos incluem meu método comprovado e garantia de resultados.',
    'memberships.plan.basic': 'Básico',
    'memberships.plan.quarterly': 'Trimestral',
    'memberships.plan.biannual': 'Semestral',
    'memberships.plan.annual': 'Premium Anual',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'MAIS POPULAR',
    'memberships.exclusive': 'EXCLUSIVO',
    'memberships.select': 'Selecionar Plano',
    'memberships.schedule': 'Agendar Chamada',
    'memberships.guarantee.title': 'Garantia de Satisfação',
    'memberships.guarantee.text': 'Se você não estiver completamente satisfeito com seu progresso nos primeiros 30 dias, reembolsamos',
    'memberships.guarantee.money': '100% do seu dinheiro',
    'memberships.guarantee.no': '. Sem perguntas.',
    'memberships.guarantee.days': '30 dias de garantia total',
    
    // FAQ
    'faq.badge': 'PERGUNTAS FREQUENTES',
    'faq.title.resolve': 'Resolva suas',
    'faq.title.doubts': 'Dúvidas',
    'faq.subtitle': 'Respostas às perguntas mais comuns sobre meu método de coaching e como pode transformar sua vida.',
    
    // Application
    'application.badge': 'CANDIDATURA VIP',
    'application.title.request': 'Solicite sua',
    'application.title.vip': 'Vaga VIP',
    'application.subtitle': 'Aceito apenas 12 clientes VIP por trimestre para garantir resultados excepcionais. Complete esta candidatura para ser considerado.',
    'application.form.title': 'Formulário de Candidatura',
    'application.form.name': 'Nome Completo',
    'application.form.email': 'Email',
    'application.form.phone': 'Telefone',
    'application.form.age': 'Idade',
    'application.form.submit': 'ENVIAR CANDIDATURA VIP',
    
    // Footer
    'footer.coaching': 'COACHING VIP',
    'footer.description': 'Coaching VIP exclusivo para transformações reais. IFBB Pro, Ator de Hollywood, e mentor de 500+ transformações bem-sucedidas.',
    'footer.links': 'LINKS',
    'footer.legal': 'LEGAL',
    'footer.home': 'Início',
    'footer.about': 'Sobre Sergi',
    'footer.method': 'Método',
    'footer.testimonials': 'Depoimentos',
    'footer.join': 'Junte-se',
    'footer.privacy': 'Política de Privacidade',
    'footer.cookies': 'Política de Cookies',
    'footer.terms': 'Termos e Condições',
    'footer.refund': 'Política de Reembolso',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.credentials': 'IFBB PRO • ZEUS • COACH VIP'
  },
  de: {
    // Hero
    'hero.title.elite': 'Elite',
    'hero.title.transformation': 'Transformation',
    'hero.title.coaching': 'Coaching',
    'hero.subtitle': 'Elite-Personal-Coaching mit',
    'hero.subtitle.actor': 'IFBB Pro & Zeus in Justice League',
    'hero.cta.primary': 'VIP-Beratung Anfordern',
    'hero.cta.secondary': 'Methode Ansehen',
    'hero.trust.years': '15+ Jahre IFBB Pro',
    'hero.trust.actor': 'Hollywood-Schauspieler',
    'hero.trust.guarantee': '30-Tage-Garantie',
    
    // Stats
    'stats.transformations': 'Transformationen',
    'stats.years': 'Pro-Jahre',
    'stats.success': 'Erfolgsrate',
    'stats.vip': 'VIP-Plätze',
    'stats.clients': 'Kunden',
    
    // Authority
    'authority.badge': 'WELTAUTORITÄT',
    'authority.title.why': 'Warum',
    'authority.title.sergi': 'Sergi Constance?',
    'authority.subtitle': 'Ich bin nicht nur ein weiterer Coach. Ich bin ein Profi mit echten Referenzen, bewiesenen Ergebnissen und der Erfahrung, über 500 Leben transformiert zu haben.',
    
    // Method
    'method.badge': 'EXKLUSIVE METHODE',
    'method.title.method': 'Die Methode',
    'method.title.sergi': 'Sergi Constance',
    'method.subtitle': 'Ein wissenschaftliches 4-Säulen-System, das über 500 Leben transformiert hat. Es ist nicht nur Training, es ist eine komplette Transformation.',
    
    // Memberships
    'memberships.badge': 'MITGLIEDSCHAFTSPLÄNE',
    'memberships.title.choose': 'Wählen Sie Ihre',
    'memberships.title.transformation': 'Transformation',
    'memberships.subtitle': 'Pläne für verschiedene Ziele und Budgets. Alle beinhalten meine bewährte Methode und Ergebnisgarantie.',
    'memberships.plan.basic': 'Basis',
    'memberships.plan.quarterly': 'Vierteljährlich',
    'memberships.plan.biannual': 'Halbjährlich',
    'memberships.plan.annual': 'Premium Jährlich',
    'memberships.plan.vip': 'VIP Elite',
    'memberships.popular': 'AM BELIEBTESTEN',
    'memberships.exclusive': 'EXKLUSIV',
    'memberships.select': 'Plan Auswählen',
    'memberships.schedule': 'Anruf Planen',
    'memberships.guarantee.title': 'Zufriedenheitsgarantie',
    'memberships.guarantee.text': 'Wenn Sie in den ersten 30 Tagen nicht vollständig zufrieden sind, erstatten wir',
    'memberships.guarantee.money': '100% Ihres Geldes',
    'memberships.guarantee.no': '. Keine Fragen.',
    'memberships.guarantee.days': '30 Tage Vollgarantie',
    
    // FAQ
    'faq.badge': 'HÄUFIGE FRAGEN',
    'faq.title.resolve': 'Lösen Sie Ihre',
    'faq.title.doubts': 'Zweifel',
    'faq.subtitle': 'Antworten auf die häufigsten Fragen zu meiner Coaching-Methode und wie sie Ihr Leben transformieren kann.',
    
    // Application
    'application.badge': 'VIP-BEWERBUNG',
    'application.title.request': 'Beantragen Sie Ihren',
    'application.title.vip': 'VIP-Platz',
    'application.subtitle': 'Ich akzeptiere nur 12 VIP-Kunden pro Quartal, um außergewöhnliche Ergebnisse zu garantieren. Füllen Sie diese Bewerbung aus, um berücksichtigt zu werden.',
    'application.form.title': 'Bewerbungsformular',
    'application.form.name': 'Vollständiger Name',
    'application.form.email': 'E-Mail',
    'application.form.phone': 'Telefon',
    'application.form.age': 'Alter',
    'application.form.submit': 'VIP-BEWERBUNG SENDEN',
    
    // Footer
    'footer.coaching': 'VIP COACHING',
    'footer.description': 'Exklusives VIP-Coaching für echte Transformationen. IFBB Pro, Hollywood-Schauspieler und Mentor von 500+ erfolgreichen Transformationen.',
    'footer.links': 'LINKS',
    'footer.legal': 'RECHTLICHES',
    'footer.home': 'Startseite',
    'footer.about': 'Über Sergi',
    'footer.method': 'Methode',
    'footer.testimonials': 'Testimonials',
    'footer.join': 'Beitreten',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.terms': 'Geschäftsbedingungen',
    'footer.refund': 'Rückerstattungsrichtlinie',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.credentials': 'IFBB PRO • ZEUS • VIP COACH'
  }
};

// Mapeo de países a idiomas
const countryLanguageMap: { [key: string]: string } = {
  'ES': 'es', // España
  'MX': 'es', // México
  'AR': 'es', // Argentina
  'CO': 'es', // Colombia
  'PE': 'es', // Perú
  'CL': 'es', // Chile
  'VE': 'es', // Venezuela
  'EC': 'es', // Ecuador
  'GT': 'es', // Guatemala
  'CU': 'es', // Cuba
  'BO': 'es', // Bolivia
  'DO': 'es', // República Dominicana
  'HN': 'es', // Honduras
  'PY': 'es', // Paraguay
  'SV': 'es', // El Salvador
  'NI': 'es', // Nicaragua
  'CR': 'es', // Costa Rica
  'PA': 'es', // Panamá
  'UY': 'es', // Uruguay
  'US': 'en', // Estados Unidos
  'GB': 'en', // Reino Unido
  'CA': 'en', // Canadá
  'AU': 'en', // Australia
  'NZ': 'en', // Nueva Zelanda
  'IE': 'en', // Irlanda
  'ZA': 'en', // Sudáfrica
  'FR': 'fr', // Francia
  'BE': 'fr', // Bélgica (francófona)
  'CH': 'fr', // Suiza (francófona)
  'LU': 'fr', // Luxemburgo
  'MC': 'fr', // Mónaco
  'IT': 'it', // Italia
  'SM': 'it', // San Marino
  'VA': 'it', // Vaticano
  'PT': 'pt', // Portugal
  'BR': 'pt', // Brasil
  'AO': 'pt', // Angola
  'MZ': 'pt', // Mozambique
  'DE': 'de', // Alemania
  'AT': 'de', // Austria
  'LI': 'de', // Liechtenstein
};

export const useLocationTranslation = () => {
  const [location, setLocation] = useState<LocationData>({
    country: '',
    countryCode: '',
    language: 'es', // Idioma por defecto
    detected: false
  });

  const [currentLanguage, setCurrentLanguage] = useState<string>('es');

  // Función para detectar ubicación
  const detectLocation = async () => {
    try {
      // Intentar con ipapi.co (gratuito y confiable)
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.country_code) {
        const detectedLanguage = countryLanguageMap[data.country_code] || 'es';
        
        const locationData: LocationData = {
          country: data.country_name || '',
          countryCode: data.country_code || '',
          language: detectedLanguage,
          detected: true
        };

        setLocation(locationData);
        setCurrentLanguage(detectedLanguage);
        
        // Guardar en localStorage para futuras visitas
        localStorage.setItem('userLocation', JSON.stringify(locationData));
        
        return locationData;
      }
    } catch (error) {
      console.log('Error detecting location with ipapi.co:', error);
      
      // Fallback: intentar con otro servicio
      try {
        const fallbackResponse = await fetch('https://api.country.is/');
        const fallbackData = await fallbackResponse.json();
        
        if (fallbackData.country) {
          const detectedLanguage = countryLanguageMap[fallbackData.country] || 'es';
          
          const locationData: LocationData = {
            country: fallbackData.country,
            countryCode: fallbackData.country,
            language: detectedLanguage,
            detected: true
          };

          setLocation(locationData);
          setCurrentLanguage(detectedLanguage);
          localStorage.setItem('userLocation', JSON.stringify(locationData));
          
          return locationData;
        }
      } catch (fallbackError) {
        console.log('Error with fallback location service:', fallbackError);
      }
    }

    // Si todo falla, usar español por defecto
    const defaultLocation: LocationData = {
      country: 'España',
      countryCode: 'ES',
      language: 'es',
      detected: false
    };

    setLocation(defaultLocation);
    setCurrentLanguage('es');
    return defaultLocation;
  };

  // Función para traducir texto
  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['es'][key] || key;
  };

  // Función para cambiar idioma manualmente
  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('selectedLanguage', lang);
    }
  };

  // Función para obtener idiomas disponibles
  const getAvailableLanguages = () => {
    return [
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'pt', name: 'Português', flag: '🇵🇹' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ];
  };

  useEffect(() => {
    // Verificar si hay un idioma seleccionado manualmente
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      return;
    }

    // Verificar si ya tenemos ubicación guardada
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      try {
        const locationData = JSON.parse(savedLocation);
        setLocation(locationData);
        setCurrentLanguage(locationData.language);
        return;
      } catch (error) {
        console.log('Error parsing saved location:', error);
      }
    }

    // Detectar ubicación automáticamente
    detectLocation();
  }, []);

  return {
    location,
    currentLanguage,
    t,
    changeLanguage,
    getAvailableLanguages,
    detectLocation
  };
};