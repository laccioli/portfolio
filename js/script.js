/* =========================================================
   Leonardo Duailibi — Portfolio · Vanilla JS
   ========================================================= */
(() => {
  "use strict";

  const doc = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* =======================================================
     1. i18n — PT / EN
     ======================================================= */
  const STORAGE_KEY = "ld-portfolio-lang";
  const dict = window.TRANSLATIONS || { pt: {}, en: {} };
  let currentLang = "pt";

  const t = (key) => (dict[currentLang] && dict[currentLang][key]) ?? (dict.pt && dict.pt[key]) ?? "";

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch (_) {
      /* localStorage indisponível */
    }
    const nav = (navigator.language || "pt").toLowerCase();
    return nav.startsWith("pt") ? "pt" : "en";
  }

  function applyLang(lang) {
    if (!dict[lang]) return;
    currentLang = lang;

    $$("[data-i18n]").forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });

    $$("[data-i18n-html]").forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (val) el.innerHTML = val;
    });

    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const val = t(key);
        if (attr && val) el.setAttribute(attr, val);
      });
    });

    // <title> e meta description
    const titleKey = document.body.dataset.titleKey;
    if (titleKey && t(titleKey)) document.title = t(titleKey);
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && t("meta.description")) metaDesc.setAttribute("content", t("meta.description"));

    doc.lang = lang === "pt" ? "pt-BR" : "en";

    $$(".lang__btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  $$(".lang__btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  applyLang(getInitialLang());

  /* =======================================================
     2. Navbar — scroll state + menu mobile
     ======================================================= */
  const nav = $(".nav");
  const toggle = $(".nav__toggle");

  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove("is-open");
    toggle && toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    $$(".nav__mobile a").forEach((a) => a.addEventListener("click", closeMenu));

    document.addEventListener("click", (e) => {
      if (nav.classList.contains("is-open") && !nav.contains(e.target)) closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    window.matchMedia("(min-width: 820px)").addEventListener("change", (e) => {
      if (e.matches) closeMenu();
    });
  }

  /* Link ativo conforme a seção visível (index) */
  const sections = $$("main section[id]");
  const navLinks = $$("[data-nav]");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const setActive = (id) => {
      navLinks.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));
    };

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* =======================================================
     3. Reveal (fade-up) com IntersectionObserver
     ======================================================= */
  const revealEls = $$(".reveal");

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* =======================================================
     4. Ícones da stack — Simple Icons (CDN jsDelivr)
        Busca o SVG e injeta inline para herdar currentColor
        (cinza → verde no hover). Fallback por versão/slug.
     ======================================================= */
  const ICON_VERSIONS = ["15", "13", "12"];
  const iconCache = new Map();

  async function fetchIcon(slugs) {
    const key = slugs.join("|");
    if (!iconCache.has(key)) iconCache.set(key, fetchIconUncached(slugs));
    return iconCache.get(key);
  }

  async function fetchIconUncached(slugs) {
    for (const slug of slugs) {
      for (const v of ICON_VERSIONS) {
        const url = `https://cdn.jsdelivr.net/npm/simple-icons@${v}/icons/${slug}.svg`;
        try {
          const res = await fetch(url, { mode: "cors" });
          if (!res.ok) continue;
          const svg = await res.text();
          if (svg.includes("<svg")) return svg;
        } catch (_) {
          /* rede indisponível — tenta próxima */
        }
      }
    }
    return null;
  }

  function loadStackIcons() {
    const icons = $$(".stack__icon[data-icon]");
    if (!icons.length) return;

    icons.forEach(async (el) => {
      const slugs = el.dataset.icon.split("|");
      const svgText = await fetchIcon(slugs);
      if (!svgText) return; // mantém o fallback textual
      const tpl = document.createElement("template");
      tpl.innerHTML = svgText.trim();
      const svg = tpl.content.querySelector("svg");
      if (!svg) return;
      svg.removeAttribute("width");
      svg.removeAttribute("height");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      svg.querySelectorAll("title").forEach((n) => n.remove());
      el.replaceChildren(svg);
    });
  }

  // Marquee infinito: duplica a lista (a 2ª cópia é decorativa) para loop sem cortes
  const stackTrack = $(".stack__track");
  if (stackTrack && stackTrack.children.length === 1) {
    const clone = stackTrack.firstElementChild.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    $$("[tabindex]", clone).forEach((n) => {
      n.setAttribute("tabindex", "-1");
      n.removeAttribute("role");
      n.removeAttribute("aria-label");
    });
    stackTrack.appendChild(clone);
  }

  // Carrega quando a faixa estiver próxima da viewport (não bloqueia o first paint)
  const stack = $(".stack");
  if (stack) {
    if ("IntersectionObserver" in window) {
      const stackIO = new IntersectionObserver(
        (entries, obs) => {
          if (entries.some((e) => e.isIntersecting)) {
            loadStackIcons();
            obs.disconnect();
          }
        },
        { rootMargin: "300px 0px" }
      );
      stackIO.observe(stack);
    } else {
      loadStackIcons();
    }
  }

  /* =======================================================
     5. Cards 3D Tilt (desativado em touch / reduced-motion)
     ======================================================= */
  if (!isTouch && !prefersReducedMotion) {
    const MAX = 7; // graus

    $$(".card[data-tilt]").forEach((card) => {
      let raf = null;
      let rect = null;

      const update = (x, y) => {
        const px = (x - rect.left) / rect.width;
        const py = (y - rect.top) / rect.height;
        card.style.setProperty("--ry", `${(px - 0.5) * MAX * 2}deg`);
        card.style.setProperty("--rx", `${(0.5 - py) * MAX * 2}deg`);
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
      };

      card.addEventListener("pointerenter", () => {
        rect = card.getBoundingClientRect();
        card.classList.add("is-tilting");
      });

      card.addEventListener("pointermove", (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => update(e.clientX, e.clientY));
      });

      card.addEventListener("pointerleave", () => {
        if (raf) cancelAnimationFrame(raf);
        rect = null;
        card.classList.remove("is-tilting");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });

    window.addEventListener(
      "scroll",
      () => {
        // força recálculo do rect após scroll
        $$(".card.is-tilting").forEach((c) => c.dispatchEvent(new Event("pointerenter")));
      },
      { passive: true }
    );
  }

  /* =======================================================
     6. Copiar e-mail
     ======================================================= */
  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    if (!ok) throw new Error("copy failed");
  }

  $$(".copy-email").forEach((btn) => {
    let timer = null;
    const toast = $(".copy-email__toast", btn);

    btn.addEventListener("click", async () => {
      clearTimeout(timer);
      btn.classList.remove("is-copied", "is-error");
      try {
        await copyText(btn.dataset.email);
        toast.textContent = t("footer.copied");
        btn.classList.add("is-copied");
      } catch (_) {
        toast.textContent = t("footer.copyError");
        btn.classList.add("is-error");
      }
      timer = setTimeout(() => btn.classList.remove("is-copied", "is-error"), 1800);
    });
  });

  /* =======================================================
     7. Filtros (projetos.html)
     ======================================================= */
  const filterBtns = $$(".filter[data-filter]");
  const filterCards = $$(".card-wrap[data-tags]");
  const countEl = $("[data-count]");
  const countLabel = $("[data-count-label]");
  const emptyEl = $(".empty-state");
  let activeFilter = "all";

  function updateCount(n) {
    if (countEl) countEl.textContent = String(n).padStart(2, "0");
    if (countLabel) countLabel.textContent = t(n === 1 ? "page.count.one" : "page.count.many");
    if (emptyEl) emptyEl.hidden = n !== 0;
  }

  function applyFilter(filter) {
    activeFilter = filter;
    filterBtns.forEach((b) => {
      const on = b.dataset.filter === filter;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });

    let visible = 0;
    const DURATION = prefersReducedMotion ? 0 : 300;

    filterCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      const match = filter === "all" || tags.includes(filter);
      card.classList.add("is-filtering");
      clearTimeout(card._ft);

      if (match) {
        visible++;
        if (card.hidden) {
          card.hidden = false;
          card.classList.add("is-out");
          // força reflow para animar a entrada
          void card.offsetWidth;
        }
        card.classList.add("is-visible");
        requestAnimationFrame(() => card.classList.remove("is-out"));
      } else {
        card.classList.add("is-out");
        card._ft = setTimeout(() => {
          card.hidden = true;
        }, DURATION);
      }
    });

    updateCount(visible);
  }

  if (filterBtns.length) {
    filterBtns.forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));
    updateCount(filterCards.length);
    document.addEventListener("langchange", () => {
      const n = filterCards.filter((c) => !c.classList.contains("is-out")).length;
      updateCount(n);
    });
  }
})();
