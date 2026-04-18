import type { Metadata } from 'next';
import { Geist, Geist_Mono, Amiri, Scheherazade_New, Noto_Naskh_Arabic, Noto_Kufi_Arabic, Lateef } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import SettingsSidebar from '@/components/shared/SettingsSidebar';
import { SettingsProvider } from '@/context/settings-context';

// Fonts-----------------------------

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});

const scheherazade = Scheherazade_New({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-scheherazade',
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-naskh',
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-kufi',
});

const lateef = Lateef({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-lateef',
});

// -----------------------------------------------------------

export const metadata: Metadata = {
  title: 'Quran Web App',
  description: 'A clean and customizable Quran reading experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="quran"
      className={`${geistSans.variable}
      ${geistMono.variable}
      ${amiri.variable}
      ${scheherazade.variable}
      ${notoNaskh.variable}
      ${notoKufi.variable}
      ${lateef.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SettingsProvider>
          <SettingsSidebar>
            <Navbar />
            <main className="flex-1">{children}</main>
          </SettingsSidebar>
        </SettingsProvider>
      </body>
    </html>
  );
}
