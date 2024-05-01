"use client";

import clsx from "clsx";
import { LineChart, Rows3, Scan, UserRoundPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", href: "/", icon: LineChart },
  { name: "Donor List", href: "/DonorList", icon: Rows3 },
  { name: "Add Donor", href: "/NewDonor", icon: UserRoundPlus },
  { name: "Screen Blood", href: "/ScreenBlood", icon: Scan },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-lightGrey p-3 text-sm font-medium hover:bg-red hover:bg-opacity-10	hover:text-red md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-red bg-opacity-10 text-red": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
