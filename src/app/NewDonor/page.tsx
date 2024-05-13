/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { onSubmit } from "@/components/molecules/Submit";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import CaptureImage from "../../components/CaptureImage";

enum Gender {
  Male = "Male",
  Female = "Female",
}

enum BloodGroup {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
  Undefined = "undefined",
}

type FormData = {
  lastName: string;
  firstName: string;
  middleName: string;
  sex: Gender;
  age: number;
  bloodGroup: BloodGroup;
  practitionerName: string;
  donorID: string;
};

export default function NewDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [dataFromChild, setDataFromChild] = useState<string>("");

  const receiveDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  const submitToServer = async (data: FormData) => {
    data.donorID = dataFromChild;
    console.log(data);

    try {
      await onSubmit(data);
      setSubmittedData(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CaptureImage sendDataToParent={receiveDataFromChild} />
      <Card className="mt-4 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
        <CardContent>
          <div className="flex justify-between">
            <h1 className="text-xl font-medium mb-5">Donor Form</h1>
            <p className="text-neutral-300">Donor ID: {dataFromChild}</p>
          </div>
          <form onSubmit={handleSubmit(submitToServer)} className="space-y-4">
            <div className="flex flex-grow gap-x-3">
              <div className="grow">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="grow">
                <label
                  htmlFor="middleName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Middle Name:
                </label>
                <input
                  type="text"
                  id="middleName"
                  {...register("middleName", { required: false })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.middleName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="grow">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-grow gap-x-3">
              <div className="grow">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  {...register("age", { required: true })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                {errors.age && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="grow">
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sex:
                </label>
                <select
                  id="sex"
                  {...register("sex", { required: true })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="">Select Sex</option>
                  {Object.values(Gender).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {errors.sex && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="grow">
                <label
                  htmlFor="bloodGroup"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Group:
                </label>
                <select
                  id="bloodGroup"
                  {...register("bloodGroup", { required: true })}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="">Select Blood Group</option>
                  {Object.values(BloodGroup).map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
                {errors.bloodGroup && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="practitionerName"
                className="block text-sm font-medium text-gray-700"
              >
                Practitioner Name:
              </label>
              <input
                type="text"
                id="practitionerName"
                {...register("practitionerName", { required: true })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {errors.practitionerName && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      {submittedData && (
        <>
          <Card className="mt-5 border-lightGrey px-2 py-10 transition-all ease-in-out hover:border-grey hover:border-opacity-40">
            <CardContent>
              <h1 className="text-xl font-medium pb-4">
                Please review the following details before proceeding:
              </h1>
              <div className="flex flex-row  gap-x-10 pb-4">
                <div className="flex gap-x-4">
                  <div className="leading-loose">
                    <p>First Name:</p>
                    <p>Middle Name:</p>
                    <p>Last Name:</p>
                  </div>
                  <div className="leading-loose">
                    <p className="font-bold"> {submittedData.firstName}</p>
                    <p className="font-bold"> {submittedData.middleName}</p>
                    <p className="font-bold"> {submittedData.lastName}</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="leading-loose">
                    <p>Age:</p>
                    <p>Sex:</p>
                    <p>Blood Group:</p>
                  </div>
                  <div className="leading-loose">
                    <p className="font-bold"> {submittedData.age}</p>
                    <p className="font-bold"> {submittedData.sex}</p>
                    <p className="font-bold"> {submittedData.bloodGroup}</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div>
                    <p>Practitioner:</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      {submittedData.practitionerName}
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant={"outline"}
                className="mb-5"
                onClick={() => {
                  toast({ title: "Donor Information Submitted" });
                }}
              >
                Confirm
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
