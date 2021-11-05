import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer classNameName="footer">
      <div className="content has-text-centered">
        <div className={styles.image}>
          <Image src="/logo.png" width="263" height="219" alt="Cazza Logo" />
        </div>

        <div className={styles.bgFooter}>
          <div className={styles.textContainer}>
            <Link href="./">
              <a className={styles.text}>Home</a>
            </Link>
            <div className={styles.dot}></div>
            <Link href="/menu">
              <a className={styles.text}>Menu</a>
            </Link>
            <div className={styles.dot}></div>

            <Link href="/contact">
              <a className={styles.text}>Contact</a>
            </Link>
            <div className={styles.dot}></div>

            <Link href="./events">
              <a className={styles.textEvents}>Events</a>
            </Link>

            <div className="button is-medium ">
              <a className={styles.orderButton}>Order now</a>
            </div>
          </div>

          <div className={styles.social}>
            <Image
              src="/instagram.png"
              width="50"
              height="50"
              alt="Cazza Instagram"
            />
            <Image
              src="/facebook.png"
              width="50"
              height="50"
              alt="Cazza Facebook"
            />
            <Image
              src="/whatsapp.png"
              width="50"
              height="50"
              alt="Cazza Whatsapp"
            />
          </div>

          <div className={styles.lineContainer}>
            <hr className={styles.line} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
