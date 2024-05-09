/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import CaptureImage from "@/components/molecules/CaptureImage";
import { onSubmit } from "@/components/molecules/Submit";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
};

export default function NewDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const submitToServer = async (data: FormData) => {
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
      <MyForm
        onSubmit={submitToServer}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {submittedData && (
        <div className="container mx-auto">
          <Alert className="mb-5">
            <AlertTitle className="pb-5">
              Please review the following data before proceeding:
            </AlertTitle>
            <AlertDescription>
              <div className="flex gap-20 text-[17px]">
                <div className="">
                  <div className="flex gap-x-4">
                    <p>First Name:</p>
                    <p className="font-bold"> {submittedData.firstName}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <p>Last Name:</p>
                    <p className="font-bold">{submittedData.lastName}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <p>Middle Name:</p>
                    <p className="font-bold">{submittedData.middleName}</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-x-4">
                    <p>Sex:</p>
                    <p className="font-bold">{submittedData.sex}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <p>Age:</p>
                    <p className="font-bold">{submittedData.age}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <p>Blood Group:</p>
                    <p className="font-bold">{submittedData.bloodGroup}</p>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
          <CaptureImage
            firstName={submittedData.firstName}
            lastName={submittedData.lastName}
          />
        </div>
      )}
    </div>
  );
}

type MyFormProps = {
  onSubmit: (data: FormData) => void;
  register: any;
  handleSubmit: any;
  errors: any;
};

function MyForm({ onSubmit, register, handleSubmit, errors }: MyFormProps) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-3xl font-medium">Donor Directory</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
              {...register("middleName", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
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
            className="mt-1 w-full rounded-md border border-gray-300 p-2"
          />
          {errors.practitionerName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
