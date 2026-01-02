import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import AOSProvider from "./components/AOSProvider";
const inter = Inter({ subsets: ["latin"] });
import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Israel Nwangwu",
  description: "Portfolio Website of Israel Nwangwu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tiltNeon.className}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
