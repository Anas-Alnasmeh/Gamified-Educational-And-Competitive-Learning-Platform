'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Star, Trophy, User, Users } from 'lucide-react';
import { cx } from './ui';

// DOM order = right → left in RTL
const TABS = [
  { href: '/profile', label: 'حسابي', icon: User },
  { href: '/friends', label: 'الأصدقاء', icon: Users },
  { href: '/challenges', label: 'التحديات', icon: Star },
  { href: '/learn', label: 'تعلّم', icon: BookOpen },
  { href: '/compete', label: 'منافسة', icon: Trophy },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="التنقل الرئيسي"
      className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[430px] border-t border-line bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur"
    >
      <ul className="flex items-center justify-between">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cx(
                  'flex min-w-[68px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs transition active:scale-95',
                  active ? 'bg-brand-soft font-bold text-brand' : 'text-slate-500 hover:text-ink'
                )}
              >
                <Icon size={22} strokeWidth={active ? 2.3 : 1.8} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
