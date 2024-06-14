// BACKEND SERVER
import { NextResponse } from "next/server";
const API_KEY = process.env.API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&key=${API_KEY}`,
  );
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return NextResponse.json(data);
}
