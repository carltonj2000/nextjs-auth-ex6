"use client";
import { login } from "@/app/login/action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function Login() {
  const [error, formAction] = useFormState(login, undefined);
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1>Login Page</h1>

      <form action={formAction}>
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue="a@b.com"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          defaultValue="Passw0rd!"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Link href="/signup">
          <Button variant="link" className="w-full">
            Not signed up?
          </Button>
        </Link>
      </form>
      {error ? (
        <p className="bg-red-200 px-2 py-1 rounded-md">{error}</p>
      ) : null}
    </div>
  );
}
