import { Outlet } from "react-router-dom";
import Gnb from "../widgets/Gnb";
import ToastContainer from "../widgets/toast/ToastContainer";

import "./App.css";

function App() {
  return (
    <>
      <Gnb />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
