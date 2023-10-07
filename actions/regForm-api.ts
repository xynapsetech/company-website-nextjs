"use server";

import { formSchema } from "@/validators/regFormValidation";
import { z } from "zod";
import connectMongo from "./dbConnect";
import { InternUser } from "./models/regUserModel";
import axios from "axios";

type Input = z.infer<typeof formSchema>;

export async function registerForm(data: Input) {
  // await connectMongo();
  // const newUser = new InternUser({
  //   firstname: data.firstname,
  //   lastname: data.lastname,
  //   email: data.email,
  //   mobilenum: data.mobilenum,
  //   address: data.address,
  //   resumeUrl: data.resumeUrl,
  //   linkedinUrl: data.linkedinUrl,
  //   collegeName: data.collegeName,
  //   majorName: data.majorName,
  //   cgpa: data.cgpa,
  //   gradDate: data.gradDate,
  //   skills: data.skills,
  //   interestArea: data.interestArea,
  //   projectDetails: data.projectDetails,
  //   internDuration: data.internDuration,
  //   hearSource: data.hearSource,
  // });

  // newUser
  //   .save()
  //   .then(() => {
  //     console.log("success");
  //     return true;
  //   })
  //   .catch((error: any) => {
  //     console.log("failed:", error);
  //     return false;
  //   });

//above given code is not working.

  await axios.post("https://api.xynapsetechnologies.com/api/intern",data).then((res)=>{
    console.log("user registered for internship!");
  })
}
