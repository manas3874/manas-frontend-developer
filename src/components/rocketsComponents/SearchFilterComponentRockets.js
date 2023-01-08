import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../../../pages/_app";
import styles from "../../../styles/components/SearchFilterComponent.module.css";
import {
  CapsulesSearchDescription,
  RocketsSearchDescription,
} from "../ContentComponents";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { FormControlLabel, Menu, MenuItem, Switch } from "@mui/material";
function SearchFilterComponentRockets() {
  // ! Contexts and hooks initialisation *******************************************************
  const context = useContext(SpaceContext);
  const { data: session } = useSession();
  // ! Local states *******************************************************
  const [anchorElHeightFilter, setAnchorElHeightFilter] = useState(null);
  const [anchorElSortRocket, setAnchorElSortRocket] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [rocketHeightFilter, setRocketHeightFilter] = useState(null);
  const [includeInactive, setIncludeInactive] = useState(true);
  const [rocketSorting, setRocketSorting] = useState(null);
  // ! Variables *******************************************************
  let openHeightFilter = Boolean(anchorElHeightFilter);
  let openSortRocket = Boolean(anchorElSortRocket);
  // ! Effects *******************************************************
  useEffect(() => {
    // ! Initial fetch of the data
    if (session) {
      let defaultRocketsFilterData = {
        searchTerm,
        rocketHeightFilter,
        includeInactive,
        rocketSorting,
      };
      axios
        .post("/api/rockets", { ...defaultRocketsFilterData })
        .then((res) => {
          context.contextSetter({
            availableRockets: res.data,
            rocketsFilterData: defaultRocketsFilterData,
          });
        })
        .catch((err) => console.log("err", err));
    }
  }, [session, context.state.switchState]);
  // ! Local helpers *******************************************************
  const handleClickHeightFilter = (event) => {
    setAnchorElHeightFilter(event.currentTarget);
  };
  const handleCloseHeightFilter = (filter) => {
    setRocketHeightFilter(filter);
    setAnchorElHeightFilter(null);
  };
  const handleClickSortRocket = (event) => {
    setAnchorElSortRocket(event.currentTarget);
  };
  const handleCloseSortRocket = (filter) => {
    setRocketSorting(filter);
    setAnchorElSortRocket(null);
  };
  const handleSearch = () => {
    let heightFilter, sorting;
    switch (rocketHeightFilter) {
      case "Less than 50m":
        heightFilter = [0, 50];
        break;
      case "50m to 100m":
        heightFilter = [51, 100];
        break;
      case "more than 100m":
        heightFilter = [100, Infinity];
        break;
      default:
        break;
    }
    switch (rocketSorting) {
      case "First launch":
        sorting = "first_flight";
        break;
      case "Cost per launch":
        sorting = "cost_per_launch";
        break;

      default:
        break;
    }
    let rocketsFilterData = {
      searchTerm,
      rocketHeightFilter: heightFilter,
      includeInactive,
      rocketSorting: sorting,
    };
    //   ! Fetch all rockets based on current filter
    axios
      .post("/api/rockets", rocketsFilterData)
      .then((res) => {
        context.contextSetter({
          availableRockets: res.data,
          rocketsFilterData,
        });
      })
      .catch((err) => console.log("err", err));
  };
  const clearAllFilters = () => {
    setSearchTerm("");
    setRocketHeightFilter(null);
    setIncludeInactive(true);
    setRocketSorting(null);
  };
  return (
    <section className={styles.search_wrapper}>
      {context.state.switchState === "rockets" && (
        <RocketsSearchDescription styles={styles} />
      )}
      {context.state.switchState === "capsules" && (
        <CapsulesSearchDescription styles={styles} />
      )}
      {!session ? (
        <button
          className={styles.search_signin}
          onClick={() => signIn("github")}
        >
          Sign in with Github to continue
        </button>
      ) : (
        <div className={styles.control_wrapper}>
          <input
            value={searchTerm}
            onChange={(ev) => setSearchTerm(ev.target.value)}
            type="text"
            placeholder="Search by name"
            className={styles.control_input}
          />
          <div className={styles.control_switch}>
            <Switch
              defaultChecked
              checked={includeInactive}
              onChange={(ev, checked) => setIncludeInactive(checked)}
            />
            <span>Include inactive</span>
          </div>
          <button
            className={styles.control_filter}
            onClick={handleClickHeightFilter}
          >
            {rocketHeightFilter || "Filter on height"}
          </button>
          <button
            className={styles.control_filter}
            onClick={handleClickSortRocket}
          >
            {rocketSorting || "Sort by"}
          </button>
          <button className={styles.control_clear} onClick={clearAllFilters}>
            Clear filters
          </button>

          <button className={styles.control_search} onClick={handleSearch}>
            Search
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElHeightFilter}
            open={openHeightFilter}
            onClose={() => handleCloseHeightFilter(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button1",
            }}
          >
            <MenuItem onClick={() => handleCloseHeightFilter("Less than 50m")}>
              Less than 50m
            </MenuItem>
            <MenuItem onClick={() => handleCloseHeightFilter("50m to 100m")}>
              50m to 100m
            </MenuItem>
            <MenuItem onClick={() => handleCloseHeightFilter("more than 100m")}>
              more than 100m
            </MenuItem>
          </Menu>
          <Menu
            id="basic-menu"
            anchorEl={anchorElSortRocket}
            open={openSortRocket}
            onClose={() => handleCloseSortRocket(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            <MenuItem onClick={() => handleCloseSortRocket("First launch")}>
              First launch
            </MenuItem>
            <MenuItem onClick={() => handleCloseSortRocket("Cost per launch")}>
              Cost per launch
            </MenuItem>
          </Menu>
        </div>
      )}
    </section>
  );
}

export default SearchFilterComponentRockets;
