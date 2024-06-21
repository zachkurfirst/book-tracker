// BACKEND SERVER -> route handler
import { NextResponse } from "next/server";
const API_KEY = process.env.API_KEY;

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log(id);
  //   console.log(request.nextUrl)
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch results");
  }
  const data = await res.json();
  // console.log(data);
  return NextResponse.json(data);
}
