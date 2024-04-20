"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Information = {
  id: string;
  donorid: number;
  lastname: string;
  firstname: string;
  bloodgroup: string;
  bloodacquisitiondate: Date;
};

export const columns: ColumnDef<Information>[] = [
  {
    accessorKey: "donorid",
    header: "Donor's ID",
  },
  {
    accessorKey: "lastname",
    header: "Last Name",
  },
  {
    accessorKey: "firstname",
    header: "First Name",
  },
  {
    accessorKey: "bloodgroup",
    header: "Blood Group",
  },
  {
    accessorKey: "bloodacquisitiondate",
    header: "Blood Acquisition Date",
  },
  {
    id: "viewAction",
    cell: ({ row }) => {
      const Information = row.original;

      return (
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">View</span>View
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "deleteAction",
    cell: ({ row }) => {
      const Information = row.original;

      return (
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Delete</span>Delete
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      );
    },
  },
];
