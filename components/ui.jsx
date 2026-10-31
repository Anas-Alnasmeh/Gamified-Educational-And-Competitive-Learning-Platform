import { toAr } from '@/lib/ar';

export const cx = (...c) => c.filter(Boolean).join(' ');

export function Card({ dark = false, className = '', ...props }) {
  return (
    <div
      className={cx(
        'rounded-3xl',
        dark ? 'bg-ink text-white' : 'border border-line bg-white shadow-card',
        className
      )}
      {...props}
    />
  );
}

const PILL = {
  gold: 'bg-gold-soft text-gold-deep',
  brand: 'bg-brand-soft text-brand',
  ok: 'bg-ok-soft text-ok',
  dark: 'bg-white/10 text-white',
};
export function Pill({ tone = 'gold', icon: Icon, className = '', children }) {
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold', PILL[tone], className)}>
      {Icon && <Icon size={14} strokeWidth={2.2} />}
      {children}
    </span>
  );
}

export function ProgressBar({ value, fill = 'bg-brand', track = 'bg-slate-200', className = '' }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cx('h-2 w-full overflow-hidden rounded-full', track, className)}
    >
      <div className={cx('h-full rounded-full transition-all duration-500', fill)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <div className="mb-5 mt-6 flex items-start justify-between gap-3">
      <div>
        <h1 className="text-[28px] font-bold leading-tight">{title}</h1>
        <p className="mt-1 text-[13px] text-slate-500">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

export function SectionTitle({ title, action }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-lg font-bold">{title}</h2>
      {action}
    </div>
  );
}

const AV = { soft: 'bg-brand-soft text-brand', solid: 'bg-brand text-white', gold: 'bg-gold-soft text-gold-deep' };
const AV_SIZE = { sm: 'h-9 w-9 text-base', md: 'h-11 w-11 text-lg', lg: 'h-14 w-14 text-2xl' };
export function Avatar({ letter, tone = 'soft', size = 'md', ring = false }) {
  return (
    <span
      className={cx(
        'inline-grid shrink-0 place-items-center rounded-full font-bold',
        AV[tone], AV_SIZE[size], ring && 'ring-2 ring-white'
      )}
    >
      {letter}
    </span>
  );
}

export { toAr };
