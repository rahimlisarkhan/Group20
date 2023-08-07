export const initialState = { count: 0, show: false, info: null };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "is_show":
      return { ...state, show: !state.show };
    case "fill_info":
      const newInfo = { ...action.payload, position: "Developer" };

      return { ...state, info: newInfo };

    default:
      throw new Error("Invalid action type!");
  }
}
