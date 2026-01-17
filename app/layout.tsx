import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Sumanth Medichetti | Senior Python Engineer | Backend & Data Analytics',
  description:
    'Senior Python Engineer specializing in backend development, data analytics, REST APIs, and scalable web applications.',
  keywords: [
    'Django',
    'Python',
    'Backend Developer',
    'Django REST Framework',
    'Full Stack Developer',
    'Web Developer',
  ],
  authors: [{ name: 'Sumanth Medichetti' }],
  creator: 'Sumanth Medichetti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.vercel.app',
    title: 'Sumanth Medichetti | Senior Python Engineer | Backend & Data Analytics',
    description:
      'Senior Python Engineer specializing in backend development, data analytics, REST APIs, and scalable web applications.',
    siteName: 'Django Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumanth Medichetti | Senior Python Engineer | Backend & Data Analytics',
    description:
      'Senior Python Engineer specializing in backend development, data analytics, REST APIs, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}