import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import Table from "./components/Table";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div>
        <NavBar/>
        <ToolBar/>
        {/* <Header/> */}
        <Table/>
      </div>
    </>
  );
}

export default App;
