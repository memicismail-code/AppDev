const translations = {
    bs: {
        translation: {
            nav_services: "Usluge",
            nav_products: "Proizvodi",
            nav_about: "O nama",
            nav_contact: "Kontakt",
            hero_badge: "Zenica, BA",
            hero_title: "Pravimo Web Stranice <br> & Razvijamo Aplikacije",
            hero_subtitle: "PROFESIONALNI WEB I APP RAZVOJ",
            hero_btn_start: "Započni Projekt",
            hero_btn_more: "Saznaj Više",
            services_title: "Naše Usluge",
            service_web: "Web Dizajn",
            service_web_desc: "Izrada modernih, responzivnih i visoko-performansnih web stranica prilagođenih vašem brendu.",
            service_app: "App Razvoj",
            service_app_desc: "Razvoj nativnih i hibridnih mobilnih aplikacija koje pružaju vrhunsko korisničko iskustvo.",
            service_sec: "Kripto & Sigurnost",
            service_sec_desc: "Implementacija naprednih sistema enkripcije i sigurnosnih protokola za maksimalnu privatnost.",
            prod_label: "Istaknuti Proizvod",
            prod_title: "Custom Cryptic Chat",
            prod_benefit: "Bez SIM kartice, bez E-maila, bez registracije, Maksimalna privatnost",
            prod_desc: "Pravimo Kriptovane chatove za direktnu WebRTC P2P komunikaciju, bez forenzičkih tragova. Aplikacija radi isključivo u RAM memoriji, koristeći AES-256-GCM enkripciju.",
            prod_f1: "AES-256-GCM Enkripcija",
            prod_f2: "ECDH Ephemeral ključevi",
            prod_f3: "Serverless način rada",
            prod_f4: "Zero-Trace arhitektura",
            prod_btn: "Zatraži Demo",
            about_title: "Vaš partner u digitalnom svijetu",
            about_desc: "AppDev 387 je agencija bazirana u Zenici, Bosna i Hercegovina, posvećena kreiranju vrhunskih digitalnih rješenja. Naš fokus je na spoju inovativnog dizajna, robusne funkcionalnosti i beskompromisne sigurnosti.",
            contact_title: "Kontaktirajte Nas",
            contact_email_label: "Email:",
            contact_phone_label: "Telefon:",
            contact_btn: "Pošalji Email",
            footer_copy: "© 2026 AppDev 387. Sva prava zadržana."
        }
    },
    en: {
        translation: {
            nav_services: "Services",
            nav_products: "Products",
            nav_about: "About Us",
            nav_contact: "Contact",
            hero_badge: "Zenica, BA",
            hero_title: "We Create Websites <br> & Develop Apps",
            hero_subtitle: "PROFESSIONAL WEB & APP DEVELOPMENT",
            hero_btn_start: "Start Project",
            hero_btn_more: "Learn More",
            services_title: "Our Services",
            service_web: "Web Design",
            service_web_desc: "Creation of modern, responsive, and high-performance websites tailored to your brand.",
            service_app: "App Development",
            service_app_desc: "Development of native and hybrid mobile applications providing a supreme user experience.",
            service_sec: "Crypto & Security",
            service_sec_desc: "Implementation of advanced encryption systems and security protocols for maximum privacy.",
            prod_label: "Featured Product",
            prod_title: "Custom Cryptic Chat",
            prod_benefit: "No SIM, no E-mail, no registration, Ultimate privacy",
            prod_desc: "We build encrypted chats for direct WebRTC P2P communication, without forensic traces. The application runs exclusively in RAM memory, using AES-256-GCM encryption.",
            prod_f1: "AES-256-GCM Encryption",
            prod_f2: "ECDH Ephemeral keys",
            prod_f3: "Serverless execution",
            prod_f4: "Zero-Trace architecture",
            prod_btn: "Request Demo",
            about_title: "Your partner in the digital world",
            about_desc: "AppDev 387 is an agency based in Zenica, Bosnia and Herzegovina, dedicated to creating premium digital solutions. Our focus is on combining innovative design, robust functionality, and uncompromising security.",
            contact_title: "Contact Us",
            contact_email_label: "Email:",
            contact_phone_label: "Phone:",
            contact_btn: "Send Email",
            footer_copy: "© 2026 AppDev 387. All rights reserved."
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18next
    i18next
        .use(i18nextBrowserLanguageDetector)
        .init({
            resources: translations,
            fallbackLng: 'bs',
            debug: false,
            detection: {
                order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
                caches: ['localStorage', 'cookie']
            }
        }).then(() => {
            updateContent();
            updateToggleButton();
        });

    // Update DOM content based on translation keys
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (el.tagName.toLowerCase() === 'h1') {
                el.innerHTML = i18next.t(key);
            } else {
                el.textContent = i18next.t(key);
            }
        });
    }

    // Bind Toggle Button
    const langToggleBtn = document.getElementById('lang-toggle');
    
    function updateToggleButton() {
        if (langToggleBtn) {
            const currentLang = i18next.resolvedLanguage;
            langToggleBtn.textContent = currentLang === 'bs' ? 'EN' : 'BS';
        }
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = i18next.resolvedLanguage === 'bs' ? 'en' : 'bs';
            i18next.changeLanguage(newLang).then(() => {
                updateContent();
                updateToggleButton();
            });
        });
    }

    // Scroll reveal observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .service-card, .cryptic-chat-teaser').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
