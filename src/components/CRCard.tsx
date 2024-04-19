import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CRChips from "../components/CRChips";
import CRRating from "../components/CRRating";
import { Stack } from "@mui/material";
import CRBtnAccion from "./CRBtnAccion";
import { useState } from "react";
import CRModal from "./CRModal";
import createTheme from "@mui/material";
import { Products } from "../types";

interface CardProps {
  product: Products;
}

export default function CRCard({ product }: CardProps) {
  const [isCheck, setValor] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheck = () => {
    setValor(!isCheck);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Stack direction="row" m={2}>
          <CRChips />
        </Stack>
        <CardMedia
          sx={{ maxHeight: 500 }}
          component={"img"}
          color="card"
          image={product.image}
          title={product.title}
          style={{
            width: "200",
            height: "200",
            objectFit: "cover",
          }}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <CRRating />
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <CRBtnAccion isShow isCheck={isCheck} handleShow={handleClickOpen} />
          <CRBtnAccion isCheck={isCheck} handleCheck={handleCheck} />
        </CardActions>
      </Card>
      <CRModal idProduct={product.id} open={open} handleClose={handleClose} handleClickOpen={() => {}} />
      {/* <CRModal  open={open} handleClose={handleClose}/> */}
    </>
  );
}
