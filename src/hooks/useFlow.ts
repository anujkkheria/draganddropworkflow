import { useContext } from "react";

import { FlowContext } from "../context/Flow";

const useFlow = () => {
  const context = useContext(FlowContext);

  if (!context) throw new Error("context must be used inside provider");

  return context;
};

export default useFlow;
