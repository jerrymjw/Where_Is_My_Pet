"use client";

import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const missingPetPage = () => {
  return (
    <div>
      <Typography variant="h2" align="center">
        Send Post
      </Typography>

      <Box display="flex" justifyContent="center" width="100%">
        <Button
          variant="contained"
          style={{
            width: "80%",
            paddingTop: "200px",
            paddingBottom: "200px", // 调整为适当的值
            fontSize: "48px", // 增加字体大小
            lineHeight: "1", // 根据需要调整行高以垂直居中
            textAlign: "center", // 确保文字水平居中
          }}
        >
          I lost my pet
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" width="100%">
        <Button
          variant="contained"
          style={{
            width: "80%",
            paddingTop: "200px",
            paddingBottom: "200px", // 调整为适当的值
            fontSize: "48px", // 增加字体大小
            lineHeight: "1", // 根据需要调整行高以垂直居中
            textAlign: "center", // 确保文字水平居中
          }}
        >
          I saw a pet
        </Button>
      </Box>
    </div>
  );
};

export default missingPetPage;
