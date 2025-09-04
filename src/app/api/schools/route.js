import { NextResponse } from "next/server";
import { db } from "../../../ib/db";
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // ensure Node runtime

export async function GET() {
  console.log("DB_HOST:", process.env.DB_HOST);
  try {
    const [rows] = await db.query(
      "SELECT * FROM schools ORDER BY created_at DESC"
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error("DB GET error:", err);
    return NextResponse.json(
      { error: "Database fetch failed" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const imageFile = formData.get("image");

    if (!imageFile || typeof imageFile === "string") {
      return NextResponse.json({ error: "Image required" }, { status: 400 });
    }

    // Save image to /public/schoolImages
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const filename = `${Date.now()}-${imageFile.name}`;
    const filePath = path.join(
      process.cwd(),
      "public",
      "schoolImages",
      filename
    );

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, buffer);

    // Insert into DB
    await db.query(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        address,
        city,
        state,
        contact,
        email_id,
        `/schoolImages/${filename}`,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DB POST error:", err);
    return NextResponse.json(
      { error: "Database insert failed" },
      { status: 500 }
    );
  }
}
