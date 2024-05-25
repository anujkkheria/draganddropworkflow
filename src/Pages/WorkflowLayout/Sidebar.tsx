// import React from "react";

interface sideBar {
  isSidebarOpen: boolean;
}

const Data = [
  {
    label: "Fake Currency Data (large)",
    Data: "fake_currency_data",
  },
  {
    label: "Spotify Data set",
    Data: "Popular_Spotify_Songs",
  },
];

function Sidebar({ isSidebarOpen }: sideBar) {
  function onDragStart(event: React.DragEvent, type: string, _data: string) {
    let data = type;
    if ((type = "data")) {
      data = JSON.stringify({ type, _data });
    }
    console.log(data);
    // event.prevenDefault()
    event.dataTransfer.setData("application/reactflow", data);
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <div
      className={`fixed top-14 left-0 w-48 z-50 bg-slate-200 h-full transition-transform duration-300 ${
        isSidebarOpen ? `translate-x-0` : `-translate-x-full`
      } `}
    >
      <div>
        {Data.map((datum) => {
          return (
            <div
              className=" p-2 border border-blue-500 m-2"
              key={datum.label}
              onDragStart={(event) => onDragStart(event, "data", datum.Data)}
              draggable
            >
              {datum.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
