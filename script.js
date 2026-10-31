const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function setHTML(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

function setMetaDescription(text) {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', text);
}

function getSystemLanguage() {
  const languages = (navigator.languages || []).map(lang => lang.toLowerCase());
  const browserLanguage = (navigator.language || '').toLowerCase();
  return [...languages, browserLanguage].some(lang => lang.startsWith('es')) ? 'es' : 'en';
}

function getPreferredLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved === 'en' || saved === 'es') return saved;
  return getSystemLanguage();
}

function applySpanishLocalization() {
  document.documentElement.lang = 'es';
  document.title = 'Carlos Luque Ruiz – Ingeniero QA';
  setMetaDescription('Ingeniero QA con más de 5 años de experiencia en entornos regulados, validación SQL y automatización con Playwright.');

  const replacements = [
    ['.skip-link', 'Saltar al contenido'],
    ['.nav-links li:nth-child(1) a', 'Sobre mí'],
    ['.nav-links li:nth-child(2) a', 'Experiencia'],
    ['.nav-links li:nth-child(3) a', 'Habilidades'],
    ['.nav-links li:nth-child(4) a', 'Proyectos'],
    ['.nav-links li:nth-child(5) a', 'Contacto'],
    ['.hero-eyebrow', 'Ingeniero QA · España · Abierto a equipos remotos e internacionales'],
    ['.hero-subtitle', 'Más de 5 años detectando errores antes de producción · Certificado ISTQB · Automatizando flujos de iOS, Android y web con Playwright'],
    ['.hero-quote', '“Me adapto rápido a mercados inciertos y entrego resultados comprobados.”'],
    ['.hero-cta a:nth-child(1)', 'Ver experiencia'],
    ['.hero-cta a:nth-child(3)', 'Descargar CV (PDF)'],

    ['#about .section-label', 'Sobre mí'],
    ['#about .section-title', '¿Quién soy?'],
    ['#about .about-text p:nth-child(1)', 'Soy QA Engineer con más de 5 años de experiencia en validación funcional, regresión, API, hardware y soporte de producto en entornos regulados y exigentes, incluyendo marcos de calidad ISO 9001.'],
    ['#about .about-text p:nth-child(2)', 'Abordo el QA con una mentalidad muy práctica: detectar riesgos antes de producción, diseñar pruebas que cubran el negocio real, coordinar validaciones end-to-end y comunicar hallazgos con claridad a equipos técnicos, clientes y directivos.'],
    ['#about .about-text p:nth-child(3)', 'He trabajado en loterías, punto de venta, CMS, impresoras, dispositivos embebidos y migraciones tecnológicas complejas.'],
    ['#about .about-text p:nth-child(4)', 'Actualmente estoy construyendo mi portfolio de automatización con Playwright, enfocado en cobertura end-to-end de recorridos de apps iOS, Android y web. Español nativo · Inglés C2 · Francés C1.'],
    ['#about .about-stats .stat-card:nth-child(1) .stat-label', 'Años en QA'],
    ['#about .about-stats .stat-card:nth-child(2) .stat-label', 'Preguntas de práctica creadas (QAQEST)'],
    ['#about .about-stats .stat-card:nth-child(3) .stat-label', 'Certificación Foundation Level'],
    ['#about .about-stats .stat-card:nth-child(4) .stat-label', 'Idiomas'],

    ['#experience .section-label', 'Experiencia'],
    ['#experience .section-title', 'Dónde he trabajado'],
    ['#experience .timeline-item:nth-child(1) .timeline-period', '2024 — actualidad'],
    ['#experience .timeline-item:nth-child(1) .timeline-role', 'Ingeniero QA'],
    ['#experience .timeline-item:nth-child(1) .timeline-desc', 'Empleado de Pollard Banknote y trabajando a través de mkodo en productos de lotería. Testing manual end-to-end en iOS, Android y web, apoyando la calidad y las salidas a producción de soluciones de lotería y punto de venta. Proyectos clave:'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(1)', 'Juegos de rasca digitales — testing de juegos de rasca digitales para una empresa de lotería, cubriendo el comportamiento del juego, los resultados y los recorridos multiplataforma.'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(2)', 'Apps móviles de lotería — Responsable QA de iOS y Android durante más de 2 años. Validé migraciones de .NET → Swift (iOS) y Xamarin/.NET → Kotlin (Android).'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(3)', 'Point of Sale (venta de tickets) — Coordinación E2E desde la concepción del producto hasta la venta final, incluyendo integración tablet-impresora y validación de escenarios críticos.'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(4)', 'Retail Lottery Management System — QA de una plataforma retail para promociones, assets, juegos, stock, agenda de tiendas y operaciones de punto de venta.'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(5)', 'Validación de APIs con Postman y Charles Proxy. Testing de hardware: impresoras, tablets, placas Rockchip y Raspberry Pi.'],
    ['#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(6)', 'Demos para clientes y dirección. QA asistido por IA: análisis de criterios de aceptación, triaje de defectos, revisión de logs y generación de escenarios de prueba.'],
    ['#experience .timeline-item:nth-child(2) .timeline-role', 'QA Tester Senior'],
    ['#experience .timeline-item:nth-child(2) .timeline-desc', 'Responsable del testing manual y de regresión de productos de Bingo y Arcade en Android, iOS, Windows y macOS. Soporte a releases quincenales en cuatro plataformas.'],
    ['#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(1)', 'Amplia experiencia en QA de pagos: VISA, Mastercard, Amex, tarjetas prepago, PaysafeCard, SEPA y PayPal; depósitos, retiradas, conciliación y verificación en base de datos (comprobaciones SQL).'],
    ['#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(2)', 'Seguimiento de patrones de fraude, investigación de transacciones sospechosas y cumplimiento normativo en entorno de gambling regulado.'],
    ['#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(3)', 'Validación de APIs con Postman, documentación de incidencias y pruebas cross-platform en juego, promociones, navegación de cuenta y pagos.'],
    ['#experience .timeline-item:nth-child(3) .timeline-role', 'Asesor de Soporte al Cliente'],
    ['#experience .timeline-item:nth-child(3) .timeline-desc', 'Soporte de primera línea por teléfono, chat y correo, con foco en juego responsable y resolución efectiva. Administración de CRM y CMS, primer reporte de bugs y puente de feedback entre usuarios y QA. Esta etapa me dio una visión muy valiosa de patrones reales de usuario, priorización de incidencias e impacto de negocio de la calidad.'],

    ['#skills .section-label', 'Habilidades'],
    ['#skills .section-title', 'Con qué trabajo'],
    ['#skills .skill-category:nth-child(1) h3', 'Testing Manual'],
    ['#skills .skill-category:nth-child(1) li:nth-child(1)', 'Funcional y exploratorio'],
    ['#skills .skill-category:nth-child(1) li:nth-child(2)', 'Regresión y UAT'],
    ['#skills .skill-category:nth-child(1) li:nth-child(3)', 'Validación de releases'],
    ['#skills .skill-category:nth-child(1) li:nth-child(4)', 'Reporte de bugs y análisis de riesgo'],
    ['#skills .skill-category:nth-child(1) li:nth-child(5)', 'Testing de hardware y dispositivos'],
    ['#skills .skill-category:nth-child(2) h3', 'Automatización y desarrollo'],
    ['#skills .skill-category:nth-child(2) li:nth-child(2)', 'JavaScript (testing y automatización)'],
    ['#skills .skill-category:nth-child(3) h3', 'Herramientas'],
    ['#skills .skill-category:nth-child(3) li:nth-child(5)', 'SQL (consultas y validación de datos)'],
    ['#skills .skill-category:nth-child(3) li:nth-child(7)', 'Entorno de calidad ISO 9001'],
    ['#skills .skill-category:nth-child(4) h3', 'Plataformas'],
    ['#skills .skill-category:nth-child(4) li:nth-child(2)', 'Web (cross-browser)'],
    ['#skills .cert-card:nth-child(1) p:nth-of-type(2)', 'International Software Quality Institute · Emitido en ago. 2023'],
    ['#skills .cert-card:nth-child(2) .cert-title', 'HyperionDev – Bootcamp de Ingeniería de Software'],
    ['#skills .cert-card:nth-child(2) .cert-sub', 'Fundamentos de Python · 2023'],
    ['#skills .cert-card:nth-child(3) .cert-title', 'Grado en Traducción e Interpretación (Francés e Inglés)'],
    ['#skills .cert-card:nth-child(3) .cert-sub', 'Universidad de Córdoba · 2013–2017'],

    ['#projects .section-label', 'Proyectos'],
    ['#projects .section-title', 'Lo que he construido'],
    ['#projects .project-card:nth-child(1) p', 'Plataforma gratuita de exámenes de práctica para certificaciones de testing de software, alineada con los temarios ISTQB®. Simulacros cronometrados, modo práctica con feedback inmediato y seguimiento de progreso: sitio estático sin backend, desplegado en GitHub Pages.'],
    ['#projects .project-card:nth-child(2) h3', 'Automatización con Playwright'],
    ['#projects .project-card:nth-child(2) p', 'Construyendo mi portfolio de automatización, enfocado en escenarios E2E de apps iOS/Android y recorridos críticos de usuarios en web con Playwright.'],

    ['#contact .section-label', 'Contacto'],
    ['#contact .section-title', 'Conectemos'],
    ['#contact .section-sub', 'Abierto a posiciones remotas, equipos internacionales y retos interesantes de QA. La mejor forma de contactarme es por LinkedIn.'],
  ];

  replacements.forEach(([selector, text]) => setText(selector, text));

  const cvLink = document.querySelector('.hero-cta a:nth-child(3)');
  if (cvLink) cvLink.setAttribute('href', 'assets/Carlos-QA-CV-es.pdf');

  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.setAttribute('aria-label', 'Mostrar menú');

  document.querySelectorAll('.project-store-link').forEach(link => {
    link.setAttribute('title', 'Visitar QAQEST');
  });

  const certLine = document.querySelector('#skills .cert-card:nth-child(1) p:nth-of-type(3)');
  if (certLine) {
    const link = certLine.querySelector('a');
    certLine.textContent = 'ID de credencial 23-CTFL-232229-06 · ';
    if (link) { link.textContent = 'Verificar credencial'; certLine.appendChild(link); }
  }

  const wipBadge = document.querySelector('.project-wip .wip-badge');
  if (wipBadge) {
    wipBadge.innerHTML = '<span class="wip-dot"></span> En progreso';
  }
}

function setupLanguageToggle(currentLanguage) {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
  toggle.setAttribute(
    'aria-label',
    currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a español'
  );

  toggle.addEventListener('click', () => {
    const nextLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.location.reload();
  });
}

const currentLanguage = getPreferredLanguage();
if (currentLanguage === 'es') {
  applySpanishLocalization();
}
setupLanguageToggle(currentLanguage);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  revealEls.forEach(el => el.classList.add('visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 90);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navItems.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.style.color = active ? 'var(--text-strong)' : '';
    });
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));
