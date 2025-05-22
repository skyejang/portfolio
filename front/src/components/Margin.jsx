import React from "react";
const Margin = ({ dir, space }) => {
  return dir === `vertical` ? (
    <div style={{ height: space }} />
  ) : (
    <div style={{ width: space }} />
  );
};
export default Margin;
