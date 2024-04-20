"use client";
import { BadgeInfo, Home, LogOut, LucideIcon, Plus, Users } from "lucide-react";
import Link from "next/link";
import SideNavItem from "./SideNavItem";

interface ISideNavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}
export const items: ISideNavItem[] = [
  {
    name: "Dashboard",
    path: "/dashBoard",
    icon: Home,
  },
  {
    name: "Add donor",
    path: "/addDonor",
    icon: Plus,
  },
  {
    name: "Donor List",
    path: "/donorList",
    icon: Users,
  },
];

export default function SideNav() {
  return (
    <div className="fixed left-0 top-0 z-10 h-[1280px] w-64 space-y-[160%] bg-gray-300">
      <div>
        <div className="flex h-48 flex-col justify-center text-center">
          <h1 className="text-3xl font-bold">LIFELINE</h1>
          <p className="text-lg">Donor List Repository</p>
        </div>
        <div className="flex flex-col">
          {items.map((item) => (
            <SideNavItem key={item.path} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-10 pl-3">
        <ul className="flex flex-col space-y-5 text-lg font-semibold">
          <li className="flex items-center space-x-5 pl-7">
            <BadgeInfo />
            <Link href="/">Help?</Link>
          </li>
          <li className="flex items-center space-x-5 pl-7">
            <LogOut />
            <Link href="/">Sign out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
