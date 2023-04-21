import { Layout } from "@/components/Layout";
import Model from "@/components/Model";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Model
        isOpen
        title=""
        onClose={() => {}}
        onSubmit={() => {}}
        actionLabel={""}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
