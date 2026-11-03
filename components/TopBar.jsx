import { Gem } from "lucide-react";
import { Pill, toAr } from "./ui";
import Image from "next/image";
import Logo from "@/Logo/Glossy Arabic Educational Logo with Quill and Book.png";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Image
          src={Logo}
          alt="مِداد"
          priority
          className="w-[100px] h-auto object-contain"
        />
      </div>
      <Pill tone="gold" icon={Gem}>
        {toAr("1,240").replace(",", "٬")} نقطة
      </Pill>
    </header>
  );
}
