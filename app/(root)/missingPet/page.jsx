"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const options = ["1KM", "2KM", "3KM", "4KM", "5KM+"];
const itemData = [
  {
    img: "assets/images/cat01.jpeg",
    title: "Cat",
  },
  {
    img: "assets/images/dog02.jpeg",
    title: "Dog",
  },
];

const missingPetPage = () => {
  // Initialize state to track active items
  const [activeItems, setActiveItems] = useState({});

  const handleSelect = (item) => {
    // Toggle the active state for the clicked item
    setActiveItems((prev) => ({ ...prev, [item.title]: !prev[item.title] }));
  };
  return (
    <div>
      <Typography variant="h2" align="center">
        Missing a pet
      </Typography>

      <Typography required variant="h6">
        Where did you lost the pet?
      </Typography>
      <TextField
        required
        id="filled-basic"
        label="Type the location"
        variant="filled"
        fullWidth
      />

      <Typography required variant="h6">
        How long has it been?
      </Typography>
      <TextField
        required
        id="filled-basic"
        label="Type the time"
        variant="filled"
        fullWidth
      />

      <Box display="flex" width="100%">
        <Box
          width="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography required variant="h6" width="100%">
            Alert Range:
          </Typography>
        </Box>
        <Box width="50%">
          <Autocomplete
            width="100%"
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Distance" variant="outlined" />
            )}
          />
        </Box>
      </Box>
      <Typography required variant="h6">
        Description (optional)
      </Typography>

      <TextField
        label="Description"
        multiline
        rows={4} // Number of rows to display when multiline option is set to true
        variant="outlined" // Style of the text field
        fullWidth // Optional: makes the text field take the full width of its parent container
        placeholder="Enter your description here"
      />

      <Typography required variant="h6">
        Pet
      </Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ position: "relative" }}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <IconButton
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: activeItems[item.title] ? "blue" : "white",
              }}
              aria-label={`select ${item.title}`}
              onClick={() => handleSelect(item)}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </ImageListItem>
        ))}
      </ImageList>

      <div>
        <Button variant="contained">Confirm</Button>
      </div>
    </div>
  );
};

export default missingPetPage;
