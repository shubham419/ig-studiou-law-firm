import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ name, cases, img }) => {
  return (
    <Grid className={styles.gridItem} item xs={4}>
      <Box
        sx={{
          display: "flex",
          Maxwidth: "344px",
          borderRadius: "14px",
          height: "109px",
          alignItems: "center",
        }}
        className = {styles.wrapper}
      >
        <img src={img} alt="profile" />
        <div>
            <Typography variant="h5" sx={{fontSize:"24px", fontWeight:"600"}} >{name}</Typography>
            <Typography variant="body2" sx={{fontSize:"14px", fontWeight:"400"}} >{cases} Cases</Typography>
        </div>
      </Box>
    </Grid>
  );
};

export default TeamCard;
