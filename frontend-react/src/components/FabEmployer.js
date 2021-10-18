import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { DialogAddEmployee } from "components";

const FabEmployer = () => {
  const [dialogAddOpen, setDialogAddOpen] = useState(false);
  const [dialogRemoveOpen, setDialogRemoveOpen] = useState(false);

  const handleClickOpenDialogAddEmployee = () => {
    setDialogAddOpen(true);
  };

  const handleClickCloseDialogAddEmployee = () => {
    setDialogAddOpen(false);
  };

  return (
    <>
      <DialogAddEmployee
        open={dialogAddOpen}
        handleClose={handleClickCloseDialogAddEmployee}
      />
      <div
        style={{
          position: "fixed",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 20,
        }}
      >
        <Fab
          variant="extended"
          color="primary"
          onClick={handleClickOpenDialogAddEmployee}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add Employee
        </Fab>

        <Fab variant="extended" color="secondary" style={{ marginLeft: 10 }}>
          <RemoveIcon sx={{ mr: 1 }} />
          Remove Employee
        </Fab>
      </div>
    </>
  );
};

export default FabEmployer;
