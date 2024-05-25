// import React from "react";
import WorkflowLayout from "./Pages/WorkflowLayout/WorkflowLayout";
import { FlowProvider } from "./context/Flow";
function App() {
  //@ts-ignore
  return (
    <FlowProvider>
      <WorkflowLayout />
    </FlowProvider>
  );
}

export default App;
