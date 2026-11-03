'use client';
import { useState } from 'react';
import { ArrowLeft, Check, Lock, Route, Star } from 'lucide-react';
import { cx } from './ui';

// x / y are percentages of the map box (physical left / top)
const NODES = [
  { id: 1, num: '٠١', label: 'البدايات', state: 'done', x: 82, y: 15, name: 'البدايات', meta: '٥ ألغاز · ٦٠ ثانية', points: 60 },
  { id: 2, num: '٠٢', label: 'معنى وكلمة', state: 'done', x: 32, y: 30, name: 'معنى وكلمة', meta: '٦ ألغاز · ٧٠ ثانية', points: 80 },
  { id: 3, num: '٠٣', label: 'مرادفات', state: 'current', x: 66, y: 50, name: 'المعنى واحد', meta: '٦ ألغاز · ٩٠ ثانية', points: 100 },
  { id: 4, num: '٠٤', label: 'سباق الوقت', state: 'locked', x: 26, y: 82 },
  { id: 5, num: '٠٥', label: 'لغز الواحة', state: 'locked', x: 76, y: 88 },
];

function Node({ n, selected, onSelect }) {
  const locked = n.state === 'locked';
  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => onSelect(n.id)}
      aria-label={`${n.num} ${n.label}`}
      style={{ left: `${n.x}%`, top: `${n.y}%` }}
      className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 disabled:cursor-not-allowed"
    >
      <span className="relative grid place-items-center">
        {n.state === 'current' && <span className="absolute h-[88px] w-[88px] rounded-full bg-brand/10" />}
        <span
          className={cx(
            'relative grid place-items-center rounded-full transition active:scale-95',
            n.state === 'done' && 'h-[52px] w-[52px] bg-brand text-white ring-4 ring-white shadow-card',
            n.state === 'current' && 'h-14 w-14 bg-ink text-gold ring-4 ring-gold',
            locked && 'h-[52px] w-[52px] bg-slate-100 text-slate-400 ring-4 ring-white',
            selected && n.state === 'done' && 'ring-brand/30'
          )}
        >
          {n.state === 'done' && <Check size={22} strokeWidth={2.6} />}
          {n.state === 'current' && <Star size={24} strokeWidth={2} />}
          {locked && <Lock size={20} />}
        </span>
      </span>
      <span className={cx('whitespace-nowrap text-[13px] font-bold', locked ? 'text-slate-400' : 'text-ink')}>
        {n.num} {n.label}
      </span>
    </button>
  );
}

export default function ChallengeMap() {
  const [selectedId, setSelectedId] = useState(3);
  const selected = NODES.find((n) => n.id === selectedId);
  const isCurrent = selected.state === 'current';

  return (
    <div className="relative aspect-[350/415] w-full overflow-hidden rounded-3xl bg-brand-soft/60">
      <span className="absolute -right-16 -top-16 h-60 w-60 rounded-full border border-brand/10" />
      <span className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-brand/10" />
      <span className="absolute end-4 top-4 flex items-center gap-1.5 text-[11px] text-slate-400">
        <Route size={14} /> رحلتك المعرفية
      </span>

      <svg viewBox="0 0 350 415" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <path d="M287 62 C240 110 150 80 111 125 C130 155 200 135 231 207" stroke="#2F62F0" strokeWidth="3" strokeLinecap="round" />
        <path d="M231 207 C220 260 170 300 91 339 C140 345 200 345 267 367" stroke="#C5CDE2" strokeWidth="2.5" strokeDasharray="4 7" strokeLinecap="round" />
      </svg>

      {NODES.map((n) => (
        <Node key={n.id} n={n} selected={n.id === selectedId} onSelect={setSelectedId} />
      ))}

      <div
        key={selected.id}
        className="absolute start-[8.5%] top-[50%] w-[50%] rounded-2xl border border-line bg-white p-3.5 shadow-card"
      >
        <p className="text-[11px] font-bold text-brand">{isCurrent ? 'تحدّيك التالي' : 'أنجزتِه سابقًا'}</p>
        <p className="mt-1 text-lg font-bold leading-tight">{selected.name}</p>
        <p className="mb-3 mt-1 text-[11px] text-slate-500">{selected.meta}</p>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-[13px] font-bold text-white transition active:scale-[0.97]"
        >
          <ArrowLeft size={15} />
          {isCurrent ? `ابدئي · ${selected.points} نقطة` : 'أعيدي التحدّي'}
        </button>
      </div>
    </div>
  );
}
