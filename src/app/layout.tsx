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
      <body className="bg-[url('https://urbanarts.vteximg.com.br/arquivos/ids/5281089-1000-1000/39_Ampliada.jpg?v=637221580477500000')]
       backdrop-blur-[2px] backdrop-brightness-40 text-gray-100 h-screen shadow-lg">{children}</body>
    </html>
  );
}
