import React, { useState } from "react";
import * as R from "ramda";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";

import { useSalaries } from "hooks/useSalaries";
import { useWeb3React } from "@web3-react/core";
import { parseEther } from "@ethersproject/units";
import { warningNotification } from "notifications";

export default function DialogRemoveEmployee({
  open,
  handleClose,
  updateTotalEmployees,
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ address: null });

  const { account } = useWeb3React();
  const { removeEmployee } = useSalaries();

  const handleSubmit = async () => {
    setLoading(true);

    const trx = await removeEmployee(
      form.address,
      parseEther(form.amount.toString()),
      setLoading
    );

    const error = R.pathOr(null, ["err", "error", "message"], trx);
    console.debug("TRX", { trx, error });

    if (error) {
      warningNotification(error);
    }

    updateTotalEmployees();
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Remove Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set a monthly salary to an employee (every 30 days)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Employee Address"
            value={form.address}
            onChange={(event) =>
              setForm((s) => ({ ...s, address: event.target.value }))
            }
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton
            loading={loading}
            color="warning"
            variant="contained"
            onClick={handleSubmit}
          >
            Remove Employee
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
