import NavLinks from "@/lib/constants/nav-links";
import { BadgeHelp } from "lucide-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="md:h-30 mb-2 flex h-40 items-end justify-start rounded-md bg-red p-4"
        href="/Dashboard"
      >
        <div className="w-50 md:w-50 text-white">
          <h1 className="-mb-3 text-[2.4rem] font-bold text-white">LIFELINE</h1>
          <h2>Donor List Repository</h2>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-lightGrey md:block"></div>
        <Link
          className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red hover:bg-opacity-10	hover:text-red md:flex-none md:justify-start md:p-2 md:px-3"
          href="/UserGuide"
        >
          <BadgeHelp />
          <div className="hidden md:block">User Guide</div>
        </Link>
      </div>
    </div>
  );
}
