import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressBar = (props) => {
  return (
    
<>
<div class="progress">
  <div class="progress-bar" role="progressbar" style={{width:`${Math.round(props.value)}%`}}
     aria-valuenow={Math.round(props.value)} aria-valuemin="0" aria-valuemax="100">{Math.round(
          props.value
        )}%</div>
</div>

{/* <div class="progress">
  <div class="progress-bar" role="progressbar" style={{width:`${Math.round(props.value)}%`}}
     aria-valuenow={Math.round(props.value)} aria-valuemin="0" aria-valuemax="100">{{width:`${Math.round(props.value)}%`}}</div>
</div> */}

{/* <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box> */}
</>
   
   
  );
}

export default ProgressBar;