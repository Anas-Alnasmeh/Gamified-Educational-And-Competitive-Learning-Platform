'use client';
import { useState } from 'react';
import { Avatar, cx } from './ui';

const ROWS = [
  { rank: '١', name: 'ليان أحمد', letter: 'ل', status: 'في مواجهة الآن', dot: 'ok', points: '١٬٣١٠' },
  { rank: '٢', name: 'نورة العلي', letter: 'ن', status: 'أنتِ · صعود مركزين', dot: 'ok', points: '١٬٢٤٠', me: true },
  { rank: '٣', name: 'سارة محمد', letter: 'س', status: 'متصلة الآن', dot: 'ok', points: '١٬١٦٠' },
  { rank: '٤', name: 'عمر خالد', letter: 'ع', status: 'متصل الآن', dot: 'ok', points: '١٬٠٨٠' },
  { rank: '٥', name: 'خالد حسن', letter: 'خ', status: 'آخر ظهور منذ ساعة', dot: 'off', points: '٩٨٠' },
];

export default function Leaderboard() {
  const [tab, setTab] = useState('friends');
  return (
    <>
      <div role="tablist" className="mb-4 flex rounded-2xl bg-slate-200/70 p-1">
        {[['friends', 'الأصدقاء'], ['all', 'الجميع']].map(([id, label]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cx(
              'flex-1 rounded-xl py-2.5 text-sm transition',
              tab === id ? 'bg-white font-bold text-brand shadow-card' : 'text-slate-500'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
        {ROWS.map((r) => (
          <li key={r.rank} className={cx('flex items-center gap-3 px-4 py-3', r.me && 'bg-brand-soft')}>
            <span className={cx('w-5 text-center font-bold', r.rank === '١' ? 'text-gold-deep' : 'text-slate-400')}>{r.rank}</span>
            <span className="relative">
              <Avatar letter={r.letter} tone={r.me ? 'solid' : 'soft'} />
              <span className={cx('absolute bottom-0 end-0 h-2.5 w-2.5 rounded-full ring-2 ring-white', r.dot === 'ok' ? 'bg-ok' : 'bg-slate-300')} />
            </span>
            <div className="flex-1">
              <p className="font-bold">{r.name}</p>
              <p className={cx('text-[11px]', r.dot === 'ok' ? 'text-ok' : 'text-slate-400')}>{r.status}</p>
            </div>
            <div className="text-center">
              <p className={cx('font-bold', r.me ? 'text-brand' : 'text-gold-deep')}>{r.points}</p>
              <p className="text-[10px] text-slate-400">نقطة</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
