import { Close } from '@mui/icons-material'
import { Box, IconButton, Radio, TextField, Tooltip } from '@mui/material'
import ImageIcon from "@mui/icons-material/Image";
import React from 'react'

const MultipleChoice = () => {
  return (
    <Box>
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
    <Radio sx={{ mt: 2 }} />
    <TextField
      id="standard-basic"
      label="Option 1"
      variant="standard"
      fullWidth
      sx={{
        "& .MuiInput-underline:before": {
          borderBottom: "none", // Hide the bottom line by default
        },
        "&:hover .MuiInput-underline:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)", // Show the bottom line on hover
        },
        "& .MuiInput-underline:after": {
          borderBottom: "2px solid #3f51b5", // Style when active (focused)
        },
      }}
    />
  </Box>

  {/* Add option or add other */}
  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
    <Radio sx={{ mt: 2 }} />
    <TextField
      id="standard-basic"
      label="Add option or add other"
      variant="standard"
      fullWidth
      sx={{
        "& .MuiInput-underline:before": {
          borderBottom: "none", // Hide the bottom line by default
        },
        "&:hover .MuiInput-underline:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)", // Show the bottom line on hover
        },
        "& .MuiInput-underline:after": {
          borderBottom: "2px solid #3f51b5", // Style when active (focused)
        },
      }}
    />
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <Tooltip title="Add image">
        <IconButton>
          <ImageIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Remove">
        <IconButton>
          <Close />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
  </Box>
  )
}

export default MultipleChoice
