import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import styles from "../../styles/components/RocketDetailsModal.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
};
function CapsuleDetailsModal({ open, handleClose, capsuleDetails }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   classes={[]}
    >
      {capsuleDetails ? (
        <Box className={styles.rockets_modal} sx={style}>
          <h4 className={styles.rockets_modal__title}>
            {capsuleDetails.capsule_serial}
          </h4>
          <p className={styles.rockets_modal__description}>
            Interesting fact about {capsuleDetails.capsule_serial} capsule -{" "}
            {capsuleDetails.details}
          </p>
          <h4 className={styles.rockets_modal__title}>Mission stats</h4>
          <div className={styles.mission_table}>
            <div>
              <span>Mission name</span>
              <span>Flight number</span>
            </div>
            {capsuleDetails.missions.map((singleMission) => {
              return (
                <div key={singleMission.name}>
                  <span>{singleMission.name}</span>
                  <span>{singleMission.flight}</span>
                </div>
              );
            })}
          </div>

          {/* <span className={styles.separator}></span> */}
          {/* <p className={styles.rockets_modal__description}>
            The {capsuleDetails.rocket_name} rocket costs upto{" "}
            <span>{capsuleDetails.cost_per_launch} USD</span> to launch and has
            a <span>success rate of {capsuleDetails.success_rate_pct}%</span>
          </p> */}
        </Box>
      ) : (
        <></>
      )}
    </Modal>
  );
}

export default CapsuleDetailsModal;
