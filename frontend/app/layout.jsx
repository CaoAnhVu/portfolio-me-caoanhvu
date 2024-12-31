import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: "Cao Anh Vu-Portfolio",
  description: "Resume of Cao Anh Vu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
