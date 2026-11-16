/* =========================================================
   Dicionário de idiomas — PT / EN
   Uso no HTML:
     data-i18n="chave"            -> textContent
     data-i18n-html="chave"       -> innerHTML (permite <strong>, <br>, etc.)
     data-i18n-attr="attr:chave"  -> atributos (aria-label, title, alt...)
                                     múltiplos separados por ";"
   ========================================================= */
window.TRANSLATIONS = {
  pt: {
    /* ---------- Meta ---------- */
    "meta.title.index": "Leonardo Duailibi — Backend, Infra & IA Aplicada",
    "meta.title.projects": "Projetos — Leonardo Duailibi",
    "meta.description":
      "Portfólio de Leonardo Duailibi: backend, infraestrutura, APIs assíncronas e agentes de IA.",

    /* ---------- Navbar ---------- */
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.menu": "Abrir menu de navegação",
    "nav.lang": "Selecionar idioma",
    "nav.langPt": "Mudar idioma para Português",
    "nav.langEn": "Mudar idioma para Inglês",
    "nav.skip": "Pular para o conteúdo",

    /* ---------- Hero ---------- */
    "hero.tag": "Backend, Infra & Applied AI",
    "hero.title": "Leonardo Duailibi.",
    "hero.subtitle": "Sistemas resilientes, APIs assíncronas e agentes de IA.",
    "hero.desc":
      "Da infraestrutura crítica e visão computacional ao backend: APIs em Python, automação e IA aplicada a problemas reais.",
    "hero.ctaProjects": "Ver Projetos",
    "hero.ctaCv": "Baixar CV",
    "hero.status": "Disponível para oportunidades",
    "hero.codeComment": "// sobre mim, em poucas linhas",
    "hero.github": "Perfil no GitHub",
    "hero.linkedin": "Perfil no LinkedIn",
    "hero.scroll": "role para explorar",

    /* ---------- Stack ---------- */
    "stack.label": "stack & ferramentas",
    "stack.aria": "Tecnologias que utilizo",

    /* ---------- Projetos (index) ---------- */
    "projects.label": "02 — projetos em destaque",
    "projects.title": "Coisas que construí.",
    "projects.subtitle":
      "Ferramentas de backend, observabilidade e IA — projetadas para rodar em produção, não só em demo.",
    "projects.repo": "Ver repositório",
    "projects.viewAll": "Ver todos os projetos",

    /* ---------- Descrições de projetos ---------- */
    "p.opspulse.desc":
      "Agente de diagnóstico SRE e triagem de incidentes com IA. Coleta sinais, correlaciona logs e sugere causa raiz e próximos passos usando Gemini.",
    "p.disk.desc":
      "Agente multiplataforma e servidor central de telemetria de disco para Windows e Linux, com coleta periódica, API de ingestão e alertas de capacidade.",
    "p.odr.desc":
      "Sistema backend orientado a objetos e CLI para gerenciamento de fichas e campanhas de RPG, com autenticação de usuários e persistência.",
    "p.portfolio.desc":
      "Este portfólio: HTML5, CSS3 moderno e Vanilla JS, mobile-first, bilíngue (PT/EN), com cards 3D, filtros animados e zero frameworks.",
    "p.net.desc":
      "Scripts de automação de rede e monitoramento: varredura de hosts, checagem de latência/perda de pacotes e relatórios para o time de suporte.",
    "p.cam.desc":
      "Health-check de streams de câmeras (RTSP) para plataformas de visão computacional: detecta tela preta, congelamento e queda de conexão.",
    "p.preview.analyzing": "analisando logs...",
    "p.preview.rootcause": "causa raiz provável",

    /* ---------- Sobre ---------- */
    "about.label": "03 — sobre mim",
    "about.title": "Da sala de servidores ao backend.",
    "about.photoAlt": "Foto de Leonardo Duailibi",
    "about.p1":
      "Estudo <strong>Ciência da Computação na FIAP</strong> (prev. <strong>Dez/2029</strong>) e comecei no <strong>suporte de TI</strong>, resolvendo problemas reais de redes e máquinas.",
    "about.p2":
      "Na <strong>3P Tecnologia</strong>, cuido da infraestrutura de <strong>visão computacional e monitoramento</strong> da plataforma <strong>FLINT</strong>.",
    "about.p3":
      "Hoje foco em <strong>backend, automação e IA aplicada</strong>: APIs assíncronas e agentes que tiram trabalho repetitivo das pessoas.",
    "about.f1.k": "formação",
    "about.f1.v": "Ciência da Computação — FIAP (prev. Dez/2029)",
    "about.f2.k": "atuação",
    "about.f2.v": "Infra & Visão Computacional — 3P Tecnologia",
    "about.f3.k": "foco",
    "about.f3.v": "Backend · Automação · IA Aplicada",

    /* ---------- Footer ---------- */
    "footer.availability": "Aberto a oportunidades em backend, infra e IA aplicada.",
    "footer.cta": "Vamos conversar?",
    "footer.copy": "Copiar e-mail",
    "footer.copied": "Copiado!",
    "footer.copyError": "Não foi possível copiar",
    "footer.rights": "© 2026 Leonardo Duailibi",
    "footer.top": "Voltar ao topo ↑",

    /* ---------- Página de projetos ---------- */
    "page.label": "// todos os projetos",
    "page.title": "Projetos.",
    "page.subtitle":
      "Backend, infraestrutura, automação e IA. Filtre por tecnologia para explorar.",
    "page.filterAria": "Filtrar projetos por tecnologia",
    "filter.all": "Todos",
    "filter.python": "Python",
    "filter.fastapi": "FastAPI",
    "filter.ai": "IA / Gemini",
    "filter.infra": "Infra & Redes",
    "filter.docker": "Docker",
    "filter.cli": "CLI / Web",
    "page.count.one": "projeto",
    "page.count.many": "projetos",
    "page.empty": "Nenhum projeto nesta categoria (ainda).",
    "page.more": "Mais no GitHub",
    "page.back": "Voltar ao início"
  },

  en: {
    /* ---------- Meta ---------- */
    "meta.title.index": "Leonardo Duailibi — Backend, Infra & Applied AI",
    "meta.title.projects": "Projects — Leonardo Duailibi",
    "meta.description":
      "Leonardo Duailibi's portfolio: backend, infrastructure, async APIs and AI agents.",

    /* ---------- Navbar ---------- */
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.menu": "Open navigation menu",
    "nav.lang": "Select language",
    "nav.langPt": "Switch language to Portuguese",
    "nav.langEn": "Switch language to English",
    "nav.skip": "Skip to content",

    /* ---------- Hero ---------- */
    "hero.tag": "Backend, Infra & Applied AI",
    "hero.title": "Leonardo Duailibi.",
    "hero.subtitle": "Resilient systems, async APIs and AI agents.",
    "hero.desc":
      "From critical infrastructure and computer vision to the backend: Python APIs, automation and AI applied to real problems.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaCv": "Download CV",
    "hero.status": "Available for opportunities",
    "hero.codeComment": "// about me, in a few lines",
    "hero.github": "GitHub profile",
    "hero.linkedin": "LinkedIn profile",
    "hero.scroll": "scroll to explore",

    /* ---------- Stack ---------- */
    "stack.label": "stack & tools",
    "stack.aria": "Technologies I use",

    /* ---------- Projects (index) ---------- */
    "projects.label": "02 — featured projects",
    "projects.title": "Things I've built.",
    "projects.subtitle":
      "Backend, observability and AI tools — designed to run in production, not just in a demo.",
    "projects.repo": "View repository",
    "projects.viewAll": "View all projects",

    /* ---------- Project descriptions ---------- */
    "p.opspulse.desc":
      "AI-powered SRE diagnostics and incident triage agent. Collects signals, correlates logs and suggests root cause and next steps using Gemini.",
    "p.disk.desc":
      "Cross-platform agent and central disk telemetry server for Windows and Linux, with periodic collection, an ingestion API and capacity alerts.",
    "p.odr.desc":
      "Object-oriented backend system and CLI for managing RPG character sheets and campaigns, with user authentication and persistence.",
    "p.portfolio.desc":
      "This portfolio: HTML5, modern CSS3 and Vanilla JS, mobile-first, bilingual (PT/EN), with 3D cards, animated filters and zero frameworks.",
    "p.net.desc":
      "Network automation and monitoring scripts: host discovery, latency/packet-loss checks and reports for the support team.",
    "p.cam.desc":
      "Camera stream (RTSP) health-check for computer vision platforms: detects black screens, frozen frames and dropped connections.",
    "p.preview.analyzing": "analyzing logs...",
    "p.preview.rootcause": "probable root cause",

    /* ---------- About ---------- */
    "about.label": "03 — about me",
    "about.title": "From the server room to the backend.",
    "about.photoAlt": "Photo of Leonardo Duailibi",
    "about.p1":
      "I study <strong>Computer Science at FIAP</strong> (exp. <strong>Dec/2029</strong>) and started in <strong>IT support</strong>, solving real network and machine problems.",
    "about.p2":
      "At <strong>3P Tecnologia</strong>, I run the <strong>computer vision and monitoring</strong> infrastructure of the <strong>FLINT</strong> platform.",
    "about.p3":
      "Now I focus on <strong>backend, automation and applied AI</strong>: async APIs and agents that take repetitive work off people's hands.",
    "about.f1.k": "education",
    "about.f1.v": "Computer Science — FIAP (exp. Dec/2029)",
    "about.f2.k": "role",
    "about.f2.v": "Infra & Computer Vision — 3P Tecnologia",
    "about.f3.k": "focus",
    "about.f3.v": "Backend · Automation · Applied AI",

    /* ---------- Footer ---------- */
    "footer.availability": "Open to opportunities in backend, infra and applied AI.",
    "footer.cta": "Let's talk?",
    "footer.copy": "Copy e-mail",
    "footer.copied": "Copied!",
    "footer.copyError": "Couldn't copy",
    "footer.rights": "© 2026 Leonardo Duailibi",
    "footer.top": "Back to top ↑",

    /* ---------- Projects page ---------- */
    "page.label": "// all projects",
    "page.title": "Projects.",
    "page.subtitle":
      "Backend, infrastructure, automation and AI. Filter by technology to explore.",
    "page.filterAria": "Filter projects by technology",
    "filter.all": "All",
    "filter.python": "Python",
    "filter.fastapi": "FastAPI",
    "filter.ai": "AI / Gemini",
    "filter.infra": "Infra & Networks",
    "filter.docker": "Docker",
    "filter.cli": "CLI / Web",
    "page.count.one": "project",
    "page.count.many": "projects",
    "page.empty": "No projects in this category (yet).",
    "page.more": "More on GitHub",
    "page.back": "Back to home"
  }
};
