import { db } from "../../../ib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 + 1 AS result");

    return NextResponse.json({ success: true, rows });
  } catch (error) {
    return NextResponse.json(
      { error: error.message, host: process.env.DB_HOST },
      { status: 500 }
    );
  }
}
