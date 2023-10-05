import connectMongo from "@/actions/dbConnect";
import { InternUser } from "@/actions/models/regUserModel";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectMongo();
    const data = await InternUser.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
