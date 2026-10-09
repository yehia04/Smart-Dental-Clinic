"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "ar";

const phone = "+962779757377";
const waLink = (language: Language) =>
  `https://wa.me/962779757377?text=${encodeURIComponent(
    language === "ar" ? "مرحبا، حاب أحجز موعد في عيادة سمارت لطب الأسنان." : "Hello, I’d like to book an appointment at Smart Dental Clinic.",
  )}`;

const copy = {
  en: {
    top: "Thoughtful dental care, close to home",
    navServices: "Our care", navClinic: "The clinic", navVisit: "Find us",
    call: "Call us", book: "Book on WhatsApp", lang: "العربية",
    eyebrow: "SMART DENTAL CLINIC · AMMAN",
    headline: "A healthier smile starts with feeling at ease.",
    intro: "From your first check-up to the care that brings your smile back, we’re here to make every visit feel clear, comfortable, and personal.",
    explore: "Explore our care", location: "Visit us in Shafa Badran",
    trust: "Care that feels personal", trustText: "Time to listen, clear guidance, and a plan that feels right for you.",
    servicesEyebrow: "CARE FOR EVERY SMILE", servicesTitle: "The care you need, all in one place.",
    servicesIntro: "Whether you’re here for routine care or something more specific, we’ll help you understand your options and feel confident about what comes next.",
    s1: "Comprehensive dental care", d1: "Everyday check-ups, prevention, and restorative care to help keep your smile healthy.",
    s2: "Dental implants", d2: "Thoughtful implant care to help restore function and confidence in your smile.",
    s3: "Cosmetic dentistry", d3: "Personalized treatments designed to bring out the best in your natural smile.",
    s4: "Endodontics", d4: "Focused care for the inside of the tooth, with your comfort at the heart of every step.",
    learn: "Talk to us about your care", clinicEyebrow: "A CALM PLACE TO CARE FOR YOUR SMILE",
    clinicTitle: "A welcoming clinic, with your comfort in mind.",
    clinicText: "At Smart Dental Clinic, we believe good care starts with a good conversation. Dr. Suhaib Ali and our team welcome you with attentive, straightforward care in a modern clinic in Shafa Badran.",
    point1: "Friendly, personal attention", point2: "Clear explanations at every step", point3: "Modern, comfortable surroundings",
    galleryLabel: "A look inside Smart Dental Clinic", galleryTitle: "Designed to help you feel at ease.",
    visitEyebrow: "WE’RE EASY TO FIND", visitTitle: "Your neighborhood dental clinic.",
    address: "Al Arrab Street, Shafa Badran, Amman, Jordan", hoursTitle: "Clinic hours",
    hours: "Saturday–Thursday", hoursTime: "10:00 am – 5:00 pm", closed: "Friday: Closed",
    directions: "Get directions", visitCallout: "Ready to take the next step?", visitBody: "Send us a message and we’ll help you find a time that works.",
    footerLine: "Care for your smile, close to home.", copyright: "© 2026 Smart Dental Clinic. All rights reserved.",
  },
  ar: {
    top: "عناية بأسنانك، قريبة منك",
    navServices: "خدماتنا", navClinic: "عن العيادة", navVisit: "موقعنا",
    call: "اتصل فينا", book: "احجز عالواتساب", lang: "English",
    eyebrow: "عيادة سمارت لطب الأسنان · عمّان",
    headline: "ابتسامتك الصحية بتبدأ من راحتك.",
    intro: "من الفحص الدوري للعلاجات اللي بترجعلك ابتسامتك، إحنا معك بكل خطوة عشان تكون زيارتك مريحة وواضحة ومناسبة إلك.",
    explore: "تعرّف على خدماتنا", location: "زورونا في شفا بدران",
    trust: "اهتمام بناسبك", trustText: "منسمعلك، ومنشرحلك خياراتك، ومنساعدك تختار الخطة الأنسب إلك.",
    servicesEyebrow: "رعاية لكل ابتسامة", servicesTitle: "كل اللي بتحتاجه لابتسامتك بمكان واحد.",
    servicesIntro: "سواء جاي لفحص دوري أو لعلاج معيّن، منساعدك تعرف خياراتك وتكون مرتاح للخطوة الجايّة.",
    s1: "رعاية متكاملة للأسنان", d1: "فحوصات دورية، ووقاية، وعلاجات ترميمية للمحافظة على صحة ابتسامتك.",
    s2: "زراعة الأسنان", d2: "رعاية مدروسة لزراعة الأسنان تساعدك تستعيد وظيفة أسنانك وثقتك بابتسامتك.",
    s3: "تجميل الأسنان", d3: "علاجات بتصميم يناسبك وبتبرز جمال ابتسامتك الطبيعية.",
    s4: "علاج العصب", d4: "عناية متخصصة بداخل السن، وراحتك بتكون أولويتنا بكل خطوة.",
    learn: "احكيلنا شو بتحتاج", clinicEyebrow: "مكان مريح للعناية بابتسامتك",
    clinicTitle: "عيادة بترحّب فيك وبتفكّر براحتك.",
    clinicText: "في عيادة سمارت، بنؤمن إن الرعاية المنيحة بتبدأ بحوار واضح. د. صهيب علي وفريقنا برحّبوا فيك وبقدّموا عناية شخصية وواضحة بعيادة حديثة في شفا بدران.",
    point1: "اهتمام شخصي وبأسلوب ودود", point2: "شرح واضح بكل خطوة", point3: "أجواء عصرية ومريحة",
    galleryLabel: "جولة في عيادة سمارت لطب الأسنان", galleryTitle: "مصممة عشان تحس بالراحة.",
    visitEyebrow: "وصولنا سهل", visitTitle: "عيادة الأسنان القريبة منكم.",
    address: "شارع العرب، شفا بدران، عمّان، الأردن", hoursTitle: "مواعيد العيادة",
    hours: "السبت – الخميس", hoursTime: "١٠:٠٠ صباحاً – ٥:٠٠ مساءً", closed: "الجمعة: عطلة",
    directions: "افتح الموقع على الخريطة", visitCallout: "جاهز تاخد الخطوة الجايّة؟", visitBody: "ابعتلنا رسالة ومنساعدك تلاقي الموعد المناسب.",
    footerLine: "عناية بابتسامتك، قريبة منك.", copyright: "© ٢٠٢٦ عيادة سمارت لطب الأسنان. جميع الحقوق محفوظة.",
  },
};

function Icon({ name, size = 20 }: { name: "arrow" | "tooth" | "implant" | "sparkle" | "root" | "pin" | "clock" | "check" | "phone" | "whatsapp"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    tooth: <path d="M12 3.2c-2.7-1.4-7-.7-7.8 2.5-.6 2.7 1.2 5.4 1.8 8.1.6 2.8.9 6 2.7 6.9 1.6.8 1.9-1.3 2.5-3.8.3-1.2.5-2.1 1-2.1s.7.9 1 2.1c.6 2.5.9 4.6 2.5 3.8 1.8-.9 2.1-4.1 2.7-6.9.6-2.7 2.4-5.4 1.8-8.1C19.4 2.5 14.7 1.8 12 3.2Z"/>,
    implant: <><path d="M12 3.2c-2.8-1.4-7.1-.7-7.8 2.5-.6 2.7 1.2 5.4 1.8 8.1.5 2.1.8 4.4 1.8 5.8"/><path d="M12 3.2c2.8-1.4 7.1-.7 7.8 2.5.6 2.7-1.2 5.4-1.8 8.1-.5 2.1-.8 4.4-1.8 5.8"/><path d="M8.1 13.5h7.8M8.6 16h6.8m-5.9 2.5h5"/></>,
    sparkle: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
    root: <><path d="M12 3.2c-2.8-1.4-7.1-.7-7.8 2.5-.6 2.7 1.2 5.4 1.8 8.1.6 2.8.9 6 2.7 6.9 1.6.8 1.9-1.3 2.5-3.8.3-1.2.5-2.1 1-2.1s.7.9 1 2.1c.6 2.5.9 4.6 2.5 3.8 1.8-.9 2.1-4.1 2.7-6.9.6-2.7 2.4-5.4 1.8-8.1C19.4 2.5 14.7 1.8 12 3.2Z"/><path d="M12 8v5m-2.5-2.5h5"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    phone: <path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 3a14 14 0 0 1-6-6l3-2-2-5Z"/>,
    whatsapp: <><path d="M20.2 11.7a8.1 8.1 0 0 1-12 7.1L3 20l1.3-4.9a8.1 8.1 0 1 1 15.9-3.4Z"/><path d="M8.5 8.2c.3-.7.7-.7 1-.7h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.7.9c-.2.2-.2.4 0 .7.4.7 1.1 1.4 1.9 1.9.3.2.5.2.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.3-.8 1.8-.5.5-1.2.7-2 .6-1.3-.2-2.8-.9-4.2-2.2-1.1-1-2-2.3-2.2-3.5-.1-.8.1-1.5.5-2.1Z"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const services = [
  { icon: "tooth" as const, title: "s1" as const, description: "d1" as const, number: "01" },
  { icon: "implant" as const, title: "s2" as const, description: "d2" as const, number: "02" },
  { icon: "sparkle" as const, title: "s3" as const, description: "d3" as const, number: "03" },
  { icon: "root" as const, title: "s4" as const, description: "d4" as const, number: "04" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const t = copy[language];
  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <div className="announcement"><span className="announcement-dot" />{t.top}</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Smart Dental Clinic home"><Image className="brand-logo" src="/images/smart-dental-logo-v2.png" alt="Smart Dental Clinic" width={180} height={60} priority /></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#services">{t.navServices}</a><a href="#clinic">{t.navClinic}</a><a href="#visit">{t.navVisit}</a></nav>
        <div className="header-actions"><button className="language-button" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>{t.lang}</button></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy"><div className="eyebrow"><span />{t.eyebrow}</div><h1>{t.headline}</h1><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href={waLink(language)} target="_blank" rel="noreferrer"><Icon name="whatsapp" />{t.book}<Icon name="arrow" size={17} /></a><a className="button button-quiet" href="#services">{t.explore}<Icon name="arrow" size={16} /></a></div><div className="hero-note"><span className="note-icon"><Icon name="pin" size={18} /></span><span>{t.location}<small>Al Arrab Street, Amman</small></span></div></div>
        <div className="hero-visual"><div className="hero-image-wrap"><Image src="/images/hero-treatment-room.png" alt="Bright dental treatment room with panoramic windows at Smart Dental Clinic" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="hero-image" /></div><div className="hero-image-accent"/><div className="care-card"><div className="care-icon"><Icon name="tooth" size={23} /></div><div><strong>{t.trust}</strong><p>{t.trustText}</p></div><span className="care-card-mark">✳</span></div><div className="hero-image-label"><span />{t.galleryLabel}</div></div>
      </section>

      <section className="services-section section-pad" id="services"><div className="section-heading"><div><div className="eyebrow"><span />{t.servicesEyebrow}</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card-top"><div className="service-icon"><Icon name={service.icon} size={25} /></div><span>{service.number}</span></div><h3>{t[service.title]}</h3><p>{t[service.description]}</p><a href="#visit" aria-label={`${t.navVisit}: ${t[service.title]}`}><Icon name="arrow" size={18} /></a></article>)}</div><a className="text-link" href="#visit">{t.navVisit}<Icon name="arrow" size={17} /></a></section>

      <section className="clinic-section" id="clinic"><div className="clinic-photos"><div className="clinic-photo clinic-photo-large"><Image src="/images/treatment-room.jpg" alt="Treatment room with a view at Smart Dental Clinic" fill sizes="(max-width: 800px) 90vw, 38vw" /></div><div className="clinic-photo clinic-photo-small"><Image src="/images/diagnostics.png" alt="Dental imaging equipment at the clinic" fill sizes="(max-width: 800px) 45vw, 19vw" /></div><div className="clinic-stamp"><Image src="/images/smart-dental-logo-v2.png" alt="Smart Dental Clinic" width={135} height={45} /></div></div><div className="clinic-copy"><div className="eyebrow"><span />{t.clinicEyebrow}</div><h2>{t.clinicTitle}</h2><p>{t.clinicText}</p><ul>{[t.point1, t.point2, t.point3].map((point) => <li key={point}><Icon name="check" size={19} />{point}</li>)}</ul></div></section>

      <section className="gallery-strip"><div><div className="eyebrow"><span />{t.galleryLabel}</div><h2>{t.galleryTitle}</h2></div><div className="gallery-grid"><div className="gallery-image gallery-reception"><Image src="/images/reception.png" alt="Clinic reception area" fill sizes="(max-width: 800px) 90vw, 40vw" /></div><div className="gallery-image"><Image src="/images/diagnostics.png" alt="Dental diagnostics room" fill sizes="(max-width: 800px) 90vw, 25vw" /></div><div className="gallery-image"><Image src="/images/treatment-room.jpg" alt="Dental treatment room" fill sizes="(max-width: 800px) 90vw, 25vw" /></div></div></section>

      <section className="visit-section" id="visit"><div className="visit-heading"><div className="eyebrow"><span />{t.visitEyebrow}</div><h2>{t.visitTitle}</h2><p>{t.address}</p><a className="text-link" href="https://maps.app.goo.gl/vmXk1kZkV34tNBhr9" target="_blank" rel="noreferrer"><Icon name="pin" size={18} />{t.directions}<Icon name="arrow" size={16} /></a></div><div className="visit-details"><div className="visit-detail"><div className="detail-icon"><Icon name="clock" /></div><div><strong>{t.hoursTitle}</strong><p>{t.hours}<br/><b>{t.hoursTime}</b><br/><span>{t.closed}</span></p></div></div><div className="visit-detail"><div className="detail-icon"><Icon name="phone" /></div><div><strong>{t.call}</strong><p><a href={`tel:${phone}`}>{phone}</a><br/><span>WhatsApp available</span></p></div></div></div><div className="visit-cta"><div><h3>{t.visitCallout}</h3><p>{t.visitBody}</p></div><a className="button button-light" href={waLink(language)} target="_blank" rel="noreferrer"><Icon name="whatsapp" />{t.book}<Icon name="arrow" size={16} /></a></div></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><Image className="brand-logo" src="/images/smart-dental-logo-v2.png" alt="Smart Dental Clinic" width={156} height={52} /></a><p>{t.footerLine}</p><span>{t.copyright}</span></footer>
    </main>
  );
}

