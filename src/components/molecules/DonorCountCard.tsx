import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type DonorCountCardProps = {
  Ocount?: string;
  Acount?: string;
  Bcount?: string;
  ABcount?: string;
};

export const DonorCountCard: React.FC<DonorCountCardProps> = (
  {
    // Ocount,
    // Acount,
    // Bcount,
    // ABcount,
  },
) => {
  return (
    <>
      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              A
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">10</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              B
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">14</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              AB
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">7</p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="border-lightGrey hover:border-grey transition-all ease-in-out">
          <CardContent className="flex flex-col items-center p-10 gap-y-2">
            <div className="text-3xl text-red rounded-md font-bold items-center justify-center flex h-[70px] w-[70px] bg-lightGrey">
              O
            </div>
            Donors
            <p className="bg-red rounded-xl text-white text-sm px-5">25</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};
