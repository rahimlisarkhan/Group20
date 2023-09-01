import { useRouter } from "next/router";
import Layout from "../shared/components/Layout/Layout";
import { ROUTER } from "../shared/constant/router";
import { writeData } from "../shared/helper/writeData";
import { readData } from "../shared/helper/readData";
import { useEffect, useState } from "react";
import { useFireQuery } from "../shared/hooks/useFireQuery";

export default function Home() {
  const { push } = useRouter();
  // const [data, setData] = useState();

  // const handleSubmit = () => {
  //   writeData("product", { title: "Burger", price: 12.9 });
  // };

  // useEffect(() => {
  //   readData("product", (d) => {
  //     setData(d);
  //   });
  // }, []);

  const { data, loading, createData } = useFireQuery({
    collection: "/product",
  });

  const {
    data: userData,
    loading: loadingUser,
    createData: crtUser,
  } = useFireQuery({
    collection: "/user",
  });

  console.log(data);
  console.log("userData", userData);

  return (
    <Layout header>
      <div className="m-5 d-flex flex-column justify-content-center">
        <h1 className="text-danger h1 bg-transparent text-center">
          Welcome Netflix
        </h1>

        <button className="btn btn-danger" onClick={() => push(ROUTER.PANEL)}>
          Get Started
        </button>
        <button onClick={() => createData({ name: "Cizburger", price: 12.3 })}>
          Write data
        </button>

        <button onClick={() => crtUser({ name: "John Doe", age: 34 })}>
          Write user
        </button>
      </div>
    </Layout>
  );
}
