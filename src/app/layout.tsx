import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roman Romanyshyn - Senior Full Stack Developer Portfolio",
  description: "Personal website portfolio Senior Full Stack developer.",
  icons: {
    icon: [
      { url: "/favicon_rocket.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
