import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Classpass",
  description: "Classpass clone build with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href={"/"}>
            <h3>ClassPass</h3>
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
