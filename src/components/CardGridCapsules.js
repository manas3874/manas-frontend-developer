import axios from "axios";
import moment from "moment/moment";
import React, { useContext } from "react";
import { SpaceContext } from "../../pages/_app";
import styles from "../../styles/components/CardGrid.module.css";
import CapsuleDetailsModal from "./CapsuleDetailsModal";

function SingleCard({ singleCapsule, handleOpen, context }) {
  return (
    <div className={styles.single_card__capsule}>
      <h3 className={styles.single_card__title}>
        {singleCapsule.capsule_serial}
      </h3>
      <p className={styles.single_card__details}>
        Missions: <span>{singleCapsule.missions.length}</span>
      </p>
      <p className={styles.single_card__details}>
        Landings: <span>{singleCapsule.landings}</span>
      </p>
      <p className={styles.single_card__details}>
        Reuse Count: <span>{singleCapsule.reuse_count}</span>
      </p>
      <p className={styles.single_card__details}>
        First launch:{" "}
        <span>
          {singleCapsule.original_launch_unix
            ? moment(singleCapsule.original_launch_unix * 1000).format(
                "DD/MM/YYYY"
              )
            : "Unused"}
        </span>
      </p>
      <button
        className={styles.single_card__cta}
        onClick={() => {
          context.contextSetter({ selectedCapsuleDetails: singleCapsule });
          handleOpen();
        }}
      >
        Learn more
      </button>
      <span
        className={
          singleCapsule.status == "active"
            ? styles.single_card__is_active
            : styles.single_card__is_inactive
        }
      >
        {singleCapsule.status}
      </span>
    </div>
  );
}

function CardGridCapsules() {
  const context = useContext(SpaceContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLoadMore = () => {
    axios
      .post("/api/capsules", {
        ...context.state.capsulesFilterData,
        loadMore: true,
      })
      .then((res) => {
        console.log("res capsules", res.data);
        let newCapsulesData = [
          ...context.state.availableCapsules.capsules,
          ...res.data.capsules,
        ];

        context.contextSetter({
          availableCapsules: { ...res.data, capsules: newCapsulesData },
        });
      })
      .catch((err) => console.log("err", err));
  };
  return (
    <div className={styles.wrapper}>
      {context.state.availableCapsules?.capsules?.map((singleCapsule) => {
        return (
          <SingleCard
            key={singleCapsule.rocket_id}
            singleCapsule={singleCapsule}
            handleOpen={handleOpen}
            context={context}
          />
        );
      })}
      {context.state.availableCapsules?.hasMore && (
        <div className={styles.single_card__load_more} onClick={handleLoadMore}>
          <span>Load more</span>
        </div>
      )}
      <CapsuleDetailsModal
        open={open}
        handleClose={handleClose}
        capsuleDetails={context.state.selectedCapsuleDetails}
      />
    </div>
  );
}

export default CardGridCapsules;
