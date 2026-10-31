import { Flag, Gift } from 'lucide-react';
import { Card, PageHeader, Pill, ProgressBar } from '@/components/ui';
import ChallengeMap from '@/components/ChallengeMap';

export default function ChallengesPage() {
  return (
    <>
      <PageHeader
        title="خطوة نحو القمّة."
        subtitle="كل مرحلة تفتح أفقًا جديدًا"
        action={<Pill tone="brand" icon={Flag}>الفصل ١</Pill>}
      />

      <Card className="mb-4 p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">واحة المعاني</h2>
          <span className="text-sm font-bold text-brand">٢ من ٥</span>
        </div>
        <ProgressBar value={40} />
        <div className="mt-3 flex items-center justify-between text-[11px]">
          <span className="text-slate-500">مرحلتان مكتملتان · واصلي التألّق</span>
          <span className="font-bold text-gold-deep">١٨٠ نقطة مكتسبة</span>
        </div>
      </Card>

      <ChallengeMap />

      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gold/40 bg-gold-soft p-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/50 text-gold-deep">
          <Gift size={22} />
        </span>
        <div className="flex-1">
          <p className="font-bold">كنز الواحة ينتظرك</p>
          <p className="mt-0.5 text-[11px] text-gold-deep">٢٥٠ نقطة + شارة «مستكشفة»</p>
        </div>
        <span className="text-xs font-bold text-gold-deep">٣ مراحل</span>
      </div>

      <p className="mt-5 text-center text-[11px] text-slate-400">تُفتح كل مرحلة بعد إكمال المرحلة السابقة</p>
    </>
  );
}
