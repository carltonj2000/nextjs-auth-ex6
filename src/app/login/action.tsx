"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  currentState: any,
  formData: FormData
): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");
  const rawResponse = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await rawResponse.json();
  cookies().set("Authorization", json.jwt, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 2 * 60 * 60 * 1000, // two hours
    path: "/",
    sameSite: "strict",
  });
  if (rawResponse.ok) {
    redirect("/protected");
  } else {
    return json.error;
  }
}
