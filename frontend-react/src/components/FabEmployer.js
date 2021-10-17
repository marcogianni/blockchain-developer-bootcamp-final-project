import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FabEmployer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 20,
      }}
    >
      <Fab variant="extended" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Add Employee
      </Fab>

      <Fab variant="extended" color="secondary" style={{ marginLeft: 10 }}>
        <RemoveIcon sx={{ mr: 1 }} />
        Remove Employee
      </Fab>
    </div>
  );
};

export default FabEmployer;
