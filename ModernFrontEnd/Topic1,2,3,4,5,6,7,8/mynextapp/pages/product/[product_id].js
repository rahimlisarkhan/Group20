import Head from "next/head";
import { useRouter } from "next/router";
// import Link from "next/link";

export default function ProductDetail() {
  const { query, push } = useRouter();

  console.log(query);

  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>

      <main>
        {query.category ? (
          <div>
            <h5>Product Detail {query.product_id}</h5>
            <ul>
              <li>Fast food delicios</li>
            </ul>
          </div>
        ) : (
          <h1>Product Detail {query.product_id}</h1>
        )}
        {/* <Link href="/contact">contact</Link> */}
        <button onClick={() => push("/")}>Home page</button>
        <button onClick={() => push("/about")}>About page</button>
      </main>
    </>
  );
}
