import {Dialog, DialogContent, DialogTitle} from "@mui/material";

interface Props {
  softwareProductName: string;
  open: boolean;
  onClose: () => void;
  children?: JSX.Element;
}

function SoftwareProductUpdatesDialog({softwareProductName, open, onClose, children}: Props) {
  return <Dialog open={open} onClose={onClose}>
    <DialogTitle>{softwareProductName} - Updates</DialogTitle>
    <DialogContent>
      {children}
    </DialogContent>
  </Dialog>
}

export default SoftwareProductUpdatesDialog;