import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>CAZZA - Food Truck Restaurant</title>
        <meta name="description" content="CAZZA - Food Truck Restaurant" />
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

      <div className={styles.cover}>
        <div className={styles.text}>
          <p className={styles.title}>CAZZA</p>
          <p className={styles.subtitle}>{'"Fresh food"'}</p>
        </div>

        <div className={styles.image}>
          <Image
            alt="Cazza Barbecue"
            src="/background-steak.png"
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            blurDataURL
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
