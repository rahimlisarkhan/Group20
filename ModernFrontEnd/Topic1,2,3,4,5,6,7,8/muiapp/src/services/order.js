import createInstance from "../shared/helper/createInstance";

export const getOrders = async () => {
  try {
    const data = await createInstance({ method: "GET", url: "/orders" });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};

export const rmvOrder = async (id) => {
  try {
    const data = await createInstance({
      method: "DELETE",
      url: "/orders/" + id,
    });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};

export const getUser = async () => {
  try {
    const data = await createInstance({ method: "GET", url: "/user" });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};
