import logo from "./logo.svg";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
// import ordersData from "./mock/orders.json";
import { getPosts, addPost, rmvPost } from "./services/order";
import Title from "./shared/components/Title/Title";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

// GET useQuery
//POST PUT DELETE useMutation

function App() {
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery("posts", getPosts, {
    onSuccess: (res) => {
      // toasty.succes("Success")
      // console.log("Success", res);
    },
    refetchInterval: 10_000,
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(addPost, {
    onSuccess: (res) => {
      const existingData = queryClient.getQueryData("posts");

      console.log("existingData", existingData);

      const newData = {
        ...existingData,
        data: [res.data, ...existingData.data],
      };
      queryClient.setQueryData("posts", newData);

      console.log("Successfully..", res);
    },
  });

  const { mutate: rmvMutate } = useMutation(rmvPost, {
    onSuccess: (res) => {
      console.log("Successfully.. delete", res);
    },
  });

  // console.log(data);

  // useEffect(()=>{

  //   if(!slug) return
  //   refetch()
  // }[slug])

  // console.log("ordersData", ordersData);
  // const [state, setState] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // getOrders().then((res) => {
  //   //   console.log("res", res);
  //   // });

  //   getUser().then((res) => {
  //     console.log("res", res.data);
  //     setState(res.data);
  //     setLoading(false);
  //   });

  // }, []);

  const handleRemove = (id) => {
    rmvMutate(21);
    //   // dispatch(filterItem(id));
  };

  const handleCreate = () => {
    const form = {
      title: "Post test",
      body: "Lorem ipsum",
    };

    mutate(form);
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
          onClick={handleCreate}
        >
          Create
        </Button>
        <Button
          // startIcon={<Add />}
          size="large"
          variant="contained"
          onClick={handleRemove}
        >
          Delete
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

const gruop = {
  name: "My besteler",
  colors: [],
};

save;

const list = [
  {
    name: "My besteler",
    colors: ["red", "yellow"],
  },
  {
    name: "My besteler",
    colors: ["purple", "brown"],
  },
];

state = [...state.list, action.payload];
