import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yester | Home",
  description: "Demo app for gungens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body style={{
        fontFamily: '"lucida grande", tahoma, verdana, arial, sans-serif',
    }}>
    {children}
    </body>
    </html>
  );
}
