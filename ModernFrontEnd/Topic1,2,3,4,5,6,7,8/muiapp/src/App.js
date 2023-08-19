import logo from "./logo.svg";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
// import ordersData from "./mock/orders.json";
import { useEffect } from "react";
import { getOrders, getUser, rmvOrder } from "./services/order";
import Title from "./shared/components/Title/Title";

function App() {
  // console.log("ordersData", ordersData);

  useEffect(() => {
    // getOrders().then((res) => {
    //   console.log("res", res);
    // });

    getUser().then((res) => {
      console.log("res", res.data);
    });
  }, []);

  const handleRemove = (id) => {
    rmvOrder(id).then((res) => {
      console.log("res", res);
      // dispatch(filterItem(id))
      // dispatch(filterItem(id));
    });

    // dispatch(filterItem(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Avatar
          alt="Remy Sharp"
          // sizes="sm"
          src="https://media.licdn.com/dms/image/D5603AQFd6eQTMGG8vg/profile-displayphoto-shrink_200_200/0/1680514093124?e=1695859200&v=beta&t=vD_ZrvkgQVobv2WAlQGvlyt-w4vhlEmiP2XisiUGdXk"
        />
        <Button
          // startIcon={<Add />}
          size="large"
          variant="contained"
          color="warning"
          onClick={() => handleRemove(4)}
        >
          Send
        </Button>
        {/* <Typography variant="body2" component="p">
          h1. Heading
        </Typography> */}
        <ProductCard
          img="https://media.licdn.com/dms/image/D5603AQFd6eQTMGG8vg/profile-displayphoto-shrink_200_200/0/1680514093124?e=1695859200&v=beta&t=vD_ZrvkgQVobv2WAlQGvlyt-w4vhlEmiP2XisiUGdXk"
          title={"Product"}
          desc="test"
        />

        <h1 className="text-orange-600 text-10xl text-mono "> Test1</h1>

        <input className="focus:bg-blue-300 rounded border-none outline-none px-2" />

        <div className="p-5 bg-white flex flex-col gap-4 rounded-lg  border border-yellow-300 shadow-md hover:bg-red-400 hover:translate-x-2 transition-all cursor-pointer">
          <img src="https://media.licdn.com/dms/image/D5603AQFd6eQTMGG8vg/profile-displayphoto-shrink_200_200/0/1680514093124?e=1695859200&v=beta&t=vD_ZrvkgQVobv2WAlQGvlyt-w4vhlEmiP2XisiUGdXk" />
          <p className="text-lg text-gray-300">Lorem ipsum</p>
          <p className="text-sm text-gray-500">Lorem ipsum</p>
        </div>

        <img src={logo} className="App-logo" alt="logo" />

        <div className="w-10 h-10 rounded-full overflow-hidden shadow">
          <img
            className="cover"
            src="https://media.licdn.com/dms/image/D5603AQFd6eQTMGG8vg/profile-displayphoto-shrink_200_200/0/1680514093124?e=1695859200&v=beta&t=vD_ZrvkgQVobv2WAlQGvlyt-w4vhlEmiP2XisiUGdXk"
          />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <div className="w-1/4"></div>
        <div className="w-3/4"></div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
