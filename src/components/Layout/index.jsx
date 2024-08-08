import Header from "./Header";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
