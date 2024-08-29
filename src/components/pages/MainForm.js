import {
  Close,
  DateRangeOutlined,
  Image,
  TimeToLeaveOutlined,
} from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Container,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Radio,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const MainForm = () => {
  return (
    <Container
      sx={{
        mt: 2, // Margin-top for spacing
      }}
    >
      {/* short Answer */}
      <Box>
        <TextField
          disabled
          id="standard-disabled"
          defaultValue="short answer text"
          variant="standard"
        />
      </Box>

      {/* _________________________________________________________________________________________________ */}
      {/*  long ans text*/}
      <Box>
        <TextField
          disabled
          id="standard-disabled"
          defaultValue="long answer text"
          variant="standard"
        />
      </Box>
      {/* _________________________________________________________________________________________________ */}

      {/* Radio */}

      {/* Option 1 */}
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
              <Image />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove">
            <IconButton>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {/* ___________________________________________________________________________________________________ */}
     
      {/*checkboxes */}

      <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
        <Checkbox sx={{ mt: 2 }} />
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
        <Checkbox sx={{ mt: 2 }} />
        <TextField
          id="standard-basic"
          label="Add option or add other"
          variant="standard"
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
              <Image />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove">
            <IconButton>
              <Close />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* ____________________________________________________________________________________________________ */}

      {/* Dropdown */}

      <Box sx={{ display: 'flex', alignItems: 'center',gap:1}}>
      <List>
        {/* Item 1 */}
        <ListItem>
          <ListItemText primary="1." sx={{pt:2}}/> {/* Add number here */}
          <TextField
            id="standard-basic"
            label="Option 1"
            variant="standard"
            fullWidth
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: 'none', // Hide the bottom line by default
              },
              '&:hover .MuiInput-underline:before': {
                borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // Show the bottom line on hover
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #3f51b5', // Style when active (focused)
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
          <ListItemText primary="2." sx={{pt:2}}/> {/* Add number here */}
          <TextField
            id="standard-basic"
            label="Option 2"
            variant="standard"
            fullWidth
            sx={{
              '& .MuiInput-underline:before': {
                borderBottom: 'none', // Hide the bottom line by default
              },
              '&:hover .MuiInput-underline:before': {
                borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // Show the bottom line on hover
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #3f51b5', // Style when active (focused)
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
      
      
      
      
      
      
      
      
      
      
      {/* DATE */}
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

      {/* _________________________________________________________________________________________________ */}

      {/* Time */}
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
    </Container>
  );
};

export default MainForm;
