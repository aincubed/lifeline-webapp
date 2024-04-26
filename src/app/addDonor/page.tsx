"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function AddDonor() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    age: "",
    sex: "",
    bloodSampleAcquisitionDate: "",
    practitionersName: "",
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/addDonor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add donor");
      }

      const data = await response.json();
      console.log("New donor added:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-[1280px] p-[50px]">
      <h1 className="mb-[10px] text-[30px] font-bold">ADD DONOR</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid w-full shrink-0 gap-[20px] md:grid-cols-3">
          <div>
            <Label>Last Name</Label>
            <Input
              className="border-black"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>First Name</Label>
            <Input
              className="border-black"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Middle Name</Label>
            <Input
              className="border-black"
              id="middleName"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Age</Label>
            <Input
              className="border-black"
              id="age"
              name="age"
              placeholder="E.g. 21"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Sex</Label>
            <Input
              className="border-black"
              id="sex"
              name="sex"
              placeholder="E.g Male"
              value={formData.sex}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Blood Sample Acquisition Date</Label>
            <Input
              className="border-black"
              id="bloodSampleAcquisitionDate"
              name="bloodSampleAcquisitionDate"
              placeholder="MM/DD/YY"
              value={formData.bloodSampleAcquisitionDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Practitioner's Name</Label>
            <Input
              className="border-black"
              id="practitionersName"
              name="practitionersName"
              placeholder="E.g Dela Cruz"
              value={formData.practitionersName}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>

      <div className="mt-[70px]">
        <h1 className="mb-[30px] text-[35px] font-bold">
          Capture Blood Sample
        </h1>
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
