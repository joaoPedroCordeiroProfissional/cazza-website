import Head from "next/head";

import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import styles from "../styles/PageTitle.module.css";

function pageTitile({ title, subtitle }) {
  return (
    <>
      <Head>
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
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
    </>
  );
}

pageTitile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

pageTitile.defaultProps = {
  title: "",
  subtitle: "",
};

export default pageTitile;
