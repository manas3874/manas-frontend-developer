import { useSession } from "next-auth/react";
import Head from "next/head";
import { useContext } from "react";
import CanvasFalconHeavy from "../src/components/CanvasFalconHeavy";
import CardGridCapsules from "../src/components/CardGridCapsules";
import CardGridRockets from "../src/components/CardGridRockets";

import {
  CapsulesDescription,
  FooterDescription,
  RocketsDescription,
} from "../src/components/ContentComponents";
import SearchFilterComponentCapsules from "../src/components/SearchFilterComponentCapsules";
import SearchFilterComponentRockets from "../src/components/SearchFilterComponentRockets";
import SearchFilterComponent from "../src/components/SearchFilterComponentRockets";
import styles from "../styles/Home.module.css";
import { SpaceContext } from "./_app";

export default function Home() {
  const context = useContext(SpaceContext);
  // ! Local handlers *******************************************************
  const handleSwitch = (newState) => {
    context.contextSetter({ switchState: newState });
  };
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Rocket Analyser</title>
        <meta
          name="description"
          content="Learn about Space-X rockets and choose the one which you love the most."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.banner_wrapper}>
        <h1 className={styles.banner_title}>
          To <span className={styles.banner_title__strike}>the Moon</span>{" "}
          <span className={styles.banner_title__main}>Mars</span>
        </h1>
        <p className={styles.banner_subtitle}>
          Learn about the vehicles that will take us to Mars
        </p>
        <CanvasFalconHeavy />
      </header>
      <main>
        <div className={styles.switch}>
          <span
            onClick={() => {
              handleSwitch("rockets");
            }}
            className={
              context.state.switchState === "rockets" ? styles.selected : null
            }
          >
            Rockets
          </span>
          <span
            onClick={() => {
              handleSwitch("capsules");
            }}
            className={
              context.state.switchState === "capsules" ? styles.selected : null
            }
          >
            Capsules
          </span>
        </div>
        {context.state.switchState === "rockets" && (
          <RocketsDescription styles={styles} />
        )}
        {context.state.switchState === "capsules" && (
          <CapsulesDescription styles={styles} />
        )}

        {context.state.switchState === "rockets" && (
          <>
            <SearchFilterComponentRockets />
            {session && (
              <>
                {context.state?.availableRockets?.length > 0 ? (
                  <CardGridRockets />
                ) : (
                  <div className={styles.card_grid__empty_state}>
                    <span>
                      No Rockets found, please refine your search filters.
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        )}
        {context.state.switchState === "capsules" && (
          <>
            <SearchFilterComponentCapsules />
            {session && (
              <>
                {context.state?.availableCapsules?.capsules?.length > 0 ? (
                  <CardGridCapsules />
                ) : (
                  <div className={styles.card_grid__empty_state}>
                    <span>
                      No Capsules found, please refine your search filters.
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </main>
      <footer className={styles.footer}>
        <FooterDescription styles={styles} />
      </footer>
    </>
  );
}
