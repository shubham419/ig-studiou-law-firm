import { Box, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import SuccessCard from "./SuccessCard";

const WhyUsSection = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h3" sx={{ fontWeight: "600", fontSize: "54px", marginBottom: "97px" }}>
        Why Choose us?
      </Typography>
      <Stack direction="row" spacing={2}>
        <SuccessCard
          title="98% Success Rate"
          body="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer."
        />
        <SuccessCard
          title="100% Success Rate"
          body="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer."
        />
        <SuccessCard
          title="100% Success Rate"
          body="Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer."
        />
      </Stack>
    </Box>
  );
};

export default WhyUsSection;
