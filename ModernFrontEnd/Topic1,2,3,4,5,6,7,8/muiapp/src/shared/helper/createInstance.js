import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import orders from "../../mock/orders.json";

// const mock = new MockAdapter(axios);

// mock.onGet("/api/orders").reply(200, {
//   data: orders,
// });

// mock.onGet("/api/user").reply(200, {
//   data: {
//     name: "Kenan",
//     age: 34,
//   },
// });

// mock.onDelete("/api/orders/4").reply(204, {
//   data: {
//     message: "Succesfully remove",
//   },
// });

const createInstance = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com",
});

export default createInstance;
