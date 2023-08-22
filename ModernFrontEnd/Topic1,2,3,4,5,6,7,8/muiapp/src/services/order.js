import createInstance from "../shared/helper/createInstance";

export const getPosts = async () => {
  try {
    const data = await createInstance({ method: "GET", url: "/posts" });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};

export const addPost = async (form) => {
  try {
    const data = await createInstance({
      method: "POST",
      url: "/posts",
      data: form,
    });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};

export const rmvPost = async (id) => {
  try {
    const data = await createInstance({
      method: "DELETE",
      url: "/posts/" + id,
    });
    return data;
  } catch (err) {
    // toast.error(err.message);
  }
};

// export const getUser = async () => {
//   try {
//     const data = await createInstance({ method: "GET", url: "/user" });
//     return data;
//   } catch (err) {
//     // toast.error(err.message);
//   }
// };
