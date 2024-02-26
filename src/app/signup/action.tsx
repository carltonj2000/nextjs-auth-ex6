"use server";

import { redirect } from "next/navigation";

export async function signUp(
  currentState: any,
  formData: FormData
): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");
  const rawResponse = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await rawResponse.json();
  console.log(rawResponse, json);
  if (rawResponse.ok) {
    redirect("/login");
  } else {
    return json.error;
  }
}
