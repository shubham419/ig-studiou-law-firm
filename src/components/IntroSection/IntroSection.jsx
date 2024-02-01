import React from "react";
import style from "./IntroSection.module.css";
import { Typography } from "@mui/material";

const IntroSection = () => {
  return (
    <div className={style.wrapper}>
      <div style={{ flex: 1 }}>
        <Typography sx={{ fontWeight: "600", fontSize: "54px" }} variant="h3">
          Let’s Introduce
          <br />
          Ourself
        </Typography>
      </div>
      <div className={style.divider}></div>
      <div style={{ flex: 1, marginLeft: "50px" }}>
        <Typography sx={{ fontWeight: "600", fontSize: "32px" }} variant="h4">
          Criminal Lawyer
        </Typography>
        <Typography sx={{ fontWeight: "500", fontSize: "18px", color: "secondary.contrastText" }} variant="Body2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </Typography>
      </div>
    </div>
  );
};

export default IntroSection;
