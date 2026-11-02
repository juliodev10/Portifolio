'use client';

import React, { useState } from 'react';
import { Mail, Cloud, MapPin, Check, Copy, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('juliofranca490@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contato" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 text-center relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Contratação Imediata • Estágio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Buscando um estagiário com mentalidade de engenheiro, domínio de IA, desenvolvimento
            Full-Stack, WordPress e Salesforce? Vamos conversar!
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tenho facilidade para aprender rápido, bagagem técnica prática e capacidade de entregar
            valor desde o primeiro dia. Estou à disposição para conversar sobre desafios e
            oportunidades na sua empresa!
          </p>

          {/* Contact Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Email with copy action */}
            <div className="p-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-between gap-3 group">
              <a
                href="mailto:juliofranca490@gmail.com"
                className="flex flex-col items-center gap-2 w-full"
                title="Clique para enviar um e-mail"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-400">E-mail Direto</span>
                <span className="text-sm font-semibold text-white break-all hover:text-indigo-300 transition-colors">
                  juliofranca490@gmail.com
                </span>
              </a>
              <button
                onClick={copyEmail}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/30 border border-slate-700 text-slate-300 text-xs font-mono transition-all"
                title="Copiar endereço de e-mail"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/juliodev10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 text-white group-hover:scale-110 transition-transform flex items-center justify-center">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Repositórios de Código</span>
              <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                github.com/juliodev10
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Projetos &amp; Commits</span>
            </a>

            {/* Salesforce Trailhead */}
            <a
              href="https://trailhead.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Salesforce Trailhead</span>
              <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                Perfil no Trailhead
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Admin, Flows, Apex &amp; LWC</span>
            </a>

            {/* Localização & Modalidade */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 transition-all flex flex-col items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400">Localização &amp; Modelo</span>
              <span className="text-sm font-semibold text-white">Pratápolis - MG</span>
              <span className="text-[11px] text-emerald-400 font-mono">
                Remoto &bull; Híbrido &bull; Presencial
              </span>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
            <div>
              &copy; 2026 Júlio César França Rodrigues &bull; Construído com arquitetura moderna e
              foco em qualidade.
            </div>
            <div className="flex items-center gap-4">
              <span>Next.js &bull; Tailwind CSS &bull; WordPress &bull; Salesforce</span>
              <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Voltar ao início"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
