import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ handleSearch }) {
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
