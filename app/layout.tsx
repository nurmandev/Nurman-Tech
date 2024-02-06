import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WELCOME TO NURMAN INNOVATION",
  description:
    "Nurman is designed to cater specifically to the needs of SMEs with a proven track record of success, aspiring entrepreneurs with innovative business concepts, and industry professionals seeking specialized entrepreneurial knowledge.",
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
