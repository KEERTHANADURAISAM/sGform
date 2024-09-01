import { AppBar, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ImageIcon from "@mui/icons-material/Image";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Link } from "react-router-dom";

const SectionAppBar = ({onClick}) => {
  return (
    <Box
      sx={{
        position: "fixed", // Fix to the viewport
        right:'13%', // Align to the right side
        top: '58%', // Center vertically
        transform: 'translateY(-50%)', // Adjust for vertical center alignment
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60px", // Width of the sidebar
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        borderRadius: 3,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column", // Column layout for vertical alignment
          alignItems: "center", // Center icons horizontally in the column
          gap: 2, // Gap between icons
          padding: 0, // Remove default padding
        }}
      >
        <Tooltip title="Add question">
          <Link to="/addform">
          <IconButton onClick={onClick}>
            <AddCircleOutlineRoundedIcon />
          </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Import question">
          <IconButton>
            <UploadFileIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add title and description">
          <IconButton>
            <FormatSizeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add image">
          <IconButton>
            <ImageIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add video">
          <IconButton>
            <SlideshowIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add section">
          <IconButton>
            <DragHandleIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default SectionAppBar;
