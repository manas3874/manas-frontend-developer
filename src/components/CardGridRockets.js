import React, { useContext } from "react";
import { SpaceContext } from "../../pages/_app";
import styles from "../../styles/components/CardGrid.module.css";
import RocketDetailsModal from "./RocketDetailsModal";
function SingleCard({ singleRocket, handleOpen, context }) {
  return (
    <div className={styles.single_card}>
      <img
        className={styles.single_card__image}
        src={singleRocket.flickr_images[0]}
      />
      <h3 className={styles.single_card__title}>{singleRocket.rocket_name}</h3>
      <p className={styles.single_card__details}>
        Height: <span>{singleRocket.height.meters} meters</span>
      </p>
      <p className={styles.single_card__details}>
        Diameter: <span>{singleRocket.diameter.meters} meters</span>
      </p>
      <p className={styles.single_card__details}>
        Mass: <span>{singleRocket.mass.kg} kg.</span>
      </p>
      <button
        className={styles.single_card__cta}
        onClick={() => {
          context.contextSetter({ selectedRocketDetails: singleRocket });
          handleOpen();
        }}
      >
        Learn more
      </button>
      <span
        className={
          singleRocket.active
            ? styles.single_card__is_active
            : styles.single_card__is_inactive
        }
      >
        {singleRocket.active ? "ACTIVE" : "INACTIVE"}
      </span>
    </div>
  );
}

function CardGridRockets() {
  const context = useContext(SpaceContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.wrapper}>
      {context.state.availableRockets?.map((singleRocket) => {
        return (
          <SingleCard
            key={singleRocket.rocket_id}
            singleRocket={singleRocket}
            handleOpen={handleOpen}
            context={context}
          />
        );
      })}
      <RocketDetailsModal
        open={open}
        handleClose={handleClose}
        rocketDetails={context.state.selectedRocketDetails}
      />
    </div>
  );
}

export default CardGridRockets;
