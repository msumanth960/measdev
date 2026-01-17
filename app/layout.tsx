import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senior Django & Python Developer | Portfolio',
  description:
    'Experienced Django & Python Developer specializing in backend development, REST APIs, and scalable web applications.',
  keywords: [
    'Django',
    'Python',
    'Backend Developer',
    'Django REST Framework',
    'Full Stack Developer',
    'Web Developer',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.vercel.app',
    title: 'Senior Django & Python Developer | Portfolio',
    description:
      'Experienced Django & Python Developer specializing in backend development, REST APIs, and scalable web applications.',
    siteName: 'Django Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Django & Python Developer | Portfolio',
    description:
      'Experienced Django & Python Developer specializing in backend development, REST APIs, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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