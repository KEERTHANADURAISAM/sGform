import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import React from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ImageIcon from '@mui/icons-material/Image';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import DragHandleIcon from '@mui/icons-material/DragHandle';

const SectionAppBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',  // Center horizontally
        alignItems: 'center',      // Center vertically
        height: '100vh',           // Full height to use all vertical space
        
      }}
    >
      <AppBar
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
          width: '60px',           // Width of the vertical AppBar
          display: 'flex',
          alignItems: 'center',
          borderRadius:3
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column', // Column layout for vertical alignment
            alignItems: 'center',    // Center icons horizontally in the column
            gap: 2,                  // Gap between icons
            height: '100%',          // Full height to utilize all vertical space
            padding: '0',            // Remove default padding
            minWidth: 'auto',        // Prevent default minWidth from stretching
          }}
        >
          <Tooltip title="Add question">
            <IconButton>
              <AddCircleOutlineRoundedIcon size="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Import question">
            <IconButton>
              <UploadFileIcon size="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add title and description">
            <IconButton>
              <FormatSizeIcon size="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add image">
            <IconButton>
              <ImageIcon size="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add video">
            <IconButton>
              <SlideshowIcon size="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add section">
            <IconButton>
              <DragHandleIcon size="small" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SectionAppBar;
