import prisma from "@/lib/prisma";
import { validateEmail, validatePassword } from "@/lib/validation";
import bcrypt from "bcryptjs";
import * as jose from "jose";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  if (!validateEmail(email) || !validatePassword(password))
    return Response.json(
      {
        error: "Invalid Email or Password!",
      },
      { status: 400 }
    );

  const user = await prisma.user.findFirst({ where: { email } });
  if (!user || !user.password)
    return Response.json(
      {
        error: "Invalid Email or Password!",
      },
      { status: 400 }
    );

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return Response.json(
      {
        error: "Invalid Email or Password!",
      },
      { status: 400 }
    );

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("2h")
    .setSubject(email)
    .sign(secret);

  return Response.json({ success: "logged'ed in", jwt });
}
