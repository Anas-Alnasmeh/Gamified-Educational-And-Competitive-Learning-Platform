import { ArrowLeft, Check, Flame, Layers, Lock, Feather, Target } from 'lucide-react';
import { Card, PageHeader, Pill, ProgressBar, SectionTitle } from '@/components/ui';
import WordOfDay from '@/components/WordOfDay';

function Ring({ value, total }) {
  const r = 28, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 72 72" className="h-[60px] w-[60px] shrink-0 -rotate-90">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#E8EEFE" strokeWidth="6" />
      <circle
        cx="36" cy="36" r={r} fill="none" stroke="#2F62F0" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={c} strokeDashoffset={c * (1 - value / total)}
      />
    </svg>
  );
}

export default function LearnPage() {
  return (
    <>
      <PageHeader
        title="معرفة تبقى."
        subtitle="رحلتكِ اليوم تبدأ بكلمة جديدة"
        action={<Pill tone="gold" icon={Flame}>٧ أيام</Pill>}
      />

      {/* featured lesson */}
      <Card dark className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-[11px] text-white/60">مسارك · كلمات تصف العالم</p>
            <h2 className="mt-1 text-2xl font-bold">الفطنة والذكاء</h2>
            <p className="mt-1 text-[11px] text-white/60">الوحدة الثالثة · ٤ دقائق</p>
            <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">٨ من ١٢ كلمة</span>
          </div>
          <div className="relative h-20 w-20 shrink-0">
            <span className="absolute inset-0 rotate-6 rounded-2xl bg-ink-600" />
            <span className="absolute inset-0 -rotate-6 grid place-items-center rounded-2xl bg-gold-soft text-5xl font-bold text-gold-deep">ض</span>
          </div>
        </div>
        <ProgressBar value={66} fill="bg-gold" track="bg-white/20" className="mt-4" />
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand py-3.5 font-bold transition active:scale-[0.98]"
        >
          <ArrowLeft size={18} /> واصلي الدرس
        </button>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs">
          <span className="grid h-6 w-6 place-items-center rounded-full border border-white/30"><Check size={13} /></span>
          <span className="h-px w-6 bg-white/20" />
          <span className="grid h-6 w-6 place-items-center rounded-full border border-white/30"><Check size={13} /></span>
          <span className="h-px w-6 bg-white/20" />
          <span className="font-bold text-gold">٠٣ الوصف</span>
          <span className="h-px w-6 bg-white/20" />
          <span className="grid h-6 w-6 place-items-center rounded-full border border-white/30 text-white/50"><Lock size={12} /></span>
        </div>
      </Card>

      {/* daily habit */}
      <Card className="mt-4 flex items-center gap-3 p-4">
        <Target size={22} className="shrink-0 text-brand" />
        <div className="flex-1">
          <p className="font-bold">كلمتان وتصلين إلى هدفكِ</p>
          <p className="mt-0.5 text-[11px] text-slate-500">تعلّمي يوميًا قليلًا، أثرٌ كبير</p>
        </div>
        <div className="relative">
          <Ring value={3} total={5} />
          <span className="absolute inset-0 grid place-items-center text-[11px] font-bold text-brand">٣ من ٥</span>
        </div>
      </Card>

      {/* categories */}
      <div className="mt-6">
        <SectionTitle
          title="اتّسعي بالكلمات"
          action={<button className="text-xs font-bold text-brand">استكشاف الكل</button>}
        />
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Feather, glyph: 'ب', title: 'بلاغة التعبير', meta: '٢٤ كلمة · المستوى المتوسط', tone: 'bg-brand-soft text-brand' },
            { icon: Layers, glyph: 'أ', title: 'أصول الكلمات', meta: '١٨ كلمة · حكايات اللغة', tone: 'bg-gold-soft text-gold-deep' },
          ].map(({ icon: Icon, glyph, title, meta, tone }) => (
            <Card key={title} className="p-3">
              <button type="button" className="block w-full text-start transition active:scale-[0.98]">
                <div className={`relative flex h-20 items-center justify-between rounded-2xl px-4 ${tone}`}>
                  <span className="text-4xl font-bold">{glyph}</span>
                  <Icon size={22} className="opacity-70" />
                </div>
                <p className="mt-3 font-bold">{title}</p>
                <p className="mt-0.5 text-[10px] text-slate-500">{meta}</p>
              </button>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-4"><WordOfDay /></div>
    </>
  );
}
