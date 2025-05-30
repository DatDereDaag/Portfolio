import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

/* 
  -The project has been layed out to be expanded on in the future.
  -For now it will be one page all contained here in the layout component.

*/

const Layout = () => {
  return (
    <div className="App">
  
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Layout;
