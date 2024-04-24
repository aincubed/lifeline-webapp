import { Separator } from "@/components/ui/separator";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function page() {
  return (
    <div className="m-16">
      <h1 className="text-3xl font-extrabold">Lifeline User</h1>
      <Separator className="mt-5" />
      <p className="pt-5 text-justify text-base font-light">
        Welcome to the Blood Grouping Machine by Lifeline! This user guide will
        walk you through the process of using the machine to determine the blood
        group of a blood sample using advanced AI technology. Please follow
        these instructions carefully for accurate results.
      </p>

      <div className="m-5">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Preliminary Steps
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 font-light">
                Before using the machine, ensure you have completed the
                following preliminary steps:
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1-1" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Blood Sample Collection
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        The practitioner should prick a blood sample using
                        lancet needles and a capillary tube from the donor.
                      </li>
                      <li>
                        <span className="font-bold">
                          Ensure proper sanitation
                        </span>{" "}
                        measures are followed to avoid contamination.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-2" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Sample Preparation
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Extract the acquired blood sample onto a concave glass
                        slide, which will be placed inside the machine.
                      </li>
                      <li>
                        Drop Anti Seras A and B to the designated location on
                        the glass slide.
                      </li>
                      <li>
                        The blood sample and anti-seras are now ready to be
                        mixed.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Using The Machine
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 font-light">
                Follow these steps to use the Blood Grouping Machine:
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1-1" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Access the Web Application
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Open your web browser and navigate to the Lifeline web
                        application.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-2" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Add Donor Information
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Once logged in, go to the{" "}
                        <span className="font-bold">Add Donor</span> page or
                        navigate to the appropriate section.
                      </li>
                      <li>
                        Fill up the required information about the donor,
                        including their name, age, and etc.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-3" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Power On the Machine
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Scroll down and press the{" "}
                        <span className="font-bold">Power Button</span> to run
                        the program.
                      </li>
                      <li>
                        The machine will start running for a fixed amount of
                        time and will mix the solution containing the blood
                        sample and anti-seras.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-4" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Blood Group Analysis
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Once the machine stopped mixing, click{" "}
                        <span className="font-bold">Open Camera</span> to
                        initiate the machine&apos;s camera.
                      </li>
                      <li>
                        Click <span className="font-bold">Capture</span> to take
                        a photo of the solution.
                      </li>
                      <li>
                        The built-in model of the program will analyze the photo
                        to determine the blood group of the sample.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-5" className="ml-10">
                  <AccordionTrigger className="text-base font-medium">
                    Saving Donor Information
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Once the analysis is complete and the blood group is
                        determined click the{" "}
                        <span className="font-bold">Save</span> button to add
                        the donor&apos;s information to the database.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Maintenance
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 font-light">
                To ensure the optimal performance of the Blood Grouping Machine,
                follow these maintenance tips:
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1-1" className="ml-5">
                  <AccordionTrigger className="text-base font-medium">
                    Regular Cleaning
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Clean the exterior of the machine regularly using a
                        soft, damp cloth. Avoid harsh chemicals.
                      </li>
                      <li>
                        Ensure proper disposal of components used e.g. glass
                        slides and other materials after each use.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-2" className="ml-5">
                  <AccordionTrigger className="text-base font-medium">
                    Calibration
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Periodically calibrate the machine according to the
                        manufacturer&apos;s instructions to maintain accuracy.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Storing
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4 font-light">
                Proper storage is essential for preserving the longevity of the
                machine:
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1-1" className="ml-5">
                  <AccordionTrigger className="text-base font-medium">
                    Room Temperature Storage
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Store the machine in a clean, dry environment at room
                        temperature.
                      </li>
                      <li>
                        Avoid exposure to extreme temperatures or humidity.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1-2" className="ml-5">
                  <AccordionTrigger className="text-base font-medium">
                    Securing Location
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-2 pl-11 pt-2 font-light">
                      <li>
                        Store the machine in a secure location away from
                        potential hazards or unauthorized access.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-10">
        <p className="text-xs font-light italic">
          Thank you for choosing Lifeline&apos;s Blood Grouping Machine. If you have
          any questions or need further assistance, please contact Lifeline
          Technologies at{" "}
          <a href="#" className="underline">
            support@lifelinetechnologies.com
          </a>{" "}
        </p>
      </div>
      <Separator className="mt-5" />
      <div className="">
        <p className="mb-10 pt-3 text-center text-xs font-extralight">
          © 2024 Lifeline Technologies. All Rights Reserved. <br></br>{" "}
        </p>
      </div>
    </div>
  );
}
