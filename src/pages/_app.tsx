import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ApolloProviderWrapper } from "./components/util/apollo-provider-wrapper";
import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Layout from "./template/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProviderWrapper>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextThemesProvider>
        </NextUIProvider>
      </ApolloProviderWrapper>
    </SessionProvider>
  );
}
