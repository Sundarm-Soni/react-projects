import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      const response = await featureFlagDataServiceCall();
      setEnabledFlags(response);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
