'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  ArrowUpRight,
  Globe,
  ExternalLink,
  Cloud,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

type ProjectCategory = 'all' | 'saas' | 'wordpress' | 'salesforce' | 'mobile';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filterCategories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'saas', label: 'Full-Stack / SaaS' },
    { id: 'wordpress', label: 'WordPress & Web' },
    { id: 'salesforce', label: 'Salesforce CRM' },
    { id: 'mobile', label: 'Mobile & Front-end' },
  ];

  return (
    <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase font-semibold mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>Cases de Sucesso &amp; Aplicações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projetos em Destaque &amp; Soluções em Produção
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Soluções completas desenhadas para resolver dores reais de negócio, clientes locais,
            portais ativos na web e arquiteturas corporativas de CRM.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://github.com/juliodev10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors group"
          >
            <span>Ver todos no GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-800/80 pb-4">
        {filterCategories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as ProjectCategory)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${activeCategory === tab.id
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
              : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PROJETO 1: Plataforma SaaS Multi-Casamento */}
        {(activeCategory === 'all' || activeCategory === 'saas') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Arquitetura Multi-Tenant
                </span>
                <span className="text-xs font-mono text-slate-500">Full-Stack / SaaS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Plataforma SaaS Multi-Casamento (Engenharia Moderna com IA)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Plataforma SaaS multi-tenant inspirada no Casar.com para criação e gestão de sites de
                casamento, lista de presentes e confirmação de presença (RSVP). Desenvolvida
                seguindo práticas modernas de{' '}
                <strong className="text-white">
                  Engenharia Assistida por IA (Spec-Driven Development)
                </strong>
                , guiada por especificações técnicas completas (<code>PRD.md</code>,{' '}
                <code>FSD.md</code> e <code>DECISOES_TECNICAS.md</code>).
              </p>
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Problema Resolvido:
                </h4>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  Permite isolamento de tenancy de alta performance com backoffice administrativo
                  poderoso gerado via Filament v3 e formulários reativos sem recarregar a página com
                  Livewire.
                </p>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                  PHP 8.3
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300 font-semibold">
                  Laravel 11
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300">
                  Filament PHP v3
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-pink-300">
                  Livewire
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-300">
                  Tailwind CSS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                  MySQL 8
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                  AI-Assisted Engineering
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://julianaehenrique.social.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Acessar Plataforma</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>PRD &amp; FSD Documentados</span>
              </span>
            </div>
          </div>
        )}

        {/* PROJETO 2: Portal Mensageiros Eternos, Loja Virtual & Sistema Oficina (EM PRODUÇÃO) */}
        {(activeCategory === 'all' || activeCategory === 'wordpress') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-sky-500/30 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Em Produção - Portal, Loja Virtual &amp; Subdomínio
                </span>
                <span className="text-xs font-mono text-slate-500">WordPress &amp; Web</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Portal Mensageiros Eternos, Loja Virtual &amp; Sistema Oficina
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Desenvolvimento completo, estruturação de arquitetura web, administração de
                hospedagem, configuração de domínio principal, loja virtual em WordPress (
                <code className="text-xs bg-slate-900 px-1 py-0.5 rounded text-sky-300 font-mono">
                  /loja_virtual/
                </code>
                ) e aplicação dedicada em subdomínio (
                <code className="text-xs bg-slate-900 px-1 py-0.5 rounded text-sky-300 font-mono">
                  /oficina/
                </code>
                ). Projeto real em produção demonstrando domínio prático de WordPress e
                infraestrutura web.
              </p>
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Entrega de Infraestrutura &amp; CMS:
                </h4>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  Arquitetura web completa com roteamento de DNS, provisionamento de subdomínio
                  dedicado, SSL, painel de administração dinâmico e otimizações de performance para
                  conteúdo ao vivo.
                </p>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                  WordPress
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                  PHP
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                  MySQL
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  HTML5 / CSS3
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-teal-300">
                  Gestão de Hospedagem &amp; DNS
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://mensageiroseternos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Visitar Portal</span>
              </a>
              <a
                href="https://oficina.mensageiroseternos.com/loja_virtual/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Loja Virtual (WordPress)</span>
              </a>
              <a
                href="https://oficina.mensageiroseternos.com/oficina/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Acessar Oficina</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>No Ar</span>
              </span>
            </div>
          </div>
        )}

        {/* PROJETO 3: Soluções CRM Salesforce (CARD DESTAQUE LARGURA TOTAL) */}
        {(activeCategory === 'all' || activeCategory === 'salesforce') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-sky-500/40 relative flex flex-col justify-between lg:col-span-2 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" />
                  Salesforce CRM
                </span>
                <span className="text-xs font-mono text-sky-400 font-semibold">
                  TravelCorp / Leitura Force
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Administração &amp; Soluções CRM Salesforce
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Atuação prática como Administrador e Desenvolvedor Salesforce na arquitetura e
                configuração de ambientes corporativos via Trailhead. Implementação de modelagem de
                dados (objetos e campos customizados), regras de validação, controle de segurança,
                automação avançada de processos com <strong className="text-sky-300">Flow Builder</strong>{' '}
                e componentes customizados com <strong className="text-sky-300">Apex</strong> e{' '}
                <strong className="text-sky-300">LWC</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">
                    Automação de Processos
                  </div>
                  <div className="text-xs text-slate-300">
                    Flows acionados por registro, scheduled flows e processos sem escrever código
                    quando possível (clicks first).
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">
                    Apex &amp; LWC Custom
                  </div>
                  <div className="text-xs text-slate-300">
                    Triggers com bulkification, classes com SOQL otimizado e componentes LWC
                    modernos para páginas de registro.
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">
                    Segurança &amp; Governança
                  </div>
                  <div className="text-xs text-slate-300">
                    Controle rigoroso OWD (Organization-Wide Defaults), Role Hierarchies, Sharing
                    Rules e Field-Level Security.
                  </div>
                </div>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                  Salesforce Admin
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
                  Flow Builder
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
                  Apex
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300">
                  LWC
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  SOQL
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  Lightning App Builder
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://trailhead.salesforce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver Trilha Trailhead</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Configuração Homologada</span>
              </span>
            </div>
          </div>
        )}

        {/* PROJETO 4: Gula Lanches */}
        {(activeCategory === 'all' || activeCategory === 'saas' || activeCategory === 'mobile') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Em Produção - Cliente Real
                </span>
                <span className="text-xs font-mono text-slate-500">Full-Stack / Mobile</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Gula Lanches</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Solução completa desenvolvida para restaurante real (Gula Lanches), contando com
                cardápio digital e pedidos integrados à API do WhatsApp, painel KDS para cozinha,
                rastreamento em tempo real e controle de fluxo de caixa.
              </p>
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Problema Resolvido:
                </h4>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  Eliminou erros manuais de anotação de comandas, reduziu em 35% o tempo de fila na
                  cozinha e centralizou o canal de vendas digital sem taxas abusivas de marketplaces.
                </p>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                  CodeIgniter 4
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  PHP 8.3
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  Node.js
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-300">
                  Next.js
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                  React Native (Expo)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                  MySQL
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://gulalanches.foodelivery.ia.br/gulalanches/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Acessar Cardápio Online</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Full-Stack &amp; Mobile</span>
              </span>
            </div>
          </div>
        )}

        {/* PROJETO 5: OdontoPro / DevControle */}
        {(activeCategory === 'all' || activeCategory === 'saas') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  SaaS de Gestão em Nuvem
                </span>
                <span className="text-xs font-mono text-slate-500">Full-Stack / SaaS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">OdontoPro / DevControle</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Aplicação web full-stack para gerenciamento de clínicas e controle operacional, com
                autenticação segura, ORM moderno e banco de dados distribuído em nuvem.
              </p>
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Problema Resolvido:
                </h4>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  Centralização de agendamentos e prontuários com autenticação moderna Server-Side e
                  banco em nuvem de alta disponibilidade.
                </p>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-300">
                  Next.js
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
                  Auth.js (NextAuth v5)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-300">
                  Prisma ORM
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-green-300">
                  MongoDB Atlas
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  Vercel
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://devcontrole-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Acessar Plataforma</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>SaaS em Nuvem</span>
              </span>
            </div>
          </div>
        )}

        {/* PROJETO 6: Landing Page & Triagem Inteligente */}
        {(activeCategory === 'all' || activeCategory === 'mobile') && (
          <div className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Alta Conversão Mobile-First
                </span>
                <span className="text-xs font-mono text-slate-500">Front-end / Extensão</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Landing Page &amp; Triagem Inteligente (Área da Saúde)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Aplicação web mobile-first desenvolvida para consultório de fonoaudiologia,
                otimizando a captação de pacientes locais através de uma triagem interativa
                direcionada automaticamente ao WhatsApp.
              </p>
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Impacto Mensurado:
                </h4>
                <p className="text-xs text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                  Experiência de triagem sem atrito que qualifica o lead antes do primeiro contato
                  profissional, gerando leads já prontos para atendimento.
                </p>
              </div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-orange-400">
                  HTML5
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
                  Tailwind CSS
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-yellow-300">
                  JavaScript
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800">
              <a
                href="https://fgajuliana.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Acessar Landing Page</span>
              </a>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 ml-auto">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>PageSpeed 98+</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
