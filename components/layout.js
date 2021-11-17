import NavbarComponent from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
