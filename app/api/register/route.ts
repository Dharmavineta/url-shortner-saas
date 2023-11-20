import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prismaDB from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { confirmPassword, ...body } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);

    const isUser = await prismaDB.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (isUser) {
      return new NextResponse("User already exists, please login", {
        status: 401,
      });
    }

    const newUser = await prismaDB.user.create({
      data: {
        ...body,
        password: hashPassword,
      },
    });

    return NextResponse.json(
      { message: "Hurray! You're In! Please login to access your account" },
      { status: 201 }
    );
  } catch (error) {
    console.log("REGISTER ERROR");
    return new NextResponse("Internal server error", { status: 500 });
  }
}
