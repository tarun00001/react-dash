import React from 'react'
import {AppBar, Tabs, Tab,Toolbar,IconButton,Box} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import TabPanel from './TabPanel'


 const Nav = () => {
     
    const [value, setValue] = React.useState(0);
    const handleChange = (_, newValue) => setValue(newValue);

    return (
        <>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Box flexGrow={1} />
            <Tabs value={value} onChange={handleChange} textColor="inherit">
              <Tab label="One" />
              <Tab label="Two" />
              <Tab label="Three" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </>
    )
  }


export default Nav