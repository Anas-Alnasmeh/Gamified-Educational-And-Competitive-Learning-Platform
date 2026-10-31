import { BookOpen, Bookmark, ChevronLeft, Feather, Flame, Pencil, Shield, SlidersHorizontal, Swords, Target, Trophy } from 'lucide-react';
import { Avatar, Card, PageHeader, Pill, ProgressBar, SectionTitle, cx } from '@/components/ui';

const STATS = [
  { icon: BookOpen, value: '١٢٨', label: 'كلمة تعلّمتِها' },
  { icon: Trophy, value: '٢٤', label: 'انتصارًا' },
  { icon: Target, value: '٨٦٪', label: 'دقّة الإجابات' },
];
const DAYS = [['س', 1], ['ح', 1], ['ن', 1], ['ث', 1], ['ر', 1], ['خ', 1], ['ج', 'today']];
const BADGES = [
  { icon: Flame, label: 'سبعة أيام', tone: 'bg-gold-soft text-gold-deep' },
  { icon: Feather, label: 'صيّادة الكلمات', tone: 'bg-brand-soft text-brand' },
  { icon: Swords, label: 'أول انتصار', tone: 'bg-brand-soft text-brand' },
];

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        title="أثرُكِ يكبر."
        subtitle="كل إنجاز يستحق أن يُرى"
        action={
          <button type="button" aria-label="تعديل الملف" className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition active:scale-95">
            <Pencil size={20} />
          </button>
        }
      />

      <Card dark className="p-5">
        <div className="flex items-center gap-3">
          <Avatar letter="ن" tone="solid" size="lg" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">نورة العلي</h2>
            <p className="mt-0.5 text-[11px] text-white/70">مستكشفة المعاني</p>
            <p className="text-[11px] text-white/50">في مداد منذ سبتمبر ٢٠٢٦</p>
          </div>
          <div className="grid h-[68px] w-14 place-items-center rounded-xl border border-white/15 bg-white/5">
            <div className="text-center text-gold">
              <Shield size={20} className="mx-auto" />
              <span className="text-xl font-bold">٧</span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between text-[11px] text-white/70">
          <span>رحلتكِ إلى المستوى ٨</span>
          <span className="text-gold">١٬٢٤٠ / ١٬٥٠٠</span>
        </div>
        <ProgressBar value={83} fill="bg-gold" track="bg-white/20" className="mt-2" />
        <div className="mt-4 flex items-center justify-between">
          <Pill tone="dark" icon={Trophy}>المركز ١٢</Pill>
          <span className="text-[11px] text-white/60">٢٦٠ نقطة وتبلغين مستوى جديدًا</span>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {STATS.map(({ icon: Icon, value, label }) => (
          <Card key={label} className="flex flex-col items-center gap-1 py-4">
            <Icon size={18} className="text-brand" />
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-[10px] text-slate-500">{label}</span>
          </Card>
        ))}
      </div>

      <Card className="mt-4 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold">استمرارية تستحق الفخر</h2>
          <Pill tone="gold" icon={Flame}>٧ أيام متتالية</Pill>
        </div>
        <div className="flex justify-between">
          {DAYS.map(([d, s]) => (
            <div key={d} className="flex flex-col items-center gap-1.5">
              <span className={cx('grid h-9 w-9 place-items-center rounded-xl', s === 'today' ? 'bg-gold-soft text-gold-deep' : 'bg-brand-soft text-brand')}>
                {s === 'today' ? <Flame size={17} /> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
              </span>
              <span className="text-[10px] text-slate-500">{d}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6">
        <SectionTitle title="شاراتكِ تحكي رحلتكِ" action={<button className="text-xs font-bold text-brand">كل الشارات ٨٠</button>} />
        <div className="grid grid-cols-3 gap-3">
          {BADGES.map(({ icon: Icon, label, tone }) => (
            <Card key={label} className="flex flex-col items-center gap-2 px-2 py-4">
              <span className={cx('grid h-12 w-12 place-items-center rounded-2xl', tone)}><Icon size={22} /></span>
              <span className="text-center text-[11px] font-bold">{label}</span>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mt-4 divide-y divide-line">
        {[
          { icon: Bookmark, label: 'كلماتي المحفوظة', meta: '٣٢ كلمة' },
          { icon: SlidersHorizontal, label: 'الإعدادات والخصوصية' },
        ].map(({ icon: Icon, label, meta }) => (
          <button key={label} type="button" className="flex w-full items-center gap-3 px-5 py-4 text-start transition active:bg-slate-50">
            <Icon size={18} className="text-brand" />
            <span className="flex-1 text-sm font-bold">{label}</span>
            {meta && <span className="text-[11px] text-slate-400">{meta}</span>}
            <ChevronLeft size={16} className="text-slate-400" />
          </button>
        ))}
      </Card>
    </>
  );
}
