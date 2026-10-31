'use client';
import { useState } from 'react';
import { Swords } from 'lucide-react';
import { Avatar, Card } from './ui';

export default function ChallengeInvite() {
  const [state, setState] = useState('open'); // open | accepted | later
  if (state === 'later') return null;
  return (
    <Card dark className="p-4">
      <div className="flex items-center gap-3">
        <Avatar letter="ع" tone="soft" size="lg" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold">عمر يتحدّاكِ!</h2>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">جديد</span>
          </div>
          <p className="mt-0.5 text-[11px] text-white/60">تكوين كلمات · ٥ جولات · ٣ دقائق</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          disabled={state === 'accepted'}
          onClick={() => setState('accepted')}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-bold transition active:scale-[0.98] disabled:opacity-70"
        >
          <Swords size={16} /> {state === 'accepted' ? 'تم قبول التحدّي' : 'قبول التحدّي'}
        </button>
        <button
          type="button"
          onClick={() => setState('later')}
          className="w-28 rounded-xl border border-white/25 py-3 text-sm text-white/80 transition active:scale-[0.98]"
        >
          لاحقًا
        </button>
      </div>
    </Card>
  );
}
