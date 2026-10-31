import { Share2, UserPlus } from 'lucide-react';
import { PageHeader, SectionTitle } from '@/components/ui';
import ChallengeInvite from '@/components/ChallengeInvite';
import Leaderboard from '@/components/Leaderboard';
import EncourageTicker from '@/components/EncourageTicker';

export default function FriendsPage() {
  return (
    <>
      <PageHeader
        title="رفاق الكلمة."
        subtitle="١٢ صديقًا · ٤ متصلون الآن"
        action={
          <button type="button" aria-label="إضافة صديق" className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition active:scale-95">
            <UserPlus size={22} />
          </button>
        }
      />
      <ChallengeInvite />
      <div className="mt-6">
        <SectionTitle title="صدارة هذا الأسبوع" action={<span className="text-[11px] font-bold text-brand">ينتهي خلال يومين</span>} />
        <Leaderboard />
      </div>
      <div className="mt-4"><EncourageTicker /></div>
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-line bg-white py-3.5 text-sm font-bold text-brand transition active:scale-[0.98]"
      >
        <Share2 size={16} /> المعرفة أجمل مع الأصدقاء · ادعي صديقة
      </button>
    </>
  );
}
