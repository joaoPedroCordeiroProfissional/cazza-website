import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.image}>
          <Image src="/logo.png" width="263" height="219" alt="Cazza Logo" />
        </div>

        <div className={styles.bgFooter}>
          <div className={styles.textContainer}>
            <Row className="d-flex flex-row justify-content-center text-align-center">
              <Col className="d-flex flex-column justify-content-center col-12 col-md-1 col-lg-1s mb-3 mb-md-0 mb-lg-0">
                <Link href="./">
                  <a className={styles.text}>Home</a>
                </Link>
              </Col>

              <Col
                className="d-flex flex-column justify-content-center"
                sm="auto"
                md="auto"
                lg="1"
              >
                <div className={styles.dot}></div>
              </Col>

              <Col className="d-flex flex-column justify-content-center col-12 col-md-1 col-lg-2 mb-3 mb-md-0 mb-lg-0">
                <Link href="/menu">
                  <a className={styles.text}>Menu</a>
                </Link>
              </Col>

              <Col
                className="d-flex flex-column justify-content-center"
                sm="auto"
                md="auto"
                lg="1"
              >
                <div className={styles.dot}></div>
              </Col>

              <Col className="d-flex flex-column justify-content-center col-12 col-md-1 col-lg-2 mb-3 mb-md-0 mb-lg-0">
                <Link href="/contact">
                  <a className={styles.text}>Contact</a>
                </Link>
              </Col>

              <Col
                className="d-flex flex-column justify-content-center"
                sm="auto"
                md="auto"
                lg="1"
              >
                <div className={styles.dot}></div>
              </Col>

              <Col className="d-flex flex-column justify-content-center col-12 col-md-1 col-lg-2 mb-3 mb-md-0 mb-lg-0">
                <Link href="/events">
                  {/* <a className={styles.textEvents}>Events</a> */}
                  <a className={styles.text}>Events</a>
                </Link>
              </Col>

              <Col className="col-12 col-md-3 col-lg-2 mb-3 mt-md-3 mb-lg-0">
                <Button variant="light" size="lg">
                  <a>Order now</a>
                </Button>
              </Col>
            </Row>
          </div>

          <Row>
            {/* <div className={styles.social}> */}
            <Col>
              <Image
                src="/instagram.png"
                width="50"
                height="50"
                alt="Cazza Instagram"
              />
            </Col>

            <Col>
              <Image
                src="/facebook.png"
                width="50"
                height="50"
                alt="Cazza Facebook"
              />
            </Col>

            <Col>
              <Image
                src="/whatsapp.png"
                width="50"
                height="50"
                alt="Cazza Whatsapp"
              />
            </Col>
            {/* </div> */}
          </Row>

          <div className={styles.lineContainer}>
            <hr className={styles.line} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
