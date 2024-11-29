import { Outlet } from "react-router-dom";
import Gnb from "../shared/components/layout/Gnb";

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
