import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  /*
   * Added this to toggle the is-active class. See:
   *
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */

  const toggleStyles = (event) => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width="120"
            height="100"
            intrinsic="true"
            alt="Cazza Logo"
          />
        </div>

        <a
          id="burger"
          onClick={toggleStyles}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          // data-target="navbarmenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarmenu" className="navbar-menu">
        <div className="navbar-end">
          <Link href="./">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/menu">
            <a className="navbar-item">Menu</a>
          </Link>
          <Link href="/contact">
            <a className="navbar-item">Contact</a>
          </Link>
          <Link href="./events">
            <a className="navbar-item">Events</a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <a className="button is-medium is-fullwidth is-danger">
              <strong>Order here</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
