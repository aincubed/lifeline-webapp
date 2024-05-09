/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { onSubmit } from "@/app/api/addDonor/route";
import CaptureImage from "@/components/molecules/CaptureImage";
import { useState } from "react";
import { useForm } from "react-hook-form";

enum Gender {
  Male = "Male",
  Female = "Female",
}

enum BloodGroup {
  A = "A",
  B = "B",
  AB = "AB",
  O = "O",
  Undefined = "Undefined",
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
        <div>
          <h2>Submitted Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Middle Name: {submittedData.middleName}</p>
          <p>Sex: {submittedData.sex}</p>
          <p>Age: {submittedData.age}</p>
          <p>Blood Group: {submittedData.bloodGroup}</p>
          <p>Practitioner Name: {submittedData.practitionerName}</p>
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
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.middleName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
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
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
