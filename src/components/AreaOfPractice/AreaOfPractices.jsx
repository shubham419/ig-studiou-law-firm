import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./AreaOfPractices.module.css";
import img1 from "../../assets/grid-img/img-1.png"
import img2 from "../../assets/grid-img/img-2.png"
import img3 from "../../assets/grid-img/img-3.png"
import img4 from "../../assets/grid-img/img-4.png"
import img5 from "../../assets/grid-img/img-5.png"
import img6 from "../../assets/grid-img/img-6.png"




const AreaOfPractices = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "600",
          fontSize: "54px",
          marginBottom: "65px",
          marginTop: "179px",
        }}
      >
        Area of Practices
      </Typography>

        <Grid className={styles.imgGrid} container spacing={2}>
          <Grid item xs={8}>
            <div>
            <img src={img1} alt="grid" />
            <Typography variant="h4" sx={{fontSize:"24", fontWeight:"600"}}>BUSINESS LAW</Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
            <img src={img2} alt="" />
            <Typography variant="h4" sx={{fontWeight:"600"}}>Partnership LAW</Typography>

            </div>
          </Grid>

          <Grid item xs={4}>
            <div>
            <img src={img3} alt="grid" />
            <Typography variant="h4" sx={{fontWeight:"600"}}>REALESTATE LAW</Typography>

            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
            <img src={img4} alt="" />
            <Typography variant="h4" sx={{fontWeight:"600"}}>BUSINESS LAW</Typography>

            </div>
          </Grid>

          <Grid item xs={8}>
            <div>
            <img src={img5} alt="grid" />
            <Typography variant="h4" sx={{fontWeight:"600"}}>LANDLORD DISPUTES</Typography>

            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
            <img src={img6} alt="" />
            <Typography variant="h4" sx={{fontWeight:"600"}}>ELDER ABUSE</Typography>

            </div>
          </Grid>



        </Grid>

    </Box>
  );
};

export default AreaOfPractices;
