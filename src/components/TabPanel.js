import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && (
          <Box sx={{p: 0, ml: 60}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

export default TabPanel
