import { Outlet } from "react-router-dom";
import Gnb from "../components/layout/header/Gnb";
import ToastContainer from "../components/ui/toast/ToastContainer";

function App() {
  return (
    <>
      <Gnb />
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
