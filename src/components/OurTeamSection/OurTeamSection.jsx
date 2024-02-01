import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import pic1 from "../../assets/profile-img/pic-1.png"
import pic2 from "../../assets/profile-img/pic-2.png"
import pic3 from "../../assets/profile-img/pic-3.png"
import pic4 from "../../assets/profile-img/pic-4.png"
import pic5 from "../../assets/profile-img/pic-5.png"
import pic6 from "../../assets/profile-img/pic-6.png"
import TeamCard from "./TeamCard";


const OurTeamSection = () => {
  const teamsData = [
    { name: "Danial Def", cases: "245", img:pic1 },
    { name: "Sanfole", cases: "126", img: pic2 },
    { name: "Shubham T.", cases: "784", img:pic3 },
    { name: "Prajwal C.", cases: "152", img:pic4 },
    { name: "Apoorva", cases: "578", img:pic5 },
    { name: "Shivangi", cases: "593", img:pic6 },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h3" 
        sx={{
          fontWeight: "600",
          fontSize: "54px",
          marginBottom: "127px",
          marginTop: "179px",
        }}
      >
        Our Team
      </Typography>
      <Grid container spacing={3}> 
      {teamsData.map((item)=> <TeamCard name={item.name} cases={item.cases} img={item.img}/>)}
      </Grid>
    </Box>
  );
};

export default OurTeamSection;
