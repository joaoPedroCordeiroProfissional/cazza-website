import Image from "next/image";
import Head from "next/head";

import PageTitile from "../components/pageTitile";
import MenuItems from "../components/menuItems";

import styles from "../styles/Menu.module.css";

const Menu = () => {
  const subtitle =
    "Below you'll see details of our menu top plates and dishes. You can order now by clicking on the button";

  return (
    <div className={styles.container}>
      <Head>
        <title>CAZZA Menu - Food Truck Restaurant</title>
        <meta name="description" content="CAZZA - Food Truck Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-white.png" />
      </Head>

      <PageTitile title="Menu" subtitle={subtitle} />

      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <div className="button is-danger is-medium is-fullwidth is-outlined is-rounded">
            <a href="">Order here</a>
          </div>
        </div>
      </div>

      <div className={styles.menuList}>
        <div className="columns is-desktop">
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/rump-stake.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/grilled-stake.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/creamy-chicken.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-desktop">
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/double-burger.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/chicken-wings.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/french-fries.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-desktop">
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/chicken-burger.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/cakepot.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
                <Image
                  src="/baguette.jpeg"
                  alt="Cazza Rump Stake"
                  width="300"
                  height="300"
                />
                <div className="card-content">
                  <div className="content">
                    Rump
                    <a href="#">#responsive</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
