import { Outlet } from "react-router-dom";
import Gnb from "./components/layout/Gnb";

import "./App.css";

function App() {
  return (
    <>
      <Gnb />
      <Outlet />
    </>
  );
}

export default App;
