import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amigo Secreto"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[url('https://img.olhardigital.com.br/wp-content/uploads/2020/12/shutterstock_742438120.jpg')]
      backdrop-blur-sm text-gray-100 h-screen shadow-lg">{children}</body>
    </html>
  );
}
