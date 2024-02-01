import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import React from "react";

const NewsLetter = () => {
  return (
    <Box sx={{ padding: "93px 280px" , backgroundColor:"#474747", marginTop:"215px"}}>
      <Typography
        sx={{
          fontWeight: "500px",
          marginBottom: "42px",
          fontSize: "55px",
          lineHeight: "75.53px",
        }}
      >
        Subscribe Our Newsletter
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          color="secondary"
          sx={{
            "& .MuiInputBase-input": {
              color: "black",
            },
            "& .MuiFilledInput-root": {
              backgroundColor: "lightgray",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            },
            "& .MuiFormLabel-root": {
              color: "black",
            },
          }}
          label="name"
          variant="filled"
        />

        <TextField
          color="secondary"
          sx={{
            "& .MuiInputBase-input": {
              color: "black",
            },
            "& .MuiFilledInput-root": {
              backgroundColor: "lightgray",
            },
            "& .MuiFormLabel-root": {
              color: "black",
            },
          }}
          label="email"
          variant="filled"
        />
        <Button color="secondary" 
         sx={{
            marginTop: "22px",
            width: "161px",
            height: "56px",
            backgroundColor: "#E3B748", 
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            color: "Black",
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default NewsLetter;
