import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import styles from "../../styles/components/RocketDetailsModal.module.css";
const style = {
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
    >
      <div className={styles.rockets_modal_wrapper}>
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
            <span className={styles.close_modal} onClick={handleClose}>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.707107"
                  y1="1"
                  x2="7.77817"
                  y2="8.07107"
                  stroke="#E67300"
                  stroke-linecap="round"
                />
                <line
                  x1="1"
                  y1="8.07024"
                  x2="8.07107"
                  y2="0.999169"
                  stroke="#E67300"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </Box>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
}

export default CapsuleDetailsModal;
