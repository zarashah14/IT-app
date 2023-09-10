import React from "react";

// components
import Sidebar from "../admin/Sidebar";
import Main from "../admin/Main";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <Main/>
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
