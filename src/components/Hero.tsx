import React from 'react';
import { Layers, Mail, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center relative"
    >
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs sm:text-sm font-medium mb-8 badge-glow animate-pulse">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
        <span>Disponível para Estágio em Desenvolvimento &amp; Salesforce</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] mb-6">
        <span className="gradient-text">Olá, sou Júlio César.</span>
        <br />
        <span className="accent-gradient-text">
          Desenvolvedor Full-Stack &amp; Administrador Salesforce.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl text-base sm:text-xl text-slate-400 font-normal leading-relaxed mb-10">
        Estudante de Ciência da Computação (Conclusão: Dez/2028) com experiência prática na
        construção e deploy de sistemas reais de ponta a ponta — unindo{' '}
        <strong className="text-slate-200 font-semibold">
          Engenharia de Software moderna assistida por IA
        </strong>
        , plataformas SaaS, portais em WordPress, aplicativos mobile e automações no ecossistema
        Salesforce.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#projetos"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Layers className="w-5 h-5" />
          <span>Ver Projetos em Produção</span>
        </a>
        <a
          href="#contato"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Mail className="w-5 h-5" />
          <span>Entrar em Contato</span>
        </a>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-4xl w-full pt-10 border-t border-slate-800/80">
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 transition-all hover:border-slate-700">
          <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">9+</div>
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            Sistemas Reais &amp; Em Produção
          </div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 transition-all hover:border-indigo-500/40">
          <div className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400 mb-1">
            Full-Stack &amp; CMS
          </div>
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            PHP, Laravel, WordPress, Next &amp; Node
          </div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 transition-all hover:border-sky-500/40">
          <div className="text-2xl sm:text-3xl font-mono font-bold text-sky-400 mb-1">Trailhead</div>
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            Admin, Flows, Apex &amp; LWC
          </div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 transition-all hover:border-emerald-500/40">
          <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mb-1">
            Dez/2028
          </div>
          <div className="text-xs sm:text-sm text-slate-400 font-medium">
            Previsão Bacharelado em CC
          </div>
        </div>
      </div>
    </section>
  );
}
