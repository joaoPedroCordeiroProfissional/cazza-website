import Image from "next/image";
import Link from "next/link";

// import styles from "../styles/Navbar.module.css";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  width="120"
                  height="100"
                  intrinsic="true"
                  alt="Cazza Logo"
                />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/menu">
                  <a className="nav-link">Menu</a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/contact">
                  <a>Hire us</a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/events">
                  <a>Events</a>
                </Link>
              </Nav.Link>
            </Nav>

            <Nav>
              <Button
                href="https://pay.yoello.com/v/cazzauk"
                variant="danger"
                size="lg"
              >
                Order here
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavbarComponent;
