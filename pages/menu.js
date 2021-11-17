import Image from "next/image";
import Head from "next/head";

import PageTitile from "../components/pageTitile";

import styles from "../styles/Menu.module.css";
import { Button, Row, Col, Card, Container } from "react-bootstrap";

const Menu = () => {
  const subtitle =
    "Below you'll see details of our menu top plates and dishes. You can order now by clicking on the button";

  return (
    <>
      <Head>
        <title>CAZZA Menu - Food Truck Restaurant</title>
        <meta name="description" content="CAZZA - Food Truck Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-white.png" />
      </Head>
      <Container fluid>
        <PageTitile title="Menu" subtitle={subtitle} />

        <div className={styles.buttonContainer}>
          <div className={styles.buttonWrapper}>
            <Button
              href="https://pay.yoello.com/v/cazzauk"
              variant="outline-danger"
              size="lg"
            >
              Order here
            </Button>
          </div>
        </div>

        <Row xs={1} md={12} lg={3} sm={12} className="g-4 mb-4">
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/rump-stake.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Grilled rump steak, crumbled brown beans and white rice
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex flex-column  align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/grilled-stake.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Grilled rump steak, spicy homemade pork sausage, fries,
                  crumbled brown beans, white rice, fries and salad{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/creamy-chicken.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Creamy chicken breast, fries, white rice
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={12} lg={3} sm={12} className="g-4 mb-4">
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/double-burger.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Double ribs homemade burger
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/french-fries.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  French fries with melting cheese and bacon
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/chicken-wings.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  spicy chicken wings
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={12} lg={3} sm={12} className="g-4 mb-5">
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/chicken-burger.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Chicken breast breaded burger with fries and salad
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/baguette.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  coronation chicken baguette
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Card className="card shadow border-0">
              <Card.Img variant="top" src="/cakepot.jpeg" />
              <Card.Body>
                <Card.Text className="text-center">
                  Vanilla strawberry cake in the pot
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
