import { CheckCircle2, Radio } from 'lucide-react';
import { PageHeader, Pill } from '@/components/ui';
import MatchBanner from '@/components/MatchBanner';
import LetterPuzzle from '@/components/LetterPuzzle';
import Reactions from '@/components/Reactions';

export default function CompetePage() {
  return (
    <>
      <PageHeader
        title="الكلمة لكِ."
        subtitle="مواجهة مباشرة · دوري الكلمة"
        action={<Pill tone="brand" icon={Radio}>مباشر</Pill>}
      />
      <MatchBanner />
      <div className="mt-4"><LetterPuzzle /></div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-ok-soft px-4 py-3 text-xs text-ok">
        <CheckCircle2 size={18} />
        <span className="flex-1">فزتِ بالجولة السابقة بكلمة «إلهام»</span>
        <span className="font-bold">+٦٠</span>
      </div>

      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="font-bold">الروح الرياضية أولًا</h2>
        <span className="text-[11px] text-slate-500">٣ أصدقاء يشجّعونك</span>
      </div>
      <Reactions />
    </>
  );
}
