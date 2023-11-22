import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "./template/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
