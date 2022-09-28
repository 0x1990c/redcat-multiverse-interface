import React from 'react';

const initialState = { slideIdx: 0, setSlideIdx: (_val) => null };
const ICNFTContext = React.createContext(initialState);

export const useICNFTContext = () => React.useContext(ICNFTContext);

export const ICNFTContextProvider = ({ children }) => {
  const [slideIdx, setSlideIdxValue] = React.useState(0);

  const setSlideIdx = React.useCallback((val) => setSlideIdxValue(val), [setSlideIdxValue])

  return <ICNFTContext.Provider value={{ slideIdx, setSlideIdx }}>{children}</ICNFTContext.Provider>
};
