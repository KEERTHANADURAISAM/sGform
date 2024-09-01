import { DateRangeOutlined } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const DateOption = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
    {" "}
    {/* Align center for better vertical alignment */}
    <TextField
      disabled
      id="standard-disabled"
      defaultValue="month,day,year"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <DateRangeOutlined sx={{ color: "action.active" }} />{" "}
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

export default DateOption