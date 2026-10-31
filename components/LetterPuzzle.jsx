'use client';
import { useState } from 'react';
import { Check, Delete, Sparkles } from 'lucide-react';
import { Pill, cx } from './ui';

const POOL = ['ر', 'ة', 'م', 'ا', 'ه'];   // shuffled letters (UI demo only)
const ANSWER_LENGTH = POOL.length;

export default function LetterPuzzle() {
  const [picked, setPicked] = useState([]);      // indexes into POOL, in order of tapping
  const [sent, setSent] = useState(false);
  const full = picked.length === ANSWER_LENGTH;

  const add = (i) => { if (!sent && !picked.includes(i)) setPicked((p) => [...p, i]); };
  const removeAt = (pos) => { if (!sent) setPicked((p) => p.filter((_, k) => k !== pos)); };
  const clear = () => { setPicked([]); setSent(false); };

  return (
    <div className="rounded-3xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">كوّني الكلمة</h2>
          <p className="mt-1 text-[11px] text-slate-500">صفة تتقنينها بالتعلّم والممارسة</p>
        </div>
        <Pill tone="gold" icon={Sparkles}>٥٠ نقطة</Pill>
      </div>

      {/* answer slots */}
      <div className="mt-5 flex justify-center gap-2" dir="rtl">
        {Array.from({ length: ANSWER_LENGTH }).map((_, pos) => {
          const letter = picked[pos] !== undefined ? POOL[picked[pos]] : '';
          return (
            <button
              key={pos}
              type="button"
              disabled={!letter}
              onClick={() => removeAt(pos)}
              aria-label={letter ? `إزالة الحرف ${letter}` : 'خانة فارغة'}
              className={cx(
                'grid h-[58px] w-[52px] place-items-center rounded-xl border-2 text-3xl font-bold transition',
                letter ? 'border-brand/40 bg-brand-soft text-brand border-b-4 active:scale-95' : 'border-dashed border-line bg-slate-50'
              )}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* letter pool */}
      <div className="mt-4 flex justify-center gap-2.5">
        {POOL.map((l, i) => {
          const used = picked.includes(i);
          return (
            <button
              key={i}
              type="button"
              disabled={used}
              onClick={() => add(i)}
              className={cx(
                'grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-2xl font-bold text-slate-600 transition active:scale-90',
                used && 'opacity-30'
              )}
            >
              {l}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={!full || sent}
        onClick={() => setSent(true)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand py-3.5 font-bold text-white transition active:scale-[0.98] disabled:bg-slate-200 disabled:text-slate-400"
      >
        <Check size={18} /> {sent ? 'تم إرسال الكلمة' : 'إرسال الكلمة'}
      </button>

      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>٥ أحرف · بلا تلميحات في المواجهة</span>
        <button type="button" onClick={clear} className="flex items-center gap-1 transition active:scale-95">
          <Delete size={14} /> مسح
        </button>
      </div>
    </div>
  );
}
