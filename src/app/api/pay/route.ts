import { NextResponse } from "next/server";

// Simple in-memory counter. Note: resets when server restarts / hot-reloads.
let counter = 0;

export async function POST() {
  counter += 1;
  return NextResponse.json({ total: counter });
}
