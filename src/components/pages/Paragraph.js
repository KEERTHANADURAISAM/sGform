import { Box, TextField } from '@mui/material'
import React from 'react'

const Paragraph = () => {
  return (
    <Box>
    <TextField
      disabled
      id="standard-disabled"
      defaultValue="long answer text"
      variant="standard"
    />
  </Box>

  )
}

export default Paragraph
