import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import { Card } from "../ui/card";

// Modify InformationPopup to accept donor information as props
export function InformationPopup({ donorInfo }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="mr-[5px] bg-blue text-white" variant="outline">
          View
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" h-[70vh] w-[90vh]">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-[15px] text-[25px] font-bold">
            Donor Information
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Card className="h-[50vh] border-lightGrey px-[45px] py-[25px] transition-all ease-in-out hover:border-grey">
              <div className="flex h-[20vh] items-center justify-center">
                <CircleUser size={130} />
              </div>
              <div className="mt-[10px] grid h-[20vh] grid-cols-2 px-[70px] text-[16px] font-semibold">
                <div className="flex flex-col justify-between">
                  <p>
                    First Name:{" "}
                    <span className="ml-[30px]">{donorInfo.firstName}</span>
                  </p>
                  <p>
                    Middle Name:{" "}
                    <span className="ml-[30px]">{donorInfo.middleName}</span>
                  </p>
                  <p>
                    Last Name:{" "}
                    <span className="ml-[30px]">{donorInfo.lastName}</span>
                  </p>
                  <p>
                    Age: <span className="ml-[30px]">{donorInfo.age}</span>{" "}
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p>
                    Sex: <span className="ml-[30px]">{donorInfo.sex}</span>
                  </p>
                  <p>
                    Blood Acquisition Date:{" "}
                    <span className="ml-[30px]">{donorInfo.acquiredDate}</span>
                  </p>
                  <p>
                    Acquiring Practitioner:{" "}
                    <span className="ml-[30px]">{donorInfo.practitioner}</span>
                  </p>
                  <p>
                    Blood Group:{" "}
                    <span className="ml-[30px]">{donorInfo.bloodGroup}</span>
                  </p>
                </div>
              </div>
            </Card>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
