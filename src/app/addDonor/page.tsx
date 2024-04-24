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
    <div className="max-w-[1280px] p-[50px]">
      <h1 className="mb-[10px] text-[30px] font-bold">ADD DONOR</h1>

      <div>
        <div className="grid w-full shrink-0 gap-[20px] md:grid-cols-3">
          <div>
            <Label>Last Name</Label>
            <Input
              className="border-black"
              id="lastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <Label>First Name</Label>
            <Input
              className="border-black"
              id="firstName"
              placeholder="First Name"
            />
          </div>

          <div>
            <Label>Middle Name</Label>
            <Input
              className="border-black"
              id="middleName"
              placeholder="Middle Name"
            />
          </div>

          <div>
            <Label>Birthday</Label>
            <Input
              className="border-black"
              id="birthday"
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div>
            <Label>Age</Label>
            <Input className="border-black" id="age" />
          </div>

          <div>
            <Label>Civil Status</Label>
            <Select>
              <SelectTrigger className="w-full border-black">
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

          <div>
            <Label>Sex</Label>
            <Select>
              <SelectTrigger className="w-full border-black">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <h1 className="mb-[10px] mt-[20px] text-[30px] font-bold">Address</h1>

        <div className="grid w-full shrink-0 gap-[20px] md:grid-cols-3">
          <div>
            <Label>Number-test--</Label>
            <Input className="border-black" id="addressNumber" />
          </div>

          <div>
            <Label>Street</Label>
            <Input className="border-black" id="addressStreet" />
          </div>

          <div>
            <Label>Barangay</Label>
            <Input className="border-black" id="addressBarangay" />
          </div>

          <div>
            <Label>City</Label>
            <Input className="border-black" id="addressCity" />
          </div>

          <div>
            <Label>Zip Code</Label>
            <Input className="border-black" id="addressZipcode" />
          </div>
        </div>
        <div className="my-[70px] grid w-full shrink-0 gap-[20px] md:grid-cols-3">
          <div className="col-span-2">
            <Label>Office Address</Label>
            <Input className="border-black" id="addressOffice" />
          </div>
          <div>
            <Label>Religion</Label>
            <Input className="border-black" id="religion" />
          </div>
          <div>
            <Label>Citizenship</Label>
            <Input className="border-black" id="citizenship" />
          </div>
          <div>
            <Label>Education</Label>
            <Select>
              <SelectTrigger className="w-full border-black">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hsgrad">High School Graduate</SelectItem>
                <SelectItem value="colgrad">College Graduate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Occupation</Label>
            <Input className="border-black" id="workOccupation" />
          </div>
        </div>
        <div className="mb-[100px] grid w-full shrink-0 gap-[20px] md:grid-cols-3">
          <div>
            <Label>Telephone Number</Label>
            <Input className="border-black" id="telephoneNumber" />
          </div>

          <div>
            <Label>Mobile Number</Label>
            <Input className="border-black" id="mobileNumber" />
          </div>
          <div>
            <Label>Email Address</Label>
            <Input className="border-black" id="emailAddress" />
          </div>
          <div>
            <Label>ID Type</Label>
            <Select>
              <SelectTrigger className="w-full border-black">
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
          <div>
            <Label>ID Number</Label>
            <Input className="border-black" id="idnumber" />
          </div>
        </div>
      </div>

      <div>
        <Card className="flex flex-col items-center justify-center">
          <CardHeader className="grid grid-cols-2 items-center">
            <CardTitle>Run Program</CardTitle>
            <Button variant="outline">Start</Button>
          </CardHeader>
          <Separator className="my-0.5" />
          <Card className="mt-[15px] flex h-[500px] w-[700px] items-center justify-center border-[1px] border-dashed border-black">
            <CardContent className="flex h-full w-full flex-col items-center justify-center ">
              test
            </CardContent>
          </Card>
          <CardFooter className="mt-[10px] flex items-center justify-center px-2">
            <Button className="min-w-32">OPEN CAMERA</Button>
            <Button className="min-w-32">CAPTURE</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
