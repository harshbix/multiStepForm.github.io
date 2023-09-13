import React from "react";
import Steps from "./steps";

const Layout = () => {
  return (
    <div className="layout">
      <div className="p-2 row">
        <div className="col-sm-3">
          <Steps />
        </div>
        <div className="col-sm-auto">

        </div>
      </div>
    </div>
  );
};

export default Layout;
