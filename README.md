# 🚀 Portfólio Profissional — Júlio César França Rodrigues

> **Desenvolvedor Full-Stack, WordPress & Administrador Salesforce**  
> Focado em oportunidades de **Estágio em Desenvolvimento de Software / Full-Stack / Salesforce**.

---

## 🌟 Visão Geral do Projeto

Este projeto é o portfólio profissional oficial de **Júlio César França Rodrigues**, construído com **Next.js 14 (App Router)**, **TypeScript** e **Tailwind CSS**. A interface foi desenvolvida preservando 100% da identidade visual, estrutura de layout, paleta de cores e componentes glassmorphism prototipados no **Stitch** (pasta `DESIGN`), com dados reais de projetos em produção e métricas de impacto.

O projeto foi configurado com arquitetura estática (SSG) de altíssima performance, ideal para **Deploy Zero-Config na Vercel** no plano gratuito.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router & Static Site Generation - SSG)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS v3](https://tailwindcss.com/) com design system customizado (`glass-card`, `radial gradients`, paleta de cores `brand` e `salesforce`)
- **Ícones:** [Lucide React](https://lucide.dev/) + SVGs otimizados
- **Tipografia:** [Inter](https://fonts.google.com/specimen/Inter) e [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Hospedagem / CI/CD:** [Vercel](https://vercel.com/) (Zero-Config, auto-deploy via GitHub)

---

## 📂 Estrutura de Diretórios

```
├── DESIGN/                     # Protótipo visual original criado no Stitch
│   ├── code.html
│   └── screen.png
├── public/                     # Assets estáticos (imagens, preview)
│   └── screen.png
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globais, glassmorphism e scrollbar
│   │   ├── layout.tsx          # RootLayout, SEO, OpenGraph e Metadados
│   │   └── page.tsx            # Página principal integrada
│   └── components/
│       ├── Icons.tsx           # Componentes SVG otimizados (GitHub, LinkedIn)
│       ├── Navbar.tsx          # Header fixo com efeito glass, navegação e menu mobile
│       ├── Hero.tsx            # Hero section com badge de status, CTAs e métricas
│       ├── About.tsx           # Sobre mim, filosofia de trabalho e engenharia com IA
│       ├── Skills.tsx          # Stack tecnológica dividida em 4 camadas de arquitetura
│       ├── Projects.tsx        # 6 projetos reais com filtros por categoria e links ativos
│       ├── Education.tsx       # Timeline acadêmica, trilhas Trailhead e certificados
│       └── Contact.tsx         # Chamada para estágio, cópia interativa de e-mail e footer
├── next.config.mjs             # Configurações do Next.js (resiliente para Vercel)
├── tailwind.config.js          # Configuração de temas, cores e gradientes Stitch
├── tsconfig.json               # Configuração do TypeScript
└── package.json                # Dependências e scripts de execução
```

---

## 💼 Destaques Profissionais & Projetos em Produção

1. **Plataforma SaaS Multi-Casamento (Engenharia Moderna com IA):**
   - Arquitetura multi-tenant inspirada no Casar.com com Laravel 11, Filament v3, Livewire e MySQL 8.
   - Conduzido com metodologia **Spec-Driven Development** (`PRD.md`, `FSD.md` e `DECISOES_TECNICAS.md`).
2. **Portal Mensageiros Eternos & Sistema Oficina (Em Produção):**
   - Portal web, loja virtual em WordPress (`/loja_virtual/`) e aplicação em subdomínio (`/oficina/`) desenvolvidos em WordPress, PHP e MySQL com gestão completa de DNS, SSL e infraestrutura.
   - [mensageiroseternos.com](https://mensageiroseternos.com/) | [Loja Virtual (WordPress)](https://oficina.mensageiroseternos.com/loja_virtual/) | [oficina.mensageiroseternos.com/oficina/](https://oficina.mensageiroseternos.com/oficina/)
3. **Administração & Soluções CRM Salesforce (TravelCorp / Leitura Force):**
   - Modelagem de dados, regras de validação, segurança OWD/Perfis, Flow Builder e desenvolvimento Apex & LWC via Salesforce Trailhead.
4. **[Gula Lanches (Delivery & Gestão em Produção)](https://gulalanches.foodelivery.ia.br/gulalanches/):**
   - Sistema de delivery para o restaurante Gula Lanches com API oficial do WhatsApp, painel KDS em tempo real para cozinha e controle de caixa.
   - Aplicação em produção: [gulalanches.foodelivery.ia.br/gulalanches/](https://gulalanches.foodelivery.ia.br/gulalanches/)
5. **OdontoPro / DevControle (SaaS de Gestão em Nuvem):**
   - Aplicação web com Next.js, Auth.js v5, Prisma ORM, MongoDB Atlas e deploy na Vercel.
6. **Landing Page & Triagem Inteligente (Área da Saúde):**
   - Triagem mobile-first para consultório fonoaudiológico com conversão direcionada para WhatsApp.

---

## 💻 Como Rodar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/juliodev10/portifolio.git
cd portifolio
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000` no seu navegador.

### 4. Gerar build de produção

```bash
npm run build
npm run start
```

---

## 🌐 Deploy na Vercel (Passo a Passo)

Este projeto está pronto para deploy instantâneo na Vercel sem configurações complexas:

1. Suba o código para o seu repositório no GitHub:

   ```bash
   git add .
   git commit -m "feat: complete portfolio with Next.js 14, Tailwind CSS and Stitch design"
   git push origin main
   ```

2. Acesse [vercel.com](https://vercel.com/) e faça login com sua conta do GitHub.
3. Clique em **"Add New..."** -> **"Project"**.
4. Selecione o repositório `portifolio`.
5. A Vercel detectará automaticamente o framework como **Next.js**.
6. Clique em **"Deploy"**.
7. Pronto! Em poucos segundos o portfólio estará online com certificado SSL gratuito e CDN global.

---

## 📬 Contato

- **Nome:** Júlio César França Rodrigues
- **WhatsApp:** [(35) 99840-7525](https://wa.me/5535998407525)
- **GitHub:** [github.com/juliodev10](https://github.com/juliodev10)
- **Localização:** Pratápolis - MG (Disponível para estágio Remoto, Híbrido ou Presencial)
