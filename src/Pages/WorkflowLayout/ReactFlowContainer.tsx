import React, { useCallback, useState } from "react";
import ReactFlow, { Background, Controls, ReactFlowInstance } from "reactflow";
import useFlow from "../../hooks/useFlow";
import DataNode from "../../components/Nodes/DataNode";

const nodeTypes = {
  data: DataNode,
};

interface FlowContainer {
  getNodeData: (_: React.MouseEvent, Node: any) => void;
}

function FlowContainer({ getNodeData }: FlowContainer): JSX.Element {
  // const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);
  const { addNode, state } = useFlow();

  const onDragover = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowInstance) {
        console.log(reactFlowInstance);
        return;
      }

      const { type, _data } = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );

      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      console.log(position);
      if (type) {
        if (_data) {
          console.log(position, type, _data);
          addNode(type, position?.x, position?.y, _data);
        } else {
          addNode(type, position?.x, position?.y);
        }
      }

      // addNode(type);
    },
    [reactFlowInstance]
  );

  return (
    <div className=" h-4/6 w-10/12 border border-black my-16 mr-8">
      <ReactFlow
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        onNodeClick={getNodeData}
        nodes={state.nodes}
        onDragOver={onDragover}
        onDrop={onDrop}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FlowContainer;
