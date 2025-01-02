import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/blogs/${id}`);

    if (!res.ok) {
      throw new Error("Blog not found");
    }

    const data = await res.json();
    console.log("API response:", data); // Thêm log để debug
    return NextResponse.json(data); // Đảm bảo trả về đúng format
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: error.message }, { status: error.message === "Blog not found" ? 404 : 500 });
  }
}
