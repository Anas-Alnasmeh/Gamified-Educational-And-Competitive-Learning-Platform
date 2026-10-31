import './globals.css';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';

const font = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata = { title: 'مِداد', description: 'تعلّم العربية بالمنافسة والمعرفة' };
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#F6F8FD' };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={font.variable}>
      <body className="bg-slate-200 font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
