import { Inter } from "next/font/google";
import Favicon from "./Favicon";
import Footer from "./Footer";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Favicon />
      <div className={`${inter.className} text-gray-700`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
