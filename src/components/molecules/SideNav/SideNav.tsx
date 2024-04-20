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
    <div className="fixed left-0 top-0 z-10 flex h-screen w-64 flex-col bg-gray-300">
      <div className="flex flex-grow flex-col">
        <div className="flex h-48 flex-col justify-center text-center">
          <h1 className="text-3xl font-bold">LIFELINE</h1>
          <p className="text-lg">Donor List Repository</p>
        </div>
        <div className="flex flex-grow flex-col">
          {items.map((item) => (
            <SideNavItem key={item.path} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-10 pl-3">
        <ul className="mb-[30px] ml-[16px] flex flex-col space-y-5 text-lg font-semibold">
          <li className="flex items-center space-x-5">
            <BadgeInfo />
            <Link href="/">Help?</Link>
          </li>
          <li className="flex items-center space-x-5">
            <LogOut />
            <Link href="/">Sign out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
