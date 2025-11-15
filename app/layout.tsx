import type { Metadata, Viewport } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Typewriter Notes',
  description: 'Minimalist black-and-white notes in a typewriter voice.',
  metadataBase: new URL('https://agentic-40453990.vercel.app'),
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/" className="header-title">
            Typewriter Notes
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/punpun">Goodnight Punpun</Link>
            <Link href="/punpun/overview">Overview</Link>
            <Link href="/punpun/characters">Characters</Link>
            <Link href="/punpun/themes">Themes</Link>
            <Link href="/punpun/symbolism">Symbolism</Link>
            <Link href="/punpun/structure">Structure</Link>
            <Link href="/punpun/reading-guide">Reading Guide</Link>
          </nav>
          <hr />
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          <p className="muted">Typed in black, on white. No frills.</p>
        </footer>
      </body>
    </html>
  );
}
