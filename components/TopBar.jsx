import { Feather, Gem } from 'lucide-react';
import { Pill, toAr } from './ui';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
          <Feather size={20} />
        </span>
        <span className="text-[28px] font-bold leading-none">مِداد</span>
      </div>
      <Pill tone="gold" icon={Gem}>{toAr('1,240').replace(',', '٬')} نقطة</Pill>
    </header>
  );
}
