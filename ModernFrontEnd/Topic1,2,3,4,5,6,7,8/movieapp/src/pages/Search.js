import { initialState, reducer } from "feature/search/store/reducer";
import React, { Component, useReducer, useState } from "react";
import { getMovies } from "services/movie";
import { useBattery } from "shared/hooks/useBattery";
import { useFetch } from "shared/hooks/useFetch";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useGlobalState();

  const { show, info } = state;

  const { data, loading, error } = useFetch(() => getMovies());

  const a = useBattery();

  console.log(a);
  // const [show, setShow] = useState();
  // const [show, setShow] = useState();
  // const [show, setShow] = useState();
  // const [show, setShow] = useState();
  // const [show, setShow] = useState();

  const handleShow = () => {
    dispatch({ type: "is_show" });
  };

  const handleFillInfo = () => {
    dispatch({ type: "fill_info", payload: { name: "Kenan", age: 34 } });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1 className="text-white">
        {user.fullname} {user.vip && <span>VIP</span>}
      </h1>

      {show && <h1 className="text-white">Search {data.Title}</h1>}
      {/* <Bcomponent info={info} /> */}
      <button onClick={handleFillInfo}>Fill</button>
      <button onClick={handleShow}>Show</button>
    </div>
  );
};

export default Search;
