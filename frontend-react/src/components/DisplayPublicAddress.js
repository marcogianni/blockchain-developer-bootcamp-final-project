import React, { useState } from "react";
import * as R from "ramda";
import copy from "copy-to-clipboard";

import Tooltip from "@mui/material/Tooltip";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";

const DisplayPublicAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);

  if (R.isEmpty(address) || R.isNil(address)) {
    return null;
  }

  const handleClick = () => {
    copy(address);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const start = R.take(5, address);
  const end = R.takeLast(4, address);
  return (
    <Tooltip
      enterTouchDelay={300}
      placement="bottom"
      title={copied ? "Copied!" : "Copy"}
      arrow
    >
      <Button
        size="large"
        color="info"
        variant="contained"
        startIcon={<ContentCopyIcon />}
        onClick={handleClick}
      >
        {R.join("…", [start, end])}
      </Button>
    </Tooltip>
  );
};

export default DisplayPublicAddress;
