import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WELCOME TO NURMAN INNOVATION",
  description:
    "Our team is dedicated to developing transformative technologies that not only solve complex problems but also pave the way for a more sustainable and prosperous future. Through collaboration, creativity, and unwavering commitment, we aim to make a meaningful impact on industries and communities worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
