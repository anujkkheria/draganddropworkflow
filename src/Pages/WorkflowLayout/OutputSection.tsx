import { useState } from "react";
import { ExpandLessSharp } from "@mui/icons-material";

function OutputSection({ data }: any) {
  const [isOpen, setIsopen] = useState(true);
  console.log(data);

  return (
    <div
      className={`fixed bottom-0 left-0 h-64 bg-slate-800 w-full ${
        !isOpen ? "translate-y-3/4" : ""
      }`}
      onClick={() => setIsopen((prev) => !prev)}
    >
      <div className=" text-blue-100 p-2 bg-slate-700 flex items-center gap-2">
        <h4 className=" text-center">Data</h4>
        <ExpandLessSharp
          sx={{ transform: `${!isOpen ? "rotate(180deg)" : "rotate(0deg)"}` }}
        />
      </div>
    </div>
  );
}

export default OutputSection;
