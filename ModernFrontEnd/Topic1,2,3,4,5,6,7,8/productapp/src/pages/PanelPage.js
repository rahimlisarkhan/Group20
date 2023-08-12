import { PanelContainer } from "feature/admin/PanelContainer";
import { PanelContent } from "feature/admin/PanelContent";
import { PanelForm } from "feature/admin/PanelForm";
import React, { Component, useContext, useState } from "react";
import { toast } from "react-toastify";
import { globalContext } from "shared/provider/GlobalProvider";

export const PanelPage = (props) => {
  const [isShowMenu, setIsShowMenu] = useState();

  let { count, setCount, handleHello, setProducts } = useContext(globalContext);

  console.log(count);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [product, ...prevProducts]);

    toast.success("Successfully created");
  };

  return (
    <PanelContainer>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Artir</button> */}
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Artir</button>

        <button onClick={() => handleHello("Salam")}>SayHello</button>
      </div>

      <PanelForm
        title="Form title"
        show={isShowMenu}
        onData={handleAddProduct}
        onClose={() => setIsShowMenu(false)}
      />
      <PanelContent onOpen={() => setIsShowMenu(true)} />
    </PanelContainer>
  );
};
