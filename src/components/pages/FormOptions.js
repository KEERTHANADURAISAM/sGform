import React, { useState } from 'react';
import { Select, MenuItem, ListItemIcon, ListItemText, Divider, Box } from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import AppsIcon from '@mui/icons-material/Apps';
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const FormOptions = () => {
  const [choices, setChoices] = useState('Short answer');

  const handleChange = (event) => {
    setChoices(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Select
        value={choices}
        onChange={handleChange}
        sx={{ width: 220, maxWidth: '100%', display: 'flex', alignItems: 'center' }}
      >
        <MenuItem value="Short answer">
          <Box display="flex" alignItems="center">
            <ShortTextIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Short answer</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Paragraph">
          <Box display="flex" alignItems="center">
            <ViewHeadlineIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Paragraph</ListItemText>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem value="Multiple choice">
          <Box display="flex" alignItems="center">
            <RadioButtonCheckedIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Multiple choice</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Checkboxes">
          <Box display="flex" alignItems="center">
            <CheckBoxIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Checkboxes</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Dropdown">
          <Box display="flex" alignItems="center">
            <ArrowDropDownCircleIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Dropdown</ListItemText>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem value="File upload">
          <Box display="flex" alignItems="center">
            <CloudDoneIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>File upload</ListItemText>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem value="Linear scale">
          <Box display="flex" alignItems="center">
            <LinearScaleIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Linear scale</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Multiple choice grid">
          <Box display="flex" alignItems="center">
            <DragIndicatorRoundedIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Multiple choice grid</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Checkbox grid">
          <Box display="flex" alignItems="center">
            <AppsIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Checkbox grid</ListItemText>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem value="Date">
          <Box display="flex" alignItems="center">
            <InsertInvitationIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Date</ListItemText>
          </Box>
        </MenuItem>
        <MenuItem value="Time">
          <Box display="flex" alignItems="center">
            <QueryBuilderIcon fontSize="small" />
            <ListItemText sx={{ marginLeft: 1 }}>Time</ListItemText>
          </Box>
        </MenuItem>
      </Select>
    </Box>
  );
};

export default FormOptions;
