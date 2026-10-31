'use client';
import { useState } from 'react';
import { BookmarkCheck, BookmarkPlus } from 'lucide-react';
import { cx } from './ui';

export default function WordOfDay() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex gap-3 rounded-3xl bg-brand-soft p-5">
      <button
        type="button"
        aria-pressed={saved}
        aria-label="حفظ الكلمة"
        onClick={() => setSaved((s) => !s)}
        className={cx(
          'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition active:scale-90',
          saved ? 'bg-brand text-white' : 'text-brand'
        )}
      >
        {saved ? <BookmarkCheck size={20} /> : <BookmarkPlus size={20} />}
      </button>
      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <span className="text-[28px] font-bold leading-none">أَلَق</span>
          <span className="text-[11px] text-brand">كلمة اليوم</span>
        </div>
        <p className="mt-2 text-[13px] leading-6">بريقٌ وإشراق. «في حديثِهِ أَلَقُ المعرفة».</p>
        <p className="mt-2 text-[11px] text-slate-500">
          {saved ? 'أُضيفت إلى كلماتك المحفوظة' : 'اسم · أضيفيها إلى كلماتك المحفوظة'}
        </p>
      </div>
    </div>
  );
}
