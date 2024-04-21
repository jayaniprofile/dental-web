import React from "react";
import Paper from "@mui/material/Paper";

const Container = ({ size, children }) => {
  return (
    <Paper elevation={3} className={`container ${size}`}>
      {children}
    </Paper>
  );
};

export default Container;
