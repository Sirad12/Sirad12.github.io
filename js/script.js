
(function() {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  // Traductions pour le site (FR / EN)
  var translations = {
    // Navigation
    "nav-about": { fr: "À propos", en: "About" },
    "nav-education": { fr: "Parcours", en: "Background" },
    "nav-projects": { fr: "Projets", en: "Projects" },
    "nav-stack": { fr: "Stack", en: "Stack" },
    "nav-autres": { fr: "Autres", en: "Beyond code" },
    "nav-contact": { fr: "Contact", en: "Contact" },

    // Hero
    "hero-role": {
      fr: "Future ingénieure IA · Dakar Institute of Technology",
      en: "Future AI engineer · Dakar Institute of Technology"
    },
    "hero-lede": {
      fr: "<strong>Des données brutes aux systèmes qui les rendent utiles.</strong><br>Pipelines, analyse, machine learning et projets concrets : je construis en apprenant, et j'apprends surtout en construisant.",
      en: "<strong>From raw data to the systems that put it to use.</strong><br>Pipelines, analysis, machine learning and real projects: I build by learning, and I mostly learn by building."
    },
    "cta-projects": { fr: "Voir mes projets", en: "See my projects" },
    "cta-cv": { fr: "Télécharger mon CV", en: "Download my CV" },

    // Stats
    "stat-projects": { fr: "PROJETS PUBLIÉS", en: "PUBLISHED PROJECTS" },
    "stat-tech": { fr: "TECHNOLOGIES", en: "TECHNOLOGIES" },
    "stat-langues": { fr: "LANGUES PARLÉES (EN/FR/WO)", en: "LANGUAGES SPOKEN (EN/FR/WO)" },

    // À propos
    "about-title": { fr: "À propos", en: "About" },
    "about-p1": {
      fr: "Je m'intéresse à la donnée dans ce qu'elle a de plus concret : ce qui se passe avant qu'elle devienne un graphique, un modèle ou une décision.",
      en: "I'm drawn to data at its most concrete: what happens before it becomes a chart, a model or a decision."
    },
    "about-p2": {
      fr: "Au fil de ma formation en Informatique, avec une spécialisation en Big Data, j'ai exploré différentes étapes de cette chaîne : collecte, traitement, pipelines, bases de données, analyse, visualisation et machine learning.",
      en: "Throughout my Computer Science degree, with a Big Data specialization, I've explored different stages of that chain: collection, processing, pipelines, databases, analysis, visualization and machine learning."
    },
    "about-p3": {
      fr: "Mes projets sont avant tout une façon d'apprendre en faisant. Une idée simple peut rapidement devenir un problème d'architecture, de données ou de code — et c'est souvent là que ça devient intéressant. J'aime comprendre comment les choses fonctionnent, chercher pourquoi elles ne fonctionnent plus, puis construire une solution qui tient réellement la route.",
      en: "My projects are, above all, a way of learning by doing. A simple idea can quickly turn into a question of architecture, data or code — and that's usually where it gets interesting. I like understanding how things work, figuring out why they stop working, then building something that actually holds up."
    },
    "about-sig": {
      fr: "— apprendre, construire, comprendre, recommencer.",
      en: "— learn, build, understand, start again."
    },

    // Parcours & Certifications
    "education-title": { fr: "Parcours &amp; certifications", en: "Background &amp; certifications" },
    "edu-status": { fr: "3ᵉ année · En cours", en: "3rd year · Current" },
    "edu-degree": { fr: "Licence Informatique — spécialisation Big Data", en: "Bachelor's, Computer Science — Big Data specialization" },
    "edu-school": {
      fr: "Dakar Institute of Technology (DIT). Une formation orientée pratique, avec des projets autour de la donnée, du développement, des bases de données, du machine learning et de l'architecture des systèmes.",
      en: "Dakar Institute of Technology (DIT). A hands-on program, with projects spanning data, software development, databases, machine learning and systems architecture."
    },
    "cert-subhead": { fr: "Certifications", en: "Certifications" },
    "cert-aws-title": { fr: "AWS Educate · 2025", en: "AWS Educate · 2025" },
    "cert-aws-desc": {
      fr: "Badges de formation autour du Cloud : Compute, Databases, Networking, Security, Serverless et Storage.",
      en: "Cloud training badges: Compute, Databases, Networking, Security, Serverless and Storage."
    },
    "cert-link": { fr: "Voir les badges ↗", en: "See the badges ↗" },

    // Filtres des projets
    "projects-title": { fr: "Projets sélectionnés", en: "Selected projects" },
    "filter-all": { fr: "Tous les projets", en: "All projects" },
    "filter-data-eng": { fr: "Data Engineering &amp; ELT", en: "Data Engineering &amp; ELT" },
    "filter-ai-rag": { fr: "IA &amp; RAG", en: "AI &amp; RAG" },
    "filter-systems": { fr: "Systèmes &amp; Microservices", en: "Systems &amp; Microservices" },
    "filter-analytics": { fr: "Data Analytics &amp; EDA", en: "Data Analytics &amp; EDA" },

    // Projet 1 : Mobile Money
    "p1-tag": { fr: "Data engineering · ELT", en: "Data engineering · ELT" },
    "p1-title": { fr: "Mobile Money Data Pipeline", en: "Mobile Money Data Pipeline" },
    "p1-desc": {
      fr: "Pipeline batch/ELT sur des transactions mobile money simulées (Orange Money, Wave) au Sénégal : génération de données réalistes, orchestration Airflow, transformations et tests de qualité dbt, entrepôt PostgreSQL, dashboard Metabase.",
      en: "Batch/ELT pipeline processing simulated mobile money transactions (Orange Money, Wave) in Senegal: realistic data generation, Airflow orchestration, dbt transformations & quality tests, PostgreSQL data warehouse, Metabase dashboard."
    },

    // Projet 2 : Bibliothèque
    "p2-tag": { fr: "Architecture · Microservices", en: "Architecture · Microservices" },
    "p2-title": { fr: "Plateforme de gestion de bibliothèque", en: "Library Management Platform" },
    "p2-desc": {
      fr: "Architecture microservices (frontend React, API Livres/Utilisateurs/Emprunts, PostgreSQL), orchestrée via Docker Compose avec intégration continue Jenkins.",
      en: "Microservices architecture (React frontend, Books/Users/Borrowing APIs, PostgreSQL), orchestrated via Docker Compose with Jenkins continuous integration."
    },

    // Projet 3 : Détection d'intrusion
    "p3-tag": { fr: "Streaming · Sécurité", en: "Streaming · Security" },
    "p3-title": { fr: "Détection d'intrusion en temps réel", en: "Real-Time Intrusion Detection" },
    "p3-desc": {
      fr: "Système de surveillance réseau permettant de détecter des activités suspectes et de générer des alertes en temps réel, sur un flux de données continu.",
      en: "Network monitoring system capable of detecting suspicious activities and triggering real-time alerts over a continuous data stream."
    },

    // Projet 4 : Chatbot RAG
    "p4-tag": { fr: "NLP · RAG", en: "NLP · RAG" },
    "p4-title": { fr: "Chatbot RAG — Bureau des Passeports du Sénégal", en: "RAG Chatbot — Senegal Passport Office" },
    "p4-desc": {
      fr: "Assistant conversationnel basé sur une architecture RAG répondant aux questions administratives sur les démarches de passeport : embeddings et génération via l'API Gemini, retrieval vectoriel avec ChromaDB, API FastAPI conteneurisée.",
      en: "Conversational assistant based on a RAG architecture answering administrative inquiries regarding passport procedures: embeddings and generation via Gemini API, vector retrieval with ChromaDB, containerized FastAPI backend."
    },

    // Projet 5 : Retail EDA
    "p5-tag": { fr: "Data cleaning · EDA", en: "Data cleaning · EDA" },
    "p5-title": { fr: "Nettoyage et analyse de données retail", en: "Retail Sales Cleaning & Analysis" },
    "p5-desc": {
      fr: "Nettoyage complet d'un dataset retail volontairement « sale » : déduction logique des valeurs manquantes par mapping et relations métier plutôt qu'imputation systématique, puis analyse exploratoire pour en extraire des insights business.",
      en: "Complete cleaning of an intentionally noisy retail dataset: domain-driven deductive imputation through relational mapping rather than naive filling, followed by exploratory analysis extracting business insights."
    },

    // Bannière GitHub
    "gh-banner-badge": { fr: "Open Source &amp; Exploration", en: "Open Source &amp; Exploration" },
    "gh-banner-title": { fr: "Envie d'explorer tous mes dépôts ?", en: "Want to explore all my repositories?" },
    "gh-banner-desc": {
      fr: "Découvrez l'ensemble de mes travaux, scripts utilitaires, pipelines et projets collaboratifs directement sur mon profil GitHub.",
      en: "Discover all my work, utility scripts, data pipelines, and collaborative experiments directly on my GitHub profile."
    },
    "gh-banner-cta": { fr: "Voir tout mon GitHub (@Sirad12) ↗", en: "View all on GitHub (@Sirad12) ↗" },

    // Stack technique
    "stack-title": { fr: "Stack technique", en: "Tech Stack" },

    // En dehors du code (Hobbies)
    "autres-title": { fr: "En dehors du code", en: "Beyond the code" },
    "autres-note": {
      fr: "Je passe aussi du temps à faire des choses qui n'ont absolument rien à voir avec une ligne de commande.",
      en: "I also spend time doing things that have absolutely nothing to do with a command line."
    },
    "hobby-cook": { fr: "Cuisiner", en: "Cooking" },
    "hobby-knit": { fr: "Tricoter", en: "Knitting" },
    "hobby-color": { fr: "Colorier", en: "Coloring" },
    "cook-hint": { fr: "Compose ton thiéboudienne : clique sur les ingrédients.", en: "Build your thieboudienne: click the ingredients." },
    "knit-hint": { fr: "Choisis une laine, puis clique sur l'écharpe pour tricoter un rang.", en: "Pick a yarn, then click the scarf to knit a row." },
    "color-hint": { fr: "Choisis une couleur, puis clique sur une zone du dessin pour la colorier.", en: "Pick a color, then click a part of the picture to color it." },
    "reset-cook": { fr: "Recommencer", en: "Start over" },
    "reset-knit": { fr: "Recommencer", en: "Start over" },
    "reset-color": { fr: "Effacer les couleurs", en: "Clear colors" },

    // Contact
    "contact-title": { fr: "Une idée, un projet ou simplement envie d'échanger ?", en: "An idea, a project, or just want to talk?" },
    "contact-p": {
      fr: "Je recherche actuellement un stage en Data / Big Data et reste ouverte aux projets, collaborations et discussions qui peuvent m'apprendre quelque chose de nouveau.",
      en: "I'm currently looking for a Data / Big Data internship, and I'm open to projects, collaborations and conversations that can teach me something new."
    },
    "cta-email": { fr: "Écrire un email", en: "Send an email" },
    "copy-email": { fr: "Copier l'email", en: "Copy email" },
    "toast-email-copied": { fr: "Adresse email copiée !", en: "Email address copied !" },

    // Footer
    "footer": { fr: "Dakar, Sénégal · Ndeye Sira Dia", en: "Dakar, Senegal · Ndeye Sira Dia" }
  };

  // Mon avatar
  var MASCOT = {
    greeting: {
      fr: "Bonjour !  Bienvenue sur mon portfolio.",
      en: "Hello!  Welcome to my portfolio."
    },
    click1: {
      fr: "Coucou ! Explore le site ",
      en: "Hi there! Feel free to explore "
    },
    click2: {
      fr: "J'adore concevoir des pipelines résilients avec Airflow & Kafka ! ",
      en: "I love building resilient pipelines with Airflow & Kafka! "
    },
    farewell: {
      fr: "Au revoir ! À bientôt ",
      en: "Goodbye! See you soon "
    }
  };

  // Sons légers (Web Audio API)
  var audioCtx = null;
  function playPop(freq, type) {
    if (reduced) return;
    try {
      if (!audioCtx) {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq || 520, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
  }

  // Langue (FR / EN)
  function getCurrentLang() {
    return root.getAttribute('data-lang') === 'en' ? 'en' : 'fr';
  }

  var langBtn = document.getElementById('lang-toggle');

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;
    if (langBtn) langBtn.textContent = lang === 'en' ? 'FR' : 'EN';

    // Mise à jour de tous les éléments possédant data-i18n
    Object.keys(translations).forEach(function(key) {
      var els = document.querySelectorAll('[data-i18n="' + key + '"]');
      els.forEach(function(el) {
        if (translations[key][lang]) {
          el.innerHTML = translations[key][lang];
        }
      });
    });

    if (typeof updateCook === 'function') updateCook();
    if (typeof updateKnit === 'function') updateKnit();
    if (typeof updateColor === 'function') updateColor();
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem('sira-lang'); } catch (e) {}
  applyLang(savedLang || 'fr');

  if (langBtn) {
    langBtn.addEventListener('click', function() {
      var next = root.getAttribute('data-lang') === 'en' ? 'fr' : 'en';
      applyLang(next);
      playPop(600, 'sine');
      try { localStorage.setItem('sira-lang', next); } catch (e) {}
    });
  }

  // Filtres interactifs des projets
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var filter = btn.getAttribute('data-filter');

      projectCards.forEach(function(card) {
        var category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      playPop(480, 'triangle');
    });
  });

  // Barre de progression au scroll
  var progress = document.getElementById('progress');
  function updateProgress() {
    if (!progress) return;
    var h = document.documentElement;
    var scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Hero Cursor Spotlight 
  var heroEl = document.getElementById('hero');
  function sizeGlow() {
    var statsEl = document.getElementById('stats');
    if (!statsEl || !heroEl) return;
    var h = statsEl.getBoundingClientRect().top - heroEl.getBoundingClientRect().top;
    heroEl.style.setProperty('--glow-h', h + 'px');
  }
  sizeGlow();
  window.addEventListener('load', sizeGlow);
  window.addEventListener('resize', sizeGlow);
  if ('ResizeObserver' in window && heroEl) {
    new ResizeObserver(sizeGlow).observe(heroEl);
  }

  if (!reduced && heroEl) {
    heroEl.addEventListener('mousemove', function(e) {
      var rect = heroEl.getBoundingClientRect();
      heroEl.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      heroEl.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  }

  // Compteur de stats
  var statEls = document.querySelectorAll('.stat .num');
var statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  statEls.forEach(function(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    
    if (reduced) { 
      el.textContent = target === 15 ? target + '+' : target; 
      return; 
    }

    var startTime = null, duration = 900;
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var current = Math.floor(p * target);

      // On ajoute le '+' uniquement pour la cible à 15
      el.textContent = target === 15 ? current + '+' : current;

      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target === 15 ? target + '+' : target;
      }
    }
    requestAnimationFrame(step);
  });
}

  var statsSection = document.getElementById('stats');
  if ('IntersectionObserver' in window && statsSection) {
    new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) animateStats();
      });
    }, { threshold: 0.4 }).observe(statsSection);
  } else {
    animateStats();
  }

  // Thème Sombre / Clair
  var themeBtn = document.getElementById('theme-toggle');
  function applyTheme(mode) {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeBtn) {
        themeBtn.textContent = '☀';
        themeBtn.setAttribute('aria-pressed', 'true');
      }
    } else {
      root.setAttribute('data-theme', 'light');
      if (themeBtn) {
        themeBtn.textContent = '☾';
        themeBtn.setAttribute('aria-pressed', 'false');
      }
    }
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem('sira-theme'); } catch (e) {}
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      playPop(next === 'dark' ? 380 : 700, 'sine');
      try { localStorage.setItem('sira-theme', next); } catch (e) {}
    });
  }

  // Confettis
  function burstConfetti() {
    var colors = ['#006989', '#C2622D', '#D99A2B', '#4FB6D6'];
    playPop(880, 'sine');
    for (var k = 0; k < 28; k++) {
      var el = document.createElement('div');
      el.className = 'confetti';
      el.style.left = (Math.random() * 100) + 'vw';
      el.style.background = colors[k % colors.length];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(el);
      var duration = 900 + Math.random() * 700;
      var drift = (Math.random() - 0.5) * 120;
      el.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate(' + drift + 'px, 100vh) rotate(' + (Math.random() * 480) + 'deg)', opacity: 0.9 }
      ], { duration: duration, easing: 'ease-in' });
      setTimeout((function(node) { return function() { node.remove(); }; })(el), duration + 50);
    }
  }

  // Mon avatar : Bulles de dialogue
  var avatarImg = document.getElementById('avatar-img');
  var heroBubble = document.getElementById('avatar-bubble-hero');
  var footerBubble = document.getElementById('avatar-bubble-footer');
  var footerEl = document.getElementById('site-footer');
  var hasBidden = false;

  function showBubble(el, text, autoHideMs) {
    if (!el) return;
    el.textContent = text;
    el.classList.add('show');
    if (autoHideMs) {
      setTimeout(function() { el.classList.remove('show'); }, autoHideMs);
    }
  }

  setTimeout(function() {
    if (heroBubble) {
      showBubble(heroBubble, MASCOT.greeting[getCurrentLang()], 4500);
    }
  }, 1600);

  var clickCount = 0, clickTimer = null;
  if (avatarImg) {
    avatarImg.addEventListener('click', function() {
      clickCount++;
      clearTimeout(clickTimer);
      clickTimer = setTimeout(function() { clickCount = 0; }, 600);

      if (clickCount === 3) {
        clickCount = 0;
        if (!reduced) burstConfetti();
        return;
      }

      var curLang = getCurrentLang();
      if (heroBubble.classList.contains('show')) {
        heroBubble.classList.remove('show');
      } else {
        var msg = clickCount === 2 ? MASCOT.click2[curLang] : MASCOT.click1[curLang];
        showBubble(heroBubble, msg, 3500);
        playPop(620, 'sine');
      }
    });
  }

  if ('IntersectionObserver' in window && footerEl && footerBubble) {
    new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !hasBidden) {
          hasBidden = true;
          showBubble(footerBubble, MASCOT.farewell[getCurrentLang()], 6000);
        }
      });
    }, { threshold: 0.3 }).observe(footerEl);
  }

  // Copie de l'email
  var copyEmailBtn = document.getElementById('copy-email-btn');
  var toastEl = document.getElementById('toast');
  var toastTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
      toastEl.classList.remove('show');
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function() {
      var email = 'siradia167@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function() {
          showToast(translations["toast-email-copied"][getCurrentLang()]);
          playPop(650, 'sine');
        }).catch(function() {
          showToast(email);
        });
      } else {
        showToast(email);
      }
    });
  }

  // Atelier hors-code (cuisiner / tricoter / dessiner)
  function lang() { return getCurrentLang(); }

  var ST = {
    cookEmpty: { fr: 'Le pot est vide… ajoute des ingrédients !', en: 'The pot is empty… add some ingredients!' },
    cookMissing: { fr: 'Il manque encore : ', en: 'Still missing: ' },
    cookDone: { fr: 'Thiéboudienne prêt ! 🎉 Bon appétit.', en: 'Thieboudienne is ready! 🎉 Enjoy.' },
    knitEmpty: { fr: 'Clique sur l\'écharpe pour tricoter le premier rang.', en: 'Click the scarf to knit the first row.' },
    knitRow: { fr: 'Rang ', en: 'Row ' },
    knitDone: { fr: 'Écharpe terminée ! 🧣', en: 'Scarf finished! 🧣' },
    colorEmpty: { fr: 'Clique sur une zone pour la colorier.', en: 'Click a part of the picture to color it.' },
    colorProgress: { fr: ' zones coloriées', en: ' areas colored' },
    colorDone: { fr: 'Quel chef-d\'œuvre ! 🎨', en: 'What a masterpiece! 🎨' }
  };

  // Onglets du studio
  var tabs = document.querySelectorAll('.studio-tab');
  var panels = {
    cook: document.getElementById('panel-cook'),
    knit: document.getElementById('panel-knit'),
    color: document.getElementById('panel-color')
  };

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      Object.keys(panels).forEach(function(k) {
        if (panels[k]) {
          panels[k].classList.toggle('is-active', k === tab.getAttribute('data-tab'));
        }
      });
    });
  });

  // Cuisiner
  var potContent = document.getElementById('pot-content');
  var cookStatus = document.getElementById('cook-status');
  var steamEl = document.querySelector('.steam');
  var ingBtns = document.querySelectorAll('#ingredients button');
  var used = {};

  function updateCook() {
    if (!cookStatus) return;
    var all = Array.prototype.map.call(ingBtns, function(b) { return b.getAttribute('data-ing'); });
    var missing = all.filter(function(i) { return !used[i]; });
    var count = all.length - missing.length;
    if (steamEl) steamEl.classList.toggle('on', count > 0);

    if (count === 0) {
      cookStatus.textContent = ST.cookEmpty[lang()];
    } else if (missing.length) {
      cookStatus.textContent = ST.cookMissing[lang()] + missing.join(' ');
    } else {
      cookStatus.textContent = ST.cookDone[lang()];
    }
  }

  ingBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var ing = btn.getAttribute('data-ing');
      var wasDone = Object.keys(used).length === ingBtns.length;
      used[ing] = true;
      btn.classList.add('used');

      if (potContent) {
        var item = document.createElement('span');
        item.className = 'pot-item';
        item.textContent = ing;
        item.style.left = (12 + Math.random() * 70) + '%';
        item.style.top = (18 + Math.random() * 42) + '%';
        potContent.appendChild(item);
        if (potContent.children.length > 22) {
          potContent.removeChild(potContent.firstChild);
        }
      }

      updateCook();
      if (!wasDone && Object.keys(used).length === ingBtns.length && !reduced) {
        burstConfetti();
      }
    });
  });

  var cookReset = document.getElementById('cook-reset');
  if (cookReset) {
    cookReset.addEventListener('click', function() {
      used = {};
      if (potContent) potContent.innerHTML = '';
      ingBtns.forEach(function(b) { b.classList.remove('used'); });
      updateCook();
    });
  }

  // Tricoter
  var scarf = document.getElementById('scarf');
  var knitStatus = document.getElementById('knit-status');
  var yarnBtns = document.querySelectorAll('#yarn-picker button');
  var yarn = 'var(--teal)', rows = 0, MAX_ROWS = 14;

  function updateKnit() {
    if (!knitStatus) return;
    if (rows === 0) {
      knitStatus.textContent = ST.knitEmpty[lang()];
    } else if (rows >= MAX_ROWS) {
      knitStatus.textContent = ST.knitDone[lang()];
    } else {
      knitStatus.textContent = ST.knitRow[lang()] + rows + ' / ' + MAX_ROWS;
    }
  }

  function knitRow() {
    if (rows >= MAX_ROWS || !scarf) return;
    var row = document.createElement('div');
    row.className = 'knit-row';
    for (var i = 0; i < 12; i++) {
      var st = document.createElement('span');
      st.className = 'stitch';
      st.style.setProperty('--y', yarn);
      row.appendChild(st);
    }
    scarf.appendChild(row);
    rows++;
    if (rows >= MAX_ROWS) {
      scarf.classList.add('done');
      if (!reduced) burstConfetti();
    }
    updateKnit();
  }

  if (scarf) {
    scarf.addEventListener('click', knitRow);
    scarf.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        knitRow();
      }
    });
  }

  yarnBtns.forEach(function(b) {
    b.addEventListener('click', function() {
      yarnBtns.forEach(function(x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
      yarn = b.getAttribute('data-yarn');
    });
  });

  var knitReset = document.getElementById('knit-reset');
  if (knitReset) {
    knitReset.addEventListener('click', function() {
      if (scarf) {
        scarf.innerHTML = '';
        scarf.classList.remove('done');
      }
      rows = 0;
      updateKnit();
    });
  }

  // Coloriage
  var regs = document.querySelectorAll('#coloring .reg');
  var colorStatus = document.getElementById('color-status');
  var swatchBtns = document.querySelectorAll('#swatches button');
  var fill = 'var(--teal)';

  function updateColor() {
    if (!colorStatus) return 0;
    var n = 0;
    regs.forEach(function(r) { if (r.style.fill) n++; });
    if (n === 0) {
      colorStatus.textContent = ST.colorEmpty[lang()];
    } else if (n < regs.length) {
      colorStatus.textContent = n + ' / ' + regs.length + ST.colorProgress[lang()];
    } else {
      colorStatus.textContent = ST.colorDone[lang()];
    }
    return n;
  }

  swatchBtns.forEach(function(b) {
    b.addEventListener('click', function() {
      swatchBtns.forEach(function(x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
      fill = b.getAttribute('data-fill');
    });
  });

  regs.forEach(function(r) {
    r.addEventListener('click', function() {
      var before = updateColor() === regs.length;
      r.style.fill = fill;
      r.classList.remove('pop');
      void r.getBoundingClientRect();
      r.classList.add('pop');
      var n = updateColor();
      if (!before && n === regs.length && !reduced) {
        burstConfetti();
      }
    });
  });

  var colorReset = document.getElementById('color-reset');
  if (colorReset) {
    colorReset.addEventListener('click', function() {
      regs.forEach(function(r) { r.style.fill = ''; });
      updateColor();
    });
  }

  // Initialisations
  updateCook();
  updateKnit();
  updateColor();

})();
