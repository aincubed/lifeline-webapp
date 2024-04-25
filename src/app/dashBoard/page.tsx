import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="max-w-[1280px] px-[5%] py-[4%]">
      <div className="h-[300px] w-full rounded-lg border-solid bg-gray-300 pl-[50px] pt-[25px]">
        <h1 className="text-[40px] font-bold">Hello, admin</h1>
        <p className="text-[20px]">Today is Sunday, 04/21/24 </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="mb-[30px] mt-[50px] text-[30px] font-medium">Report</h1>
        <Link
          className="flex items-center hover:cursor-pointer"
          href={"/DonorList"}
        >
          <span>See full donor list</span>
          <span className="ml-2">
            <ChevronRight />
          </span>
        </Link>
      </div>
      <div className="grid gap-x-[25px] md:grid-cols-5">
        <Card className="my-5 flex h-[300px] w-full flex-col items-center space-y-8 border-[1px] border-gray-300 md:my-0">
          <CardHeader className="mt-[50px] h-[15%] w-[15%] items-center justify-center rounded-md bg-gray-300 p-[40px]">
            <CardTitle className="md:text text-[35px] font-semibold">
              O
            </CardTitle>
          </CardHeader>
          <CardContent className="break-words">
            <p className="text-[32px] font-bold leading-none">125</p>
            <CardDescription className="pl-[5px] leading-none">
              donors
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="my-5 flex h-[300px] w-full flex-col items-center space-y-8 border-[1px] border-gray-300 md:my-0">
          <CardHeader className="mt-[50px] h-[15%] w-[15%] items-center justify-center rounded-md bg-gray-300 p-[40px]">
            <CardTitle className="text-[35px] font-semibold">A</CardTitle>
          </CardHeader>
          <CardContent className="break-words">
            <p className="text-[32px] font-bold leading-none">75</p>
            <CardDescription className="pl-[5px] leading-none">
              donors
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="my-5 flex h-[300px] w-full flex-col items-center space-y-8 border-[1px] border-gray-300 md:my-0">
          <CardHeader className="mt-[50px] h-[15%] w-[15%] items-center justify-center rounded-md bg-gray-300 p-[40px]">
            <CardTitle className="text-[35px] font-semibold">B</CardTitle>
          </CardHeader>
          <CardContent className="break-words">
            <p className="text-[32px] font-bold leading-none">41</p>
            <CardDescription className="pl-[5px] leading-none">
              donors
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="my-5 flex h-[300px] w-full flex-col items-center space-y-8 border-[1px] border-gray-300 md:my-0">
          <CardHeader className="mt-[50px] h-[15%] w-[15%] items-center justify-center rounded-md bg-gray-300 p-[40px]">
            <CardTitle className="text-[35px] font-semibold">AB</CardTitle>
          </CardHeader>
          <CardContent className="break-words">
            <p className="text-[32px] font-bold leading-none">18</p>
            <CardDescription className="pl-[5px] leading-none">
              donors
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="my-5 flex items-center justify-center border-[2px] border-dashed border-black md:my-0">
          <CardContent className="flex flex-col items-center">
            <Link className="hover:cursor-pointer" href={"/AddDonor"}>
              <Plus size={50} />
            </Link>
            <Link
              className="mt-2 text-[20px] font-semibold text-black hover:cursor-pointer"
              href={"/AddDonor"}
            >
              Add donors
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
