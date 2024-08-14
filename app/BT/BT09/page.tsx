import React from "react";
import BaseAlert from "./Base";

const App = () => {
  return (
    <div>
      <BaseAlert type="success" message="success text" />
      <BaseAlert type="error" message="error text" />
      <BaseAlert type="warning" message="warning text" />
      <BaseAlert type="info" message="info text" />
    </div>
  );
};

export default App;
