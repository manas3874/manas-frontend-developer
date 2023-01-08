import axios from "axios";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });
  console.log(req.body);
  const BODY = req.body;
  // ! Compute stuff only if user is logged in
  if (session) {
    // ! All capsules data
    var capsulesData = await axios.get(
      "https://api.spacexdata.com/v3/capsules"
    );
    capsulesData = capsulesData.data;
    if (BODY) {
      // ! Compute filters if the body is present *****************
      if (BODY.searchTerm && BODY.searchTerm.length > 2) {
        // ! Search term is present
        //! Compute the search only if 3 or more characters are present
        capsulesData = capsulesData.filter(
          (singleCapsule) =>
            singleCapsule.capsule_serial
              .toLowerCase()
              .includes(BODY.searchTerm.toLowerCase()) ||
            singleCapsule.capsule_id
              .toLowerCase()
              .includes(BODY.searchTerm.toLowerCase())
        );
      }
      if (BODY.capsuleTypeFilter && capsulesData.length > 0) {
        // ! capsuleTypeFilter is active *****************
        capsulesData = capsulesData.filter(
          (singleCapsule) => singleCapsule.type === BODY.capsuleTypeFilter
        );
      }
      if (BODY.capsuleSorting && capsulesData.length > 0) {
        //! Sort the rockets based on the sorting condition required *****************
        switch (BODY.capsuleSorting) {
          case "original_launch_unix":
            capsulesData = capsulesData.sort(
              (a, b) => a.original_launch_unix - b.original_launch_unix
            );
            break;
          case "reuse_count":
            capsulesData = capsulesData.sort(
              (a, b) => a.reuse_count - b.reuse_count
            );
            break;
          case "missions":
            capsulesData = capsulesData.sort(
              (a, b) => a.missions.length - b.missions.length
            );
            break;

          default:
            break;
        }
      }
      if (!BODY.includeInactive && capsulesData.length > 0) {
        capsulesData = capsulesData.filter(
          (singleCapsule) => singleCapsule.status === "active"
        );
      }
      if (BODY.loadMore) {
        if (capsulesData.length > 10) {
          // ! Return all after 10
          capsulesData = capsulesData.splice(10, capsulesData.length - 10);
          let responseObject = { capsules: capsulesData, hasMore: false };
          return res.send(responseObject);
        } else {
          // ! Return first 10
          let responseObject = { capsules: capsulesData, hasMore: true };
          return res.send(responseObject);
        }
      } else {
        //   ! Not asked for load more
        if (capsulesData.length > 10) {
          let responseObject = {
            capsules: capsulesData.splice(0, 10),
            hasMore: true,
          };
          return res.send(responseObject);
        } else {
          let responseObject = { capsules: capsulesData, hasMore: false };
          return res.send(responseObject);
        }
      }
    }
    // return res.send(capsulesData);
  } else {
    res.status(401).send({
      error: "Unauthorised",
      message:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
