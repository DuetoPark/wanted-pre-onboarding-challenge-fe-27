import { Outlet } from "react-router-dom";
import Gnb from "../widgets/Gnb";
import ToastContainer from "../widgets/toast/ToastContainer";

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
