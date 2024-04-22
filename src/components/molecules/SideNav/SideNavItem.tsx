"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

interface ISideNavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

export default function SideNavItem({ item }: { item: ISideNavItem }) {
  const { name, icon: Icon, path } = item;
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    router.push(path);
  };
  const isActive = useMemo(() => {
    return path === pathname;
  }, [path, pathname]);

  return (
    <div
      className={`flex cursor-pointer items-center space-x-5 pl-7 hover:bg-white hover:text-black ${isActive ? "bg-white text-black" : ""}`}
      onClick={onClick}
    >
      <Icon />
      <p className="px-[5px] py-[20px] text-lg font-semibold">{name}</p>
    </div>
  );
}
