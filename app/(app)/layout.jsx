import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';

export default function AppLayout({ children }) {
  return (
    <div className="relative mx-auto min-h-dvh max-w-[430px] bg-surface shadow-2xl">
      <main className="px-5 pb-32 pt-4">
        <TopBar />
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
