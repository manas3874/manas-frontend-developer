import React, { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../../../pages/_app";
import styles from "../../../styles/components/SearchFilterComponent.module.css";
import {
  CapsulesSearchDescription,
  RocketsSearchDescription,
} from "../ContentComponents";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import { Menu, MenuItem, Switch } from "@mui/material";
function SearchFilterComponentCapsules() {
  // ! Contexts and hooks initialisation *******************************************************
  const context = useContext(SpaceContext);
  const { data: session } = useSession();
  // ! Local states *******************************************************
  const [anchorElTypeFilter, setAnchorElTypeFilter] = useState(null);
  const [anchorElSortCapsule, setAnchorElSortCapsule] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [capsuleTypeFilter, setCapsuleTypeFilter] = useState(null);
  const [includeInactive, setIncludeInactive] = useState(true);
  const [capsuleSorting, setCapsuleSorting] = useState(null);
  // ! Variables *******************************************************
  let openTypeFilter = Boolean(anchorElTypeFilter);
  let openSortCapsule = Boolean(anchorElSortCapsule);
  // ! Effects *******************************************************
  useEffect(() => {
    // ! Initial fetch of the data
    if (session) {
      let defaultCapsulesFilterData = {
        searchTerm,
        capsuleTypeFilter,
        includeInactive,
        capsuleSorting,
      };
      axios
        .post("/api/capsules", {
          loadMore: false,
          ...defaultCapsulesFilterData,
        })
        .then((res) => {
          context.contextSetter({
            availableCapsules: res.data,
            capsulesFilterData: defaultCapsulesFilterData,
          });
        })
        .catch((err) => console.log("err", err));
    }
  }, [session, context.state.switchState]);
  // ! Local helpers *******************************************************
  const handleClickTypeFilter = (event) => {
    setAnchorElTypeFilter(event.currentTarget);
  };
  const handleCloseTypeFilter = (filter) => {
    setCapsuleTypeFilter(filter);
    setAnchorElTypeFilter(null);
  };
  const handleClickSortCapsule = (event) => {
    setAnchorElSortCapsule(event.currentTarget);
  };
  const handleCloseSortCapsule = (filter) => {
    setCapsuleSorting(filter);
    setAnchorElSortCapsule(null);
  };
  const handleSearch = () => {
    let sorting;
    switch (capsuleSorting) {
      case "First launch":
        sorting = "original_launch_unix";
        break;
      case "Reuse count":
        sorting = "reuse_count";
        break;
      case "No. of missions":
        sorting = "missions";
        break;
      default:
        break;
    }
    let capsulesFilterData = {
      searchTerm,
      capsuleTypeFilter,
      includeInactive,
      capsuleSorting: sorting,
    };
    //   ! Fetch all capsules based on current filter
    axios
      .post("/api/capsules", capsulesFilterData)
      .then((res) => {
        context.contextSetter({
          availableCapsules: res.data,
          capsulesFilterData,
        });
      })
      .catch((err) => console.log("err", err));
  };
  const clearAllFilters = () => {
    setSearchTerm("");
    setCapsuleTypeFilter(null);
    setIncludeInactive(true);
    setCapsuleSorting(null);
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
            onClick={handleClickTypeFilter}
          >
            {capsuleTypeFilter || "Filter on type"}
          </button>
          <button
            className={styles.control_filter}
            onClick={handleClickSortCapsule}
          >
            {capsuleSorting || "Sort by"}
          </button>
          <button className={styles.control_clear} onClick={clearAllFilters}>
            Clear filters
          </button>
          <button className={styles.control_search} onClick={handleSearch}>
            Search
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElTypeFilter}
            open={openTypeFilter}
            onClose={() => handleCloseTypeFilter(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button1",
            }}
          >
            <MenuItem onClick={() => handleCloseTypeFilter("Dragon 1.0")}>
              Dragon 1.0
            </MenuItem>
            <MenuItem onClick={() => handleCloseTypeFilter("Dragon 1.1")}>
              Dragon 1.1
            </MenuItem>
            <MenuItem onClick={() => handleCloseTypeFilter("Dragon 2.0")}>
              Dragon 2.0
            </MenuItem>
          </Menu>
          <Menu
            id="basic-menu"
            anchorEl={anchorElSortCapsule}
            open={openSortCapsule}
            onClose={() => handleCloseSortCapsule(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            <MenuItem onClick={() => handleCloseSortCapsule("First launch")}>
              First launch
            </MenuItem>
            <MenuItem onClick={() => handleCloseSortCapsule("Reuse count")}>
              Reuse count
            </MenuItem>
            <MenuItem onClick={() => handleCloseSortCapsule("No. of missions")}>
              No. of missions
            </MenuItem>
          </Menu>
        </div>
      )}
    </section>
  );
}

export default SearchFilterComponentCapsules;
