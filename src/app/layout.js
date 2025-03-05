import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SEC-Software Engineering Club",
  description: "A club for software engineers providing resources and support. This Course are for those who want to learn software engineering. Mern stack developer course is also available. this course designed for beginners and intermediate level developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
      <link rel="icon" href="logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 flex justify-between items-center p-4 text-md md:text-xl  text-white shadow-xs shadow-cyan-100">
          <h1 className="text-white">
          <a href="#Landing"><Image src="/logo.png" alt="Software Engineering Club" width={70} height={70} /></a>
            </h1>
          <ul className="flex justify-between items-center space-x-4">
            <li className="hover:text-foreground transition duration-300">
              <a href="#Outline">Outline</a>
            </li>
            <li className="hover:text-foreground transition duration-300">
              <Link href="/#Contact">Contact</Link>
            </li>
            <li className="hover:text-foreground transition duration-300">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfX1VoF1yCvCMIc0E16zRvtz_0c_Weof3zF_b_CFADyvdeNrQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
