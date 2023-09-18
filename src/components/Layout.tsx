import { Inter } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={`${inter.className}`}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
