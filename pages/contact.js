import Image from "next/image";
import Head from "next/head";

import PageTitle from "../components/pageTitile";

import styles from "../styles/Contact.module.css";
import { Col, Container, Row, Button } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Head>
        <title>CAZZA - Food Truck Restaurant</title>
        <meta name="description" content="Hire us - Food Truck Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-white.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <PageTitle
          title="Contact us"
          subtitle="Please fell free to contact us through the following channels"
        />

        <div className={styles.formContainer}>
          <Row>
            <Col lg={6} md={6} className="mb-5">
              <div className={styles.information}>
                <div className={styles.wrapper}>
                  <div className={styles.dot} />
                  <p className={styles.informationTitle}>Opening hours</p>
                </div>

                <p className={styles.content}>
                  2pm - 8:30pm | Monday to Friday
                </p>
              </div>

              <div className={styles.information}>
                <div className={styles.wrapper}>
                  <div className={styles.dot} />
                  <p className={styles.informationTitle}>Contact Info</p>
                </div>
                <a
                  className={styles.specialContent}
                  href="mailto:elisangela@cazza.uk"
                >
                  contact@cazza.uk
                </a>
                <a
                  className={styles.specialContent}
                  href="tel:++44 7523 179 239"
                >
                  +44 7523 179 239
                </a>
              </div>
              <div className={styles.orderContainer}>
                <p className={styles.order}>Order Here</p>
                <div className={styles.imageContainer}>
                  <Image
                    src="/instagram-colored.png"
                    width="52"
                    height="52"
                    alt="Cazza Instagram"
                  />
                  <Image
                    src="/facebook-colored.png"
                    width="52"
                    height="52"
                    alt="Cazza Facebook"
                  />
                  <Image
                    src="/whatsapp-colored.png"
                    width="52"
                    height="52"
                    alt="Cazza Whatsapp"
                  />
                </div>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className={styles.inputContainer}>
                <div className={styles.wrapperInput}>
                  <div>Name</div>
                  <input type="text" placeholder="Name" />
                </div>
                <div className={styles.wrapperInput}>
                  <div>Email</div>
                  <input type="text" placeholder="Email" />
                </div>

                <div className={styles.wrapperInput}>
                  <div>Email</div>

                  <textarea
                    rows="4"
                    cols="50"
                    type="textarea"
                    placeholder="I'd like to hire your services..."
                  />
                </div>

                <Button variant="danger" size="lg">
                  Send
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Contact;
