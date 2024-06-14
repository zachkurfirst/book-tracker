// BACKEND SERVER
import { NextResponse } from "next/server";
const API_KEY = process.env.API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch results");
  }
  const data = await res.json();
  console.log(data);
  return NextResponse.json(data);
}
