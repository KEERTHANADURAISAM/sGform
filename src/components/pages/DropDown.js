import { Close, Image } from '@mui/icons-material'
import { Box, Checkbox, Container, IconButton, List, ListItem, ListItemText, TextField, Tooltip } from '@mui/material'
import React from 'react'

const DropDown = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <List>
          {/* Item 1 */}
          <ListItem>
            <ListItemText primary="1." sx={{ pt: 2 }} /> {/* Add number here */}
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
            <Tooltip title="Remove">
              <IconButton>
                <Close />
              </IconButton>
            </Tooltip>
          </ListItem>

          {/* Item 2 */}
          <ListItem>
            <ListItemText primary="2." sx={{ pt: 2 }} /> {/* Add number here */}
            <TextField
              id="standard-basic"
              label="Option 2"
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
            <Tooltip title="Remove">
              <IconButton>
                <Close />
              </IconButton>
            </Tooltip>
          </ListItem>
        </List>
      </Box>
  )
}

export default DropDown
