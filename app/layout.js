import { Inter, Tilt_Neon } from "next/font/google"; // Grouped imports
import "./globals.css";
import "animate.css";
import AOSProvider from "./components/AOSProvider";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  display: "swap",
  // If the error persists, try adding weight: "400"
  // though Tilt Neon is usually variable.
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
