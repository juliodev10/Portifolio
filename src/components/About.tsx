import React from 'react';
import { Terminal, Code2, CloudLightning, Cpu, CheckCircle2, FileCode2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/80 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wider uppercase font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Sobre Mim &amp; Filosofia de Trabalho</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Perfil pragmático, foco em negócios e engenharia mão na massa.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Embora esteja buscando ativamente meu{' '}
              <strong className="text-white font-semibold">primeiro estágio formal na área</strong>,
              já desenvolvo, hospedo e mantenho em produção sistemas completos para clientes reais,
              portais em WordPress, projetos de extensão universitária e soluções corporativas em CRM,
              unindo visão analítica de negócio, modelagem de dados e engenharia de software em
              ambientes Linux (Ubuntu) e Windows.
            </p>

            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-indigo-300 flex items-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Engenharia de Software Moderna Assistida por IA (Spec-Driven Development)
              </span>
              Trabalho guiado por documentações técnicas estruturadas (
              <code className="text-xs bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300 font-mono">
                PRD.md
              </code>
              ,{' '}
              <code className="text-xs bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300 font-mono">
                FSD.md
              </code>{' '}
              e{' '}
              <code className="text-xs bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300 font-mono">
                DECISOES_TECNICAS.md
              </code>
              ), potencializando velocidade de prototipação e entrega de arquiteturas limpas, seguras
              e testáveis.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 transition-all hover:border-slate-700">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    Do Banco de Dados à UI &amp; Deploy
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Criação de ponta a ponta: schema design, APIs seguras, painéis administrativos,
                    portais CMS e interfaces modernas responsivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 transition-all hover:border-sky-500/30">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                  <CloudLightning className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Ecossistema Salesforce</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Configuração de CRM, automações com Flow Builder, modelagem de dados, Apex
                    backend e componentes LWC.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 relative shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Objetivo Atual
              </span>
              <p className="text-sm font-semibold text-white leading-normal mb-4">
                &ldquo;Integrar uma equipe de tecnologia inovadora onde eu possa aplicar minha
                velocidade de aprendizado, consistência na entrega e agregar valor imediato como
                estagiário.&rdquo;
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Disponibilidade imediata para estágio</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Remoto, híbrido ou presencial</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Proatividade com sistemas em produção</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Pensamento analítico e foco em negócio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
