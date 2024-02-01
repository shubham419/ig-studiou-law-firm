import React from "react";
import style from "./HeroSection.module.css";
import { Button, TextField, Typography } from "@mui/material";
import HeroImg from "../../../assets/hero-img.png";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content_div}>
        <Typography sx={{ fontWeight: "500", fontSize: "4.7vw" }} variant="h2">
          You don’t have to
          <br /> Fight them Alone.
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1.1rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
            paddingRight: "50px",
            margin: "36px 0px",
            color: "secondary.contrastText",
          }}
          variant="body2"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          consequuntur aspernatur sunt magni laudantium aliquam consectetur
          similique, eius laborum fugit accusantium repellat, debitis illum
          quisquam ipsa sed ipsum nam quae.
        </Typography>
        <EmailText />
      </div>
      <div className={style.img_div}>
        <img src={HeroImg} alt="cover img" />
      </div>
    </div>
  );
};

const EmailText = () => {
  return (
    <TextField
      color="secondary"
      placeholder="Enter your email address"
      variant="outlined"
      sx={{
        width: "438px",
      }}
      InputProps={{
        sx: { borderRadius: "50px", backgroundColor: "#292929" },
        startAdornment: (
          <EmailIcon
            sx={{
              color: "secondary.main", // Set the icon color to your secondary color
              marginRight: "8px", // Adjust the spacing between the icon and the input
            }}
          />
        ),
        endAdornment: (
          <Button
            color="secondary"
            sx={{
              margin: "10px",
              padding: "13px",
              minWidth: "140px",
              backgroundColor: "#E3B748", // Change the background color of the button
              borderRadius: "50px", // Set the border radius of the button
              color: "Black", // Set the text color of the button
            }}
            variant="contained"
          >
            Let's Talk
          </Button>
        ),
      }}
    />
  );
};

export default HeroSection;
