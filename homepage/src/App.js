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
import Typography from '@mui/material/Typography';

function handleSpeedDial (e,operation){
  e.preventDefault();
  if(operation=="Me"){
    console.log("me")
  }else if(operation=="School"){
    //do something else
  }else if(operation=="Work"){
    //do something else
  }
  // setOpen(!open);// to close the speed dial, remove this line if not needed.
};

const actions = [
  { icon: <FaceIcon />, name: 'Me' },
  { icon: <SchoolIcon />, name: 'School' },
  { icon: <WorkIcon />, name: 'Work' },
];

const paper = (
  <Paper sx={{ position: 'absolute', width: 2/5, height: 2/3, m: 2 }} elevation={22}>
      <Typography sx={{ m: 1 }} variant="h6" component="div" gutterBottom>
        Hi, I'm Jack
      </Typography>
  </Paper>
);



const speed_dial = (
  <SpeedDial
    ariaLabel="Nav"
    sx={{ position: 'absolute', bottom: 15, right: 15 }}
    icon={<SpeedDialIcon />}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={(e) => {
          handleSpeedDial(e,action.name)
        }}

      />
    ))}
  </SpeedDial>
)

class Homepage extends React.Component {



  render() {
    return(
      <div id="root">
        {paper}
        {speed_dial}
      </div> );
  }

}

export default Homepage;
