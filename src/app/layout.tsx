import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth Example 6",
  description: "Next Auth Example 6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = cookies().get("Authorization");
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex px-2 py-1 bg-gray-200 items-center justify-center gap-3">
          <Link href="/">
            <Home className="w-9 h-9" />
          </Link>
          {!isLoggedIn && (
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
          {isLoggedIn && (
            <Link href="/protected">
              <Button>Protected</Button>
            </Link>
          )}
        </nav>
        <main className="flex max-w-[960px] mx-auto h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
