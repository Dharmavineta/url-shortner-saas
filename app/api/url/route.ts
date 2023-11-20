import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
  } catch (error) {
    console.log("URL GENERATION", error);
    return new NextResponse("Internal server error");
  }
}
