import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Footer.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box
      height="367px"
      marginTop="242px"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className = {styles.footerWrapper}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <img src={Logo} alt="logo" />

        <Stack direction="row" spacing={4}>
          <Typography
            sx={{ fontWeight: "400px", fontSize: "16px", lineHeight: "24px" }}
          >
            Home
          </Typography>
          <Typography
            sx={{ fontWeight: "400px", fontSize: "16px", lineHeight: "24px" }}
          >
            Attorneys
          </Typography>
          <Typography
            sx={{ fontWeight: "400px", fontSize: "16px", lineHeight: "24px" }}
          >
            Practice Areas{" "}
          </Typography>
          <Typography
            sx={{ fontWeight: "400px", fontSize: "16px", lineHeight: "24px" }}
          >
            About Us
          </Typography>
        </Stack>

        <stack direction="row" spacing={3}>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <PinterestIcon />
        </stack>
      </Box>
      <Stack direction="row" marginTop="100px" spacing={3}>
        <Typography
          sx={{ fontWeight: "400px", fontSize: "14px", lineHeight: "20px" }}
        >
          © 2020 Acme. All right reserved.
        </Typography>
        <Typography
          sx={{ fontWeight: "400px", fontSize: "14px", lineHeight: "20px" }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{ fontWeight: "400px", fontSize: "14px", lineHeight: "20px" }}
        >
          Terms of Service
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
