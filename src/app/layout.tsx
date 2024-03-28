import { ChicaneThemeProvider } from "~/controllers/ThemeProvider";
import Header from "../components/sections/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { MobileNav } from "~/components/sections/MobileNav";
import { Nav } from "~/components/sections/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Cohttps://github.com/sadhu-sanjay/frameruimputer One - our take on CPU case',
  description: 'A simple yet elegent CPU case'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-200
       to-slate-300 dark:bg-gradient-to-l dark:from-slate-800
        dark:to-slate-900`}
      >
        <ChicaneThemeProvider>
          <MobileNav />
          <Nav />
          {/* <Header /> */}
          {children}
        </ChicaneThemeProvider>
      </body>
    </html>
  );
}
