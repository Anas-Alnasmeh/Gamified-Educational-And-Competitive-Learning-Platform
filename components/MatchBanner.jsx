'use client';
import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';
import { Avatar, Card, ProgressBar, toAr } from './ui';
import { cx } from './ui';

const TOTAL = 30;

export default function MatchBanner() {
  const [left, setLeft] = useState(24);
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : TOTAL)), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <Card dark className="p-5">
      <div className="flex items-center justify-between text-[11px] text-white/70">
        <span>الجولة ٣ من ٥</span>
        <div className="flex gap-1.5" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={cx('h-1 w-6 rounded-full', i < 2 ? 'bg-brand' : i === 2 ? 'bg-gold' : 'bg-white/20')} />
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-col items-center gap-1.5">
          <Avatar letter="ن" tone="solid" size="lg" />
          <span className="text-[11px] font-bold">نورة · أنتِ</span>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-3 text-4xl font-bold" dir="ltr">
            <span className="text-gold">{toAr(160)}</span>
            <span className="text-white/40">:</span>
            <span>{toAr(120)}</span>
          </div>
          <p className="mt-1 text-[11px] text-white/60">أنتِ في المقدّمة</p>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Avatar letter="ل" tone="soft" size="lg" />
          <span className="text-[11px] font-bold">ليان</span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <span className="flex items-center gap-1.5 text-lg font-bold text-gold" dir="ltr">
          <Timer size={16} /> {toAr(`00:${String(left).padStart(2, '0')}`)}
        </span>
        <ProgressBar value={(left / TOTAL) * 100} fill="bg-gold" track="bg-white/20" />
      </div>
    </Card>
  );
}
