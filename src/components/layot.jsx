import React from "react";
import Steps from "./steps";

const Layout = () => {
  return (
    <div className="layout">
      <div className="p-2 row">
        <div className="col-sm-3">
          <Steps />
        </div>
        <div className="col-sm-9">
          <h1 className="bg-success">Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
