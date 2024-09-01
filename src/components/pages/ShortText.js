import { Box, TextField } from '@mui/material'
import React from 'react'

const ShortText = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start', mt:2}}>
    <TextField
      disabled
      id="standard-disabled"
      defaultValue="short answer text"
      variant="standard"
    />
  </Box>
  )
}   

export default ShortText

