import React from "react";
import { Home } from "lucide-react";
import { Plus } from 'lucide-react';
 
const items = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Add donor",
    path: "/",
    icon: Plus,
  },
  {
    name: "Donor List",
    path: "/",
    icon: Plus,
  },
];
 
export default function sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-300">
      <div className="h-48 text-center flex flex-col justify-center">
        <h1 className="text-3xl font-bold">LIFELINE</h1>
        <p className="text-lg">Donor List Repository</p>
      </div>
      <div>
 
      </div>
    </div>
  );
}
 