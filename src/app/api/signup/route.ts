import prisma from "@/lib/prisma";
import { validateEmail, validatePassword } from "@/lib/validation";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  console.log("api route");
  const body = await request.json();
  const { email, password } = body;
  if (!validateEmail(email) || !validatePassword(password))
    return Response.json(
      {
        error: "Invalid Email or Password!",
      },
      { status: 400 }
    );

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({ data: { email, password: passwordHash } });
  return Response.json({ success: "signup'ed" });
}
