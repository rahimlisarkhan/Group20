import Head from "next/head";
import { useRouter } from "next/router";

export default function AboutPage() {
  const a = useRouter();

  return (
    <>
      <Head>
        <title>About </title>
      </Head>

      <main>
        <h1>About us</h1>
        <img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75" />
      </main>
    </>
  );
}
