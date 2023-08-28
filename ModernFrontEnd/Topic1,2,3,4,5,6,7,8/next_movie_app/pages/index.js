import { useRouter } from "next/router";
import Layout from "../shared/components/Layout/Layout";
import { ROUTER } from "../shared/constant/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <Layout header>
      <div className="m-5 d-flex flex-column justify-content-center">
        <h1 className="text-danger h1 bg-transparent text-center">
          Welcome Netflix
        </h1>

        <button className="btn btn-danger" onClick={() => push(ROUTER.PANEL)}>
          Get Started
        </button>
      </div>
    </Layout>
  );
}
