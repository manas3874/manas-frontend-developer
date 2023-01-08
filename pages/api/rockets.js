import axios from "axios";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  const BODY = req.body;
  // ! Compute stuff only if user is logged in
  if (session) {
    // ! All rockets data
    var rocketsData = await axios.get("https://api.spacexdata.com/v3/rockets");
    rocketsData = rocketsData.data;
    if (BODY) {
      // ! Compute filters if the body is present *****************
      if (BODY.searchTerm && BODY.searchTerm.length > 2) {
        // ! Search term is present
        //! Compute the search only if 3 or more characters are present
        rocketsData = rocketsData.filter(
          (singleRocket) =>
            singleRocket.rocket_name
              .toLowerCase()
              .includes(BODY.searchTerm.toLowerCase()) ||
            singleRocket.rocket_id
              .toLowerCase()
              .includes(BODY.searchTerm.toLowerCase())
        );
      }
      if (BODY.rocketHeightFilter && rocketsData.length > 0) {
        // ! rocketHeightFilter is active *****************
        rocketsData = rocketsData.filter(
          (singleRocket) =>
            singleRocket.height.meters > BODY.rocketHeightFilter[0] &&
            singleRocket.height.meters <= BODY.rocketHeightFilter[1]
        );
      }
      if (BODY.rocketSorting && rocketsData.length > 0) {
        //! Sort the rockets based on the sorting condition required *****************
        switch (BODY.rocketSorting) {
          case "first_flight":
            rocketsData = rocketsData.sort(
              (a, b) =>
                new Date(a.first_flight) * 1 - new Date(b.first_flight) * 1
            );
            break;
          case "cost_per_launch":
            rocketsData = rocketsData.sort(
              (a, b) => a.cost_per_launch - b.cost_per_launch
            );
            break;

          default:
            break;
        }
      }
      if (!BODY.includeInactive && rocketsData.length > 0) {
        rocketsData = rocketsData.filter((singleRocket) => singleRocket.active);
      }
    }

    res.send(rocketsData);
  } else {
    res.status(401).send({
      error: "Unauthorised",
      message:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
