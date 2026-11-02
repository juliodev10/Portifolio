import React from 'react';
import { Server, Layout, Cloud, Database, Cpu, Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase font-semibold mb-2">
          <Cpu className="w-4 h-4" />
          <span>Stack Tecnológica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Habilidades &amp; Ferramentas
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Competências estruturadas por camadas de arquitetura, unindo frameworks robustos, CMS
          profissional, mobilidade, IA e CRM corporativo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* CARD 1: BACK-END & CMS */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Back-end &amp; CMS</h3>
            <p className="text-xs text-slate-400 mb-4">
              Construção de APIs RESTful, regras de negócios, arquiteturas MVC escaláveis e portais
              CMS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                PHP 8.3
              </span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono text-indigo-300 font-semibold">
                Laravel 11
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                CodeIgniter 4
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                WordPress (Dev &amp; Gestão)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Node.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Express
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Python
              </span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
            Arquitetura MVC • Clean Code • Auth JWT/Tokens
          </div>
        </div>

        {/* CARD 2: FRONT-END & MOBILE */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Front-end &amp; Mobile</h3>
            <p className="text-xs text-slate-400 mb-4">
              Interfaces reativas, mobile-first, ricas em usabilidade e painéis administrativos.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                JavaScript ES6+
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                React Native
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Expo
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
                Bootstrap
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Livewire
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300">
                Filament PHP v3
              </span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
            SPA / SSR • Design Responsivo • UX Moderno
          </div>
        </div>

        {/* CARD 3: ECOSSISTEMA SALESFORCE */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border-sky-500/30">
          <div>
            <div className="w-12 h-12 rounded-xl bg-salesforce/20 border border-salesforce/40 text-salesforce-light flex items-center justify-center mb-5">
              <Cloud className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-white">Salesforce</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/40">
                Destaque
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Administração corporativa, automações declarativas e desenvolvimento Apex/LWC.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                Salesforce Admin
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                Apex Backend
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-950/60 border border-sky-500/30 text-xs font-mono text-sky-300 font-semibold">
                LWC (Components)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Flow Builder
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Objetos Customizados
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Perfis &amp; Permissões
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Reports &amp; Dashboards
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                SOQL / SOSL
              </span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
            SOQL/SOSL • Triggers • Trailhead Hands-on
          </div>
        </div>

        {/* CARD 4: ENGENHARIA COM IA, DEVOPS & DADOS */}
        <div className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">IA, DevOps &amp; Dados</h3>
            <p className="text-xs text-slate-400 mb-4">
              Engenharia com IA, persistência de dados, servidores Linux, infraestrutura e DNS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold">
                AI-Assisted Dev (Specs)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold">
                Hospedagem / DNS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Linux (Ubuntu)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Docker
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Apache / Nginx
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                MySQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                PostgreSQL
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                MongoDB
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Prisma ORM
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Git / GitHub
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                Figma
              </span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
            CI/CD • Nginx / Apache • Modelagem ER
          </div>
        </div>
      </div>
    </section>
  );
}
