import { Button, Card, CardActions, CardContent, Divider, FormControlLabel, IconButton, Input, Switch, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import FormOptions from './FormOptions';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Padding } from '@mui/icons-material';
import SectionAppBar from './SectionAppBar';

const MainCard = () => {
    
  return (
    <Card sx={{ minWidth: 205 ,maxWidth: '100%', borderLeft: 5,borderColor: 'secondary.main'}}>
    <CardContent sx={{display:"flex",gap:3}}>
    <TextField id="standard-basic" label="Question" variant="filled" style = {{width: 350}}/>
    <ImageIcon size="small"/>
    <FormOptions/>
    </CardContent>
    <Divider/>
    <CardActions style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
    <Tooltip title="Duplicate">
  <IconButton>
  <ContentCopyIcon size="small"/>
  </IconButton>
  </Tooltip>
  <Tooltip title="Delete">
  <IconButton>
  <DeleteOutlineIcon size="small"/>
  </IconButton>
  </Tooltip>

<Divider orientation="vertical" flexItem />
<FormControlLabel label="Required" control={<Switch />}  required  />
<Tooltip title="more">
  <IconButton>
  <MoreVertIcon size="small"/>
  </IconButton>
  </Tooltip>

    </CardActions>
   
  </Card>
  )
}

export default MainCard
