import { createContext, useState } from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
export const SpaceContext = createContext({});
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [spaceData, setSpaceData] = useState({
    switchState: "rockets",
    availableRockets: null,
    availableCapsules: null,
    selectedRocketDetails: null,
    selectedCapsuleDetails: null,
    rocketSearchFilters: null,
    capsuleSearchFilters: null,
    rocketsFilterData: null,
    capsulesFilterData: null,
  });
  const contextSetter = (stateToUpdate) => {
    setSpaceData({ ...spaceData, ...stateToUpdate });
  };
  return (
    <SessionProvider session={session}>
      <SpaceContext.Provider value={{ state: spaceData, contextSetter }}>
        <Component {...pageProps} />
      </SpaceContext.Provider>
    </SessionProvider>
  );
}
