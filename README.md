# Leonardo Duailibi — Developer Portfolio

> Portfólio profissional moderno focado em **Backend, Infraestrutura & IA Aplicada**, desenvolvido com foco em alta performance, estética dev/cyberpunk refinada e acessibilidade.

🔗 **Preview ao vivo:** [https://laccioli.github.io/portfolio/](https://laccioli.github.io/portfolio/)

---

## 🚀 Tecnologias & Arquitetura

O projeto foi construído propositalmente com tecnologias nativas da web (**zero frameworks / zero dependencies**), garantindo carregamento instantâneo, renderização limpa e total controle sobre as interações:

- **HTML5 Semântico:** Estrutura acessível com tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), *skip-link* para navegação por teclado e marcação ARIA completa.
- **CSS3 Moderno:**
  - CSS Custom Properties (variáveis para cores, espaçamentos, tipografia e transições).
  - Estética **Glassmorphism** com `backdrop-filter: blur()`, bordas translúcidas e iluminação neon sutis.
  - Layouts fluidos combinando **CSS Grid** e **Flexbox** com `clamp()` e `min()` para responsividade mobile-first consistente.
  - Animações CSS com aceleração por hardware e suporte total a `prefers-reduced-motion`.
- **Vanilla JavaScript (ES6+):**
  - Módulos organizados e sem dependências externas.
  - Manipulação de eventos otimizada via `requestAnimationFrame` e `IntersectionObserver`.

---

## ✨ Funcionalidades em Destaque

1. **Efeito 3D Tilt Interativo nos Cards:**
   - Efeito tridimensional suave com cálculo dinâmico de rotação (`rotateX`, `rotateY`) e reflexo radial seguindo as coordenadas do cursor do mouse.
   - Desativação automática e graciosa em telas sensíveis ao toque (*touch devices*) e quando o usuário prefere redução de movimento.

2. **Tradução Dinâmica Client-Side (PT-BR / EN):**
   - Sistema de internacionalização (i18n) em tempo real com dicionário em `js/translations.js`.
   - Alternância fluida sem recarregar a página, cobrindo textos, blocos HTML com tags semânticas e atributos (`aria-label`, `title`, `alt`).
   - Detecção automática da preferência de idioma do navegador do visitante (`navigator.language`) e persistência da escolha do usuário no `localStorage`.

3. **Filtro de Projetos em Tempo Real:**
   - Na página dedicada `projetos.html`, os projetos podem ser filtrados instantaneamente por categorias (*Python*, *FastAPI*, *IA / Gemini*, *Infra & Redes*, *Docker*, *CLI / Web*).
   - Animação de entrada e saída com contador numérico dinâmico e suporte a *empty state*.

4. **Botão de Download de Currículo Otimizado:**
   - Link direto e relativo apontando para `./assets/docs/cv.pdf` com download forçado através do atributo `download="Leonardo_Duailibi_CV.pdf"`.

5. **Ação Rápida de Copiar E-mail:**
   - Botão interativo no rodapé que copia o endereço de contato para a área de transferência usando a API moderna `navigator.clipboard` (com fallback para `execCommand`) e feedback visual via *toast*.

6. **Carrossel Marquee Infinito de Tecnologias:**
   - Faixa infinita de ícones da stack com SVG carregados dinamicamente via CDN com cache em memória e fallback textual caso a conexão oscile.

---

## 📁 Estrutura do Projeto

```text
portfolio/
├── assets/
│   ├── docs/
│   │   └── cv.pdf             # Currículo em formato PDF
│   └── img/
│       ├── foto.jpg           # Foto de perfil utilizada na seção Sobre
│       └── foto.jpeg          # Cópia compatível de alta resolução
├── css/
│   └── style.css              # Estilos globais, componentes, glassmorphism e temas
├── js/
│   ├── script.js              # Lógica interativa (3D tilt, filtros, copy, observers)
│   └── translations.js        # Dicionário completo de traduções (PT / EN)
├── index.html                 # Página principal (Hero, Stack, Projetos em destaque, Sobre, Contato)
├── projetos.html              # Galeria completa de projetos com filtros dinâmicos
└── README.md                  # Documentação do projeto
```

---

## 🛠️ Como Executar Localmente

Como o projeto é estático e livre de dependências de build, qualquer servidor HTTP local funciona perfeitamente:

### Opção 1: Com Python
```bash
# Na raiz do projeto:
python -m http.server 8000
```
Em seguida, acesse no navegador: `http://localhost:8000`

### Opção 2: Com Node.js (`npx serve`)
```bash
npx serve .
```

### Opção 3: Com extensão do VS Code
Utilize a extensão **Live Server** e clique em *"Go Live"* no canto inferior direito.

---

## 🌐 Deploy no GitHub Pages

O projeto foi configurado com **caminhos estritamente relativos (`./...`)**, garantindo compatibilidade tanto em domínios customizados quanto em subpastas de repositórios do GitHub Pages (`https://laccioli.github.io/portfolio/`).

Para fazer o deploy:
1. Envie os arquivos para a branch principal (`main`) do repositório no GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio pronto para deploy no GitHub Pages"
   git push origin main
   ```
2. No repositório no GitHub, acesse **Settings** > **Pages**.
3. Em **Build and deployment**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde a publicação automática.

---

## 👤 Autor

**Leonardo Duailibi**
- GitHub: [@laccioli](https://github.com/laccioli)
- LinkedIn: [in/leonardoduailibi](https://www.linkedin.com/in/leonardoduailibi)
- E-mail: [leonardoduailibi@gmail.com](mailto:leonardoduailibi@gmail.com)
