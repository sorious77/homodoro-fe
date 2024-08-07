import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homodoro",
  description: "Manage your schedule with Homodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
