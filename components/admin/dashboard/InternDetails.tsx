import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InternUserTypes } from "./InternshipTable";

import DetailsAlertBox from "./DetailsAlertBox";

export default function InternDetails(props: {
  internDetails: InternUserTypes;
}) {
  let { internDetails } = props;
  let { firstname, lastname } = internDetails;
  const keyValue = [
    "Id",
    "First Name",
    "Last Name",
    "Email",
    "Mobile Number",
    "Address",
    "Resume Link",
    "LinkedIn Link",
    "College/University",
    "Major/Area of Study",
    "CGPA",
    "Graduation Date",
    "Skills",
    "Interested Area",
    "Project Details",
    "Internship Duration",
    "Source of Internship Details",
  ];

  let data = Object.values(internDetails);

  return (
    <div className="mt-28 flex justify-center items-center mb-10">
      <Card className="w-full md:w-4/5">
        <CardHeader className="text-center">
          <CardTitle>Internship Details</CardTitle>
          <CardDescription>
            Details of {firstname.charAt(0).toUpperCase() + firstname.slice(1)}{" "}
            {lastname.charAt(0).toUpperCase() + lastname.slice(1)}
            {firstname.startsWith("http")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {keyValue.map((item, index) => (
            <DetailsAlertBox
              title={item}
              description={data[index]}
              key={index}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
