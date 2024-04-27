import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
      <GoogleTagManager gtmId={`GTM-5V49XL5M`} />
    </>
  );
}
