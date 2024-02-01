import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Testimonial.module.css";

const TestimonialCard = ({ img, name, occupation, message }) => {
  return (
    <Box
      className={styles.testomonialCard}
      sx={{
        border: "solid 1px #FFFFFF1A",
        borderRadius: "14px",
        width: "359px",
        height: "368px",
        padding: "0px 26px",
        margin: "0px 15px"
      }}
    >
      <img src={img} alt="customer" />
      <Typography
        sx={{ fontWeight: "600", fontSize: "24px", lineHeight: "24px" }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          marginTop: "10px",
        }}
      >
        {occupation}
      </Typography>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "24px",
          color: "secondary.contrastText",
          marginTop: "22px",
        }}
      >
        {/* {message} */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo hic
        explicabo quibusdam.
      </Typography>
    </Box>
  );
};

export default TestimonialCard;
