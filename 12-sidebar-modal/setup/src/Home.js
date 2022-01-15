import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
// import { AppContext, useGlobalContext } from "./context";
import {  useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  const {openSideBar, openModal} = useGlobalContext(); //use custom hook
  // console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
