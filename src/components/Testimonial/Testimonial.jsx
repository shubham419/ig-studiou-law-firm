import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BackArrow from "../../assets/back-arrow.png"
import FrontArrow from "../../assets/front-arrow.png"
import styles from "./Testimonial.module.css"
import pic1 from "../../assets/profile-img/pic-5.png"
import pic2 from "../../assets/profile-img/pic-4.png"
import pic3 from "../../assets/profile-img/pic-6.png"
import TestimonialCard from "./TestimonialCard";


const Testimonial = () => {
  return (
    <Box className={styles.testimonialWrapper} marginTop="86px">
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "600",
            fontSize: "54px",
            lineHeight:"77.23px"
          }}
        >
          What says our<br/>happy Clients
        </Typography>

          <Stack direction="row">
            <img src={BackArrow} alt="back arrow" />
            <img src={FrontArrow} alt="Front arrow" />
          </Stack>

      </Box>
      <Box sx={{display:"flex", marginTop: "104px" }}>
          <TestimonialCard name="Jane Cooper" occupation="Ceo of Hunt" img={pic1}></TestimonialCard>
          <TestimonialCard name="Devon Lane" occupation="Ceo of Hunt" img={pic2}></TestimonialCard>
          <TestimonialCard name="Robert Fox" occupation="Ceo of Hunt" img={pic3}></TestimonialCard>
      </Box>
    </Box>
  );
};

export default Testimonial;
