/* ============================================================
   RUHESTÖRER — i18n translations
   DE = primary, EN = secondary
   ============================================================ */

const translations = {
  de: {
    nav: {
      features: "Funktionen",
      pricing: "Preise",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "Für deutsches Recht",
      headline: "Lärm dokumentieren.\nRecht bekommen.",
      subhead: "Ruhestörer protokolliert Lärmbelästigungen rechtssicher — mit Dezibelmessung, automatischer Ruhezeiterkennung und gerichtsfesten PDF-Exporten für Ordnungsamt, Hausverwaltung und Anwalt.",
      cta_primary: "Im App Store laden",
      cta_secondary: "Mehr erfahren",
    },
    problem: {
      label: "Das Problem",
      title: "Lärm ist schwer zu beweisen",
      body: "Ob bellende Hunde, feiernde Nachbarn oder Baustellen: Ohne dokumentierte Beweise verpufft jede Beschwerde. Behörden und Gerichte brauchen Datum, Uhrzeit, Dauer und Dezibelwerte — sorgfältig aufgezeichnet, rechtlich strukturiert.",
      stat1: "22:00–06:00",
      stat1_label: "Nachtruhe",
      stat2: "13:00–15:00",
      stat2_label: "Mittagsruhe",
      stat3: "§117 OWiG",
      stat3_label: "Rechtsgrundlage",
    },
    features: {
      label: "Funktionen",
      title: "Alles für eine lückenlose Dokumentation",
      subtitle: "Von der ersten Messung bis zum fertig ausgefüllten Behördenschreiben.",
      f1_title: "Echtzeit-Dezibelmessung",
      f1_desc: "Kalibrierte SPL-Näherung mit 28-Balken-Wellenform. Min-, Ø- und Max-Werte werden automatisch erfasst.",
      f2_title: "Automatische Ruhezeiterkennung",
      f2_desc: "Nachtruhe (22–06 Uhr), Mittagsruhe (13–15 Uhr) und Sonntagsruhe werden sofort erkannt und markiert.",
      f3_title: "Audio-Beweise (Pro)",
      f3_desc: "Bis zu 30 Sekunden Aufnahme pro Ereignis. Rechtlich relevante Tonaufnahme, lokal gespeichert, niemals hochgeladen.",
      f4_title: "4 Vorlagen für Behörden",
      f4_desc: "Ordnungsamt, Hausverwaltung, Rechtsanwalt, Amtsgericht — jede Vorlage mit korrekter Rechtsgrundlage vorbefüllt.",
      f5_title: "iOS-Widget",
      f5_desc: "Mit einem Tipp auf den Homescreen direkt ein neues Ereignis protokollieren. Zeigt auch das letzte gespeicherte Ereignis.",
      f6_title: "Offline & privat",
      f6_desc: "Alle Daten bleiben auf deinem Gerät. Kein Account, keine Cloud, keine Weitergabe. Für immer.",
    },
    steps: {
      label: "So funktioniert's",
      title: "In drei Schritten zur Dokumentation",
      s1_title: "Ereignis erfassen",
      s1_desc: "Lärmtyp auswählen, Dezibelmeter starten, optionale Notiz und Zeuge hinzufügen.",
      s2_title: "Automatisch prüfen",
      s2_desc: "Die App erkennt Ruhezeitverstöße und markiert das Ereignis entsprechend.",
      s3_title: "PDF exportieren",
      s3_desc: "Professionelles Behördenschreiben mit einem Tipp generieren und direkt versenden.",
    },
    pricing_teaser: {
      label: "Preise",
      title: "Kostenlos starten, Pro wenn du's brauchst",
      free_title: "Kostenlos",
      free_desc: "Bis zu 10 Ereignisse, Dezibelmeter, Ruhezeiterkennung, PDF-Export.",
      pro_title: "Pro — Einmalzahlung",
      pro_desc: "Unbegrenzte Ereignisse, Audio-Aufnahmen, ZIP-Export mit Tonmaterial.",
      pro_price: "19,99 €",
      pro_cadence: "Einmalig. Für immer.",
      see_all: "Alle Preise ansehen →",
    },
    cta: {
      title: "Dein Protokoll. Dein Recht.",
      subtitle: "Hör auf, Lärm zu ertragen. Fang an, ihn zu dokumentieren.",
      btn: "Jetzt im App Store",
    },
    footer: {
      tagline: "Rechtssichere Lärmdokumentation für Deutschland.",
      pages: "Seiten",
      legal: "Rechtliches",
      copyright: "© 2025 Ruhestörer. Alle Rechte vorbehalten.",
    },
  },

  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Built for German law",
      headline: "Document noise.\nGet results.",
      subhead: "Ruhestörer logs noise disturbances with legal precision — decibel metering, automatic Ruhezeiten detection, and court-ready PDF exports for authorities, property managers, and lawyers.",
      cta_primary: "Download on App Store",
      cta_secondary: "Learn more",
    },
    problem: {
      label: "The Problem",
      title: "Noise is hard to prove",
      body: "Barking dogs, noisy neighbours, construction sites: without documented evidence, every complaint falls flat. Authorities and courts need dates, times, durations, and decibel readings — carefully recorded, legally structured.",
      stat1: "22:00–06:00",
      stat1_label: "Night quiet hours",
      stat2: "13:00–15:00",
      stat2_label: "Midday quiet hours",
      stat3: "§117 OWiG",
      stat3_label: "Legal basis",
    },
    features: {
      label: "Features",
      title: "Everything for complete documentation",
      subtitle: "From the first measurement to a finished authority letter.",
      f1_title: "Real-time decibel metering",
      f1_desc: "Calibrated SPL approximation with a 28-bar animated waveform. Min, avg, and max values tracked automatically.",
      f2_title: "Automatic Ruhezeiten detection",
      f2_desc: "Night quiet hours (22–06), midday (13–15), and Sunday quiet time are instantly detected and flagged.",
      f3_title: "Audio evidence (Pro)",
      f3_desc: "Up to 30 seconds of recording per event. Legally relevant audio, stored locally, never uploaded.",
      f4_title: "4 official document templates",
      f4_desc: "Ordnungsamt, Hausverwaltung, Rechtsanwalt, Amtsgericht — each pre-filled with the correct legal basis.",
      f5_title: "iOS home screen widget",
      f5_desc: "One tap on your home screen to start logging. Also shows your last recorded event at a glance.",
      f6_title: "Offline & private",
      f6_desc: "All data stays on your device. No account, no cloud, no sharing. Forever.",
    },
    steps: {
      label: "How it works",
      title: "Three steps to a legal record",
      s1_title: "Log the event",
      s1_desc: "Choose the noise type, start the meter, add an optional note and witness name.",
      s2_title: "Auto-detect violations",
      s2_desc: "The app checks Ruhezeiten and flags any violations immediately.",
      s3_title: "Export the PDF",
      s3_desc: "Generate a professional official letter with one tap and send it directly.",
    },
    pricing_teaser: {
      label: "Pricing",
      title: "Start free, go Pro when you need it",
      free_title: "Free",
      free_desc: "Up to 10 events, decibel meter, Ruhezeiten detection, PDF export.",
      pro_title: "Pro — One-time",
      pro_desc: "Unlimited events, audio recordings, ZIP export with audio attachments.",
      pro_price: "€19.99",
      pro_cadence: "Once. Forever.",
      see_all: "See full pricing →",
    },
    cta: {
      title: "Your record. Your rights.",
      subtitle: "Stop tolerating noise. Start documenting it.",
      btn: "Get it on the App Store",
    },
    footer: {
      tagline: "Legal-grade noise documentation for Germany.",
      pages: "Pages",
      legal: "Legal",
      copyright: "© 2025 Ruhestörer. All rights reserved.",
    },
  },
};

/* ── Translation engine ──────────────────────────────────── */

let currentLang = 'de';

function detectLang() {
  const stored = localStorage.getItem('rs_lang');
  if (stored && (stored === 'de' || stored === 'en')) return stored;
  const nav = (navigator.language || 'de').toLowerCase();
  return nav.startsWith('de') ? 'de' : 'en';
}

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  // Apply data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = key.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined) {
      // Handle newlines
      el.innerHTML = val.replace(/\n/g, '<br>');
    }
  });

  // Apply data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = key.split('.').reduce((o, k) => o?.[k], t);
    if (val !== undefined) el.placeholder = val;
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  localStorage.setItem('rs_lang', lang);
  applyTranslations(lang);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
