import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://juliodev10.vercel.app'),
  title: 'Júlio César | Desenvolvedor Full-Stack, WordPress & Administrador Salesforce',
  description:
    'Portfólio Profissional de Júlio César França Rodrigues - Estudante de Ciência da Computação, Desenvolvedor Full-Stack, WordPress, Mobile e Administrador Salesforce. Disponível para estágio.',
  keywords: [
    'Júlio César França Rodrigues',
    'Desenvolvedor Full-Stack',
    'Salesforce Administrator',
    'Salesforce Developer',
    'Apex',
    'LWC',
    'WordPress',
    'Laravel',
    'Next.js',
    'React',
    'Estágio Desenvolvimento de Software',
  ],
  authors: [{ name: 'Júlio César França Rodrigues', url: 'https://github.com/juliodev10' }],
  creator: 'Júlio César França Rodrigues',
  openGraph: {
    title: 'Júlio César | Desenvolvedor Full-Stack & Administrador Salesforce',
    description:
      'Portfólio de projetos reais em produção, arquiteturas escaláveis, ecossistema Salesforce e engenharia assistida por IA.',
    url: 'https://juliodev10.vercel.app',
    siteName: 'Júlio César Portfolio',
    images: [
      {
        url: '/screen.png',
        width: 1200,
        height: 630,
        alt: 'Portfólio Júlio César',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-[#030712] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden min-h-screen">
        {/* Background decorative light grids & ambient glow */}
        <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none z-0" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-glow-gradient pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-radial-sf pointer-events-none z-0" />

        {children}
      </body>
    </html>
  );
}
