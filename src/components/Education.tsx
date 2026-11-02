import React from 'react';
import { GraduationCap, BookOpen, Cloud, Smartphone, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="formacao" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase font-semibold mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Jornada Acadêmica &amp; Formação</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Educação &amp; Certificações
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Fundamentação contínua em Ciência da Computação aliada a certificações industriais e
          prática aplicada.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
        {/* ITEM 1: Bacharelado */}
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-md shadow-indigo-500/20">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 transition-all hover:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Bacharelado em Ciência da Computação
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 w-fit">
                Previsão de Conclusão: Dezembro / 2028
              </span>
            </div>
            <div className="text-sm font-medium text-indigo-400 mb-3">
              Universidade Cruzeiro do Sul Virtual
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Formação superior em fundamentos de Ciência da Computação: algoritmos, estruturas de
              dados avançadas, complexidade, arquitetura de sistemas operacionais, redes de
              computadores, engenharia de software e bancos de dados relacionais e não-relacionais.
            </p>
          </div>
        </div>

        {/* ITEM 2: Salesforce Trails */}
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-md shadow-sky-400/20">
            <Cloud className="w-3.5 h-3.5" />
          </div>
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 transition-all hover:border-sky-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Trilhas Salesforce Administrator &amp; Developer
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20 w-fit">
                Salesforce Trailhead Hands-on
              </span>
            </div>
            <div className="text-sm font-medium text-sky-400 mb-3">Salesforce Trailhead</div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Domínio da plataforma de CRM corporativo: configuração avançada de segurança e
              compartilhamento (OWD, Permission Sets, Perfis), automações de processos críticos via
              Flow Builder, desenvolvimento backend customizado em Apex (Classes, Triggers, SOQL) e
              interfaces reativas com Lightning Web Components (LWC).
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Badges &amp; Projetos Práticos em Admin, Developer &amp; App Builder</span>
            </div>
          </div>
        </div>

        {/* ITEM 3: Android Studio Mobile */}
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-400/20">
            <Smartphone className="w-3.5 h-3.5" />
          </div>
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 transition-all hover:border-emerald-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Desenvolvendo Aplicações Mobile com Android Studio
              </h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
                Concluído em Fev / 2026
              </span>
            </div>
            <div className="text-sm font-medium text-emerald-400 mb-3">
              Fundação Bradesco Escola Virtual
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Construção de aplicações nativas, ciclo de vida de Activities e Fragments, layouts
              responsivos, integração com componentes de sistema, consumo de APIs e publicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
