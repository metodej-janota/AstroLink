import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

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
