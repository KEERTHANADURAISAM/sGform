
import { Box, Container, FormLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const LinearScale = () => {
  return (
   <Container sx={{display:'flex'}}>
    <Box>
    <Box>
        <Select>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        </Select>
    </Box>
    <Box>
        <Select>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        </Select>
    </Box>
    </Box>
    <Box>
    <FormLabel value="" label="Label (optional)"/>
    <FormLabel value="" label="Label (optional)"/>
    </Box>

   </Container>
  )
}

export default LinearScale