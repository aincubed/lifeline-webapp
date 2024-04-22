import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AddDonor() {
  return (
    <div className="flex flex-col items-center px-14 pb-10 pt-20  text-3xl font-bold">
      <h1 className="pb-8">ADD DONOR</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="flex grid grid-cols-6 items-center justify-center gap-x-8 gap-y-4 pb-5">
          <div className="col-span-2 col-start-1 grid w-full min-w-full max-w-lg items-center gap-1.5">
            <Label>Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>

          <div className="col-span-2 col-start-3 grid w-full min-w-full max-w-lg items-center gap-1.5">
            <Label>First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>

          <div className="col-span-2 col-start-5 grid w-full min-w-full max-w-lg items-center gap-1.5">
            <Label>Middle Name</Label>
            <Input id="middleName" placeholder="Middle Name" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Birthday</Label>
            <Input id="birthday" placeholder="dd/mm/yyyy" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Age</Label>
            <Input id="age" placeholder="" />
          </div>

          <div className="col-span-2 col-start-4 grid w-full min-w-full max-w-sm gap-1.5">
            <Label>Civil Status</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 grid w-full min-w-full max-w-sm gap-1.5">
            <Label>Sex</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Address */}
          <div className="col-start-1 grid w-full max-w-sm items-center gap-1.5">
            <Label className="pt-2 text-2xl">Address</Label>
          </div>

          <div className="col-span-2 col-start-1 grid w-full max-w-sm items-center gap-1.5">
            <Label>Number</Label>
            <Input id="addressNumber" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Street</Label>
            <Input id="addressStreet" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Barangay</Label>
            <Input id="addressBarangay" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>City</Label>
            <Input id="addressCity" placeholder="" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Zip Code</Label>
            <Input id="addressZipcode" placeholder="" />
          </div>

          <div className="col-span-6 col-start-1 grid w-full max-w-4xl items-center gap-1.5 pb-4">
            <Label>Office Address</Label>
            <Input id="addressOffice" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Religion</Label>
            <Input id="religion" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Citizenship</Label>
            <Input id="citizenship" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm gap-1.5">
            <Label>Education</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="HSgrad">High School Graduate</SelectItem>
                <SelectItem value="COLgrad">College Graduate</SelectItem>
                <SelectItem value="BDgrad">Bachelors Degree</SelectItem>
                <SelectItem value="MASgrad">Masters Degree</SelectItem>
                <SelectItem value="DOCgrad">Doctorate</SelectItem>
                <SelectItem value="NAgrad">Not Applicable</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Telephone Number</Label>
            <Input id="telephoneNumber" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Mobile Number</Label>
            <Input id="mobileNumber" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>Email Address</Label>
            <Input id="emailAddress" placeholder="" />
          </div>

          <div className="col-span-2 grid w-full max-w-sm gap-1.5">
            <Label>ID Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schoolId">School</SelectItem>
                <SelectItem value="companyId">Company</SelectItem>
                <SelectItem value="prcId">PRC</SelectItem>
                <SelectItem value="driversId">Drivers</SelectItem>
                <SelectItem value="sss-gsis-birId">SSS/GSIS/BIR</SelectItem>
                <SelectItem value="othersId">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 grid w-full max-w-sm items-center gap-1.5">
            <Label>ID Number</Label>
            <Input id="idnumber" placeholder="" />
          </div>
        </div>

        <div>
          <Card className="min-w-[700px]">
            <CardHeader className="flex grid grid-cols-2 items-center gap-x-8">
              <CardTitle>
                Run Program
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardTitle>
              <Button variant="outline">Start</Button>
            </CardHeader>

            <Separator className="my-0.5" />

            <CardContent className="flex items-center justify-center pt-5">
              <Card className="flex min-h-[400px] min-w-[600px]">Camera</Card>

              {/* <p>Card Content</p> */}
            </CardContent>

            <CardFooter className="flex items-center justify-center gap-1.5 px-2">
              {/* <p>Card Footer</p> */}
              <Button variant="outline" className="min-w-32">
                OPEN CAMERA
              </Button>
              <Button className="min-w-32">CAPTURE</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
