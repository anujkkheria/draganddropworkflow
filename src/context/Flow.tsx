import React, { createContext, ReactNode, useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import { applyNodeChanges,applyEdgeChanges } from "reactflow"
import { fetchCSV } from "../utils/Flow";

interface FlowProvider {
  children: ReactNode;
}

interface FlowState {
  nodes: any[];
  edges: any[];
}
interface FlowContext {
  state: FlowState;
  addNode: (type: string, x: any, y: any, _data?: string) => void;
  deleteNode: (nodeID: string) => void;
}

const initialState: FlowState = {
  nodes: [],
  edges: [],
};

const FlowContext = createContext<FlowContext | undefined>(undefined);

const FlowProvider: React.FC<FlowProvider> = ({ children }) => {
  const [state, setState] = useState<FlowState>(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  const addNode = (type: string, x: number, y: number, _data: string = "") => {
    const id = nanoid();

    switch (type) {
      case "data": {
        const data = { info: fetchCSV(_data), label: _data };
        const position = { x, y };
        console.log(data, position);

        setState((prev) => ({
          ...prev,
          nodes: [...prev.nodes, { id, type, position, data }],
        }));
      }
    }
  };
  const deleteNode = (nodeID: string) => {
    const newNodeState = {
      ...state,
      nodes: state.nodes.filter((node) => node.id !== nodeID),
    };
    setState(newNodeState);
  };
  return (
    <FlowContext.Provider value={{ state, addNode, deleteNode }}>
      {children}
    </FlowContext.Provider>
  );
};

export { FlowProvider, FlowContext };
