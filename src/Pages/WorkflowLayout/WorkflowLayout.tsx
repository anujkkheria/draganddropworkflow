import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactFlowProvider } from "reactflow";
import FlowContainer from "./ReactFlowContainer";
import "reactflow/dist/style.css";
import OutputSection from "./OutputSection";

function WorkflowLayout() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [selectedData, setSelectedData] = useState([]);

  function OpenSidebar() {
    setisSidebarOpen((prev) => !prev);
  }

  function getNode(_: React.MouseEvent, Node: any) {
    setSelectedData(Node.data.info);
    console.log(Node.data.info);
  }
  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  return (
    <ReactFlowProvider>
      <div className=" h-screen w-screen flex justify-end">
        <Header sidebarController={OpenSidebar} />
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
        <FlowContainer getNodeData={getNode} />
        <OutputSection data={selectedData} />
      </div>
    </ReactFlowProvider>
  );
}

export default WorkflowLayout;
