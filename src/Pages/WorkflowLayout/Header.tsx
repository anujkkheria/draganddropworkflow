// import React from "react";
import { Menu } from "@mui/icons-material";

interface Iheader {
  sidebarController: () => void;
}

function Header({ sidebarController }: Iheader) {
  return (
    <div className="w-full h-14 flex items-center bg-blue-500 fixed top-0 p-4 gap-2">
      Header
      <button
        className=" w-8 h-8 p-4 shadow-md bg-black flex items-center justify-center"
        onClick={() => sidebarController()}
      >
        <Menu sx={{ fill: "#f5f5f5" }} />
      </button>
    </div>
  );
}

export default Header;
