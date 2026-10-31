'use client';
import { useState } from 'react';
import { Flame, Handshake, ThumbsUp } from 'lucide-react';
import { cx } from './ui';

const ITEMS = [
  { id: 'go', label: 'هيا نورة!', icon: Flame },
  { id: 'nice', label: 'أحسنتِ!', icon: ThumbsUp },
  { id: 'gg', label: 'منافسة رائعة', icon: Handshake },
];

export default function Reactions() {
  const [active, setActive] = useState(null);
  return (
    <div className="flex gap-2">
      {ITEMS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          aria-pressed={active === id}
          onClick={() => setActive(active === id ? null : id)}
          className={cx(
            'flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-bold transition active:scale-95',
            active === id ? 'border-brand bg-brand-soft text-brand' : 'border-line bg-white'
          )}
        >
          <Icon size={15} /> {label}
        </button>
      ))}
    </div>
  );
}
