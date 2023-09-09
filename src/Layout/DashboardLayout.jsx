import React from "react";

// components
import Sidebar from "../admin/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
