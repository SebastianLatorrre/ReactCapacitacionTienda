import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Products } from "../types";
import { data } from "../constans/data.json";

interface Props {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  idProduct?: string;
}

export default function CRModal({ open, handleClose, idProduct }: Props) {
  const p = data.find((item) => item.id === idProduct);
  
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{p?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {p?.description}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src={p?.image}alt="" 
              style={{
                justifyContent:"center",
                objectFit: "cover",
                display:"flex",
                width: "200px",
                height: "200px",
                
              }}
              
            />
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
