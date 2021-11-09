import Image from "next/image";
import Head from "next/head";

import PageTitle from "../components/pageTitile";

import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
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

      <PageTitle
        title="Contact us"
        subtitle="Please fell free to contact us through the following channels"
      />

      <div className={styles.formContainer}>
        <div className="columns is-desktop">
          <div className="column">
            <div className={styles.information}>
              <div className={styles.wrapper}>
                <div className={styles.dot} />
                <p className={styles.informationTitle}>Opening hours</p>
              </div>

              <p className={styles.content}>9am - 4pm | Monday to Friday</p>
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
              <a className={styles.specialContent} href="tel:+">
                +44 1234 567 980
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
          </div>

          <div className="column">
            <div className={styles.inputContainer}>
              <div className={styles.wrapperInput}>
                <div>Name</div>
                <input className="input" type="text" placeholder="Name" />
              </div>
              <div className={styles.wrapperInput}>
                <div>Email</div>
                <input className="input" type="text" placeholder="Email" />
              </div>

              <div className={styles.wrapperInput}>
                <div>Email</div>

                <input
                  className="input"
                  type="text"
                  placeholder="I'd like to hire your services..."
                />
              </div>

              <a className="button is-normal is-danger">
                <strong>Send</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
