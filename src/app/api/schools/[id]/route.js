import { db } from "../../../../ib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const [rows] = await db.query("SELECT * FROM schools WHERE id = ?", [id]);
  return NextResponse.json(rows[0] || {});
}
