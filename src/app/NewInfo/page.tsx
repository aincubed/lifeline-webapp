/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CaptureImage from "@/components/molecules/CaptureImage";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  practitionerName: string;
};

export default function NewDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <div>
      <MyForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Age: {submittedData.age}</p>
          <p>Gender: {submittedData.gender}</p>
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input type="text" {...register("firstName", { required: true })} />
          {errors.firstName && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" {...register("lastName", { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Age:
          <input type="number" {...register("age", { required: true })} />
          {errors.age && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Gender:
          <select {...register("gender", { required: true })}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Practitioner Name:
          <input
            type="text"
            {...register("practitionerName", { required: true })}
          />
          {errors.practitionerName && <span>This field is required</span>}
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
