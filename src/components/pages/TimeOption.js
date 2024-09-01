import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const TimeOption = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
    {" "}
    {/* Align center for better vertical alignment */}
    <TextField
      disabled
      id="standard-disabled"
      defaultValue="Time"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <QueryBuilderIcon sx={{ color: "action.active" }} />{" "}
            {/* Use DateRangeIcon here */}
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputBase-root": {
          marginTop: "8px", // Adjust vertical alignment if needed
        },
      }}
    />
  </Box>
  )
}

export default TimeOption