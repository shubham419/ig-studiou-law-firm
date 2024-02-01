import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactComponent as AccrodionIcon } from "../../assets/accrodion-icon.svg";

const AccordionItem = ({ summary, detail }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<AccrodionIcon />}>
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {/* {detail} */}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          voluptatibus optio itaque at error alias id atque, qui magni
          exercitationem magnam veniam veritatis ab? Dignissimos earum eius
          cupiditate esse ut!
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FaqSection = () => {
  const faqData = [
    { summary: "Do I need a personal injury report?", detail: "" },
    { summary: "How much is my case worth?", detail: "" },
    { summary: "What should I do right after car accidect", detail: "" },
    { summary: "How much is my case worth?", detail: "" },
  ];

  return (
    <Box sx={{ display: "flex" , marginTop:"197px" }}>
      <Box sx={{ width: "50%" }}>
        <Typography
          sx={{ fontWeight: "600", fontSize: "54px", lineHeight: "74.53px" }}
        >
          FAQ
        </Typography>
        <Typography
          sx={{ fontWeight: "500", fontSize: "18px", lineHeight: "29.25px" }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
          {faqData.map((item) => (
            <AccordionItem summary={item.summary} detail={item.detail} />
          ))}
      </Box>
    </Box>
  );
};

export default FaqSection;
