import connectMongo from "@/actions/dbConnect";
import { InternUser } from "@/actions/models/regUserModel";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) {
  const { id } = params;
  await connectMongo();
  const data = await InternUser.findById(id);
  return NextResponse.json({ data }, { status: 200 });
}
