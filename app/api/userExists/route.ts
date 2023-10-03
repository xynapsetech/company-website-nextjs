import connectMongo from "@/actions/dbConnect";
import { AdminUser } from "@/actions/models/adminModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectMongo();
    const { email } = await req.json();
    const user = await AdminUser.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
