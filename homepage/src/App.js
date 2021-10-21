import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';


const actions = [
  { icon: <FaceIcon />, name: 'Me' },
  { icon: <SchoolIcon />, name: 'School' },
  { icon: <WorkIcon />, name: 'Work' },
];

const paper = (
  <Paper sx={{ position: 'relative', left: 30, top: 30, height: 400, width: 500 }} elevation={22}>
    <Box component="svg" sx={{ width: 100 }}>
      Lorem Ipsum
    </Box>
  </Paper>
);


class Homepage extends React.Component {



  render() {
    return(
      // <FormControlLabel
      //   control={<Switch checked={checked} onChange={handleChange} />}
      //   label="Show"
      // />
      //
      // <Box sx={{ display: 'flex' }}>
      //   <Zoom in={checked}>{icon}</Zoom>
      //   <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
      //     {icon}
      //   </Zoom>
      // </Box>
      //
      <Box sx={{}}>
        {paper}
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 15, right: 15 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>);
  }

}

export default Homepage;
