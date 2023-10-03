import connectMongo from "@/actions/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { AdminUser } from "@/actions/models/adminModel";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongo();
    await AdminUser.create({ email, password: hashedPassword });
    console.log(email, password);
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
