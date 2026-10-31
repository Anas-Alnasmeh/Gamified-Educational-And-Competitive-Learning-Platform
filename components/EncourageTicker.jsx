'use client';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Avatar, cx } from './ui';

export default function EncourageTicker() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold-soft p-4">
      <Avatar letter="س" tone="gold" />
      <div className="flex-1">
        <p className="text-[13px] font-bold">سارة تشجّعكِ: «أبدعتِ اليوم!»</p>
        <p className="mt-0.5 text-[11px] text-gold-deep">منذ ٥ دقائق · أرسلي لها تشجيعًا</p>
      </div>
      <button
        type="button"
        aria-pressed={liked}
        aria-label="إعجاب"
        onClick={() => setLiked((l) => !l)}
        className="transition active:scale-75"
      >
        <Heart size={22} className={cx(liked ? 'fill-rose-500 text-rose-500' : 'text-gold-deep')} />
      </button>
    </div>
  );
}
