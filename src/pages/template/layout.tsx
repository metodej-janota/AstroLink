import React, { ReactNode } from "react";
import Navbar from "./navbarComponent";
import Footer from "./footerComponent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8">{children}</div>
      <Footer />
    </>
  );
}
