import React from "react";
import Head from "next/head";

import PageTitle from "../components/pageTitile";

import styles from "../styles/Events.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Events() {
  const description = `If you're looking for a professional, reliable caterer who will
  bring the best experience and outstanding food you're in the right place`;

  return (
    <>
      <Head>
        <title>CAZZA - Food Truck Restaurant</title>
        <meta name="description" content="Events - Food Truck Restaurant" />
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
          title="Event Catering"
          subtitle="We provide services for social event such as birthdays, parties, weddings and much more!"
        />

        <div className={styles.buttonContainer}>
          <Button
            href="https://pay.yoello.com/v/cazzauk"
            variant="outline-danger"
            size="lg"
          >
            Order now
          </Button>
        </div>

        <div className={styles.eventsContainer}>
          <p className={styles.eventsText}>{description}</p>
          <div className={styles.optionsContainer}>
            <Row>
              <Col lg={4} md={4}>
                <p>WEDDING</p>
                <hr className={styles.line} />
                <p>BIRTHDAYS</p>
                <hr className={styles.line} />
                <p>ANNIVERSARIES</p>
                <hr className={styles.lineHidden} />
              </Col>
              <Col lg={4} md={4}>
                <p>CONFERENCES</p>
                <hr className={styles.line} />
                <p>TEAM BUILDING EVENTS</p>
                <hr className={styles.line} />
                <p>COMPANY CELEBRATIONS</p>
                <hr className={styles.lineHidden} />
              </Col>
              <Col lg={4} md={4}>
                <p>PRODUCT LAUNCHES</p>
                <hr className={styles.line} />
                <p>PARTIES</p>
                <hr className={styles.line} />
                <p>CHARITY FUNCTIONS</p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Events;
