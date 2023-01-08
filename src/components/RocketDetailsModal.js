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
function RocketDetailsModal({ open, handleClose, rocketDetails }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   classes={[]}
    >
      {rocketDetails ? (
        <Box className={styles.rockets_modal} sx={style}>
          <h4 className={styles.rockets_modal__title}>
            {rocketDetails.rocket_name}
          </h4>
          <p className={styles.rockets_modal__description}>
            {rocketDetails.description}{" "}
            <a href={rocketDetails.wikipedia}>
              Learn more about {rocketDetails.rocket_name} here.
            </a>
          </p>
          <h4 className={styles.rockets_modal__title}>Engine stats</h4>
          <p className={styles.rockets_modal__description}>
            The {rocketDetails.rocket_name} rocket has{" "}
            <span>
              {rocketDetails.engines.number}{" "}
              {rocketDetails.engines.number == 1 ? "engine" : "engines"} of{" "}
              {rocketDetails.engines.type} type.
            </span>{" "}
            The propellants used are{" "}
            <span>
              {rocketDetails.engines.propellant_1} and{" "}
              {rocketDetails.engines.propellant_2}
            </span>
            . This <span>{rocketDetails.stages} stage rocket</span> produces a
            thrust of{" "}
            <span>{rocketDetails.engines.thrust_sea_level.kN} kN</span> at the
            sea level.
          </p>
          <h4 className={styles.rockets_modal__title}>Stages</h4>
          <p className={styles.rockets_modal__description}>
            The first stage of this rocket is{" "}
            <span>
              {rocketDetails.first_stage.reusable ? "reusable" : "not reusable"}
            </span>
            . The{" "}
            <span>
              {rocketDetails.first_stage.fuel_amount_tons} tons of fuel
            </span>{" "}
            in the rocket{" "}
            <span>
              burns for {rocketDetails.first_stage.burn_time_sec} seconds.
            </span>
            <br />
            <br />
            The{" "}
            {rocketDetails.second_stage.reusable
              ? "reusable"
              : "non reusable"}{" "}
            second stage of the rocket has{" "}
            <span>
              {rocketDetails.second_stage.fuel_amount_tons} tons of fuel
            </span>{" "}
            which provides a{" "}
            <span>thrust of {rocketDetails.second_stage.thrust.kN} kN.</span>
          </p>
          <span className={styles.separator}></span>
          <p className={styles.rockets_modal__description}>
            The {rocketDetails.rocket_name} rocket costs upto{" "}
            <span>{rocketDetails.cost_per_launch} USD</span> to launch and has a{" "}
            <span>success rate of {rocketDetails.success_rate_pct}%</span>
          </p>
        </Box>
      ) : (
        <></>
      )}
    </Modal>
  );
}

export default RocketDetailsModal;
