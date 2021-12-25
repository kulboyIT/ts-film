import WelcomeMessage from "./WelcomeMessage";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import { AuthContext } from '../contexts/AuthContext';


const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //styles
  const classes = useStyles();

  //context
    const {lastTime, status} = useContext(ProgressContext)
    const {theme} = useContext(ThemeContext)
    const {authInfo: {isAuthenticated}, toggleAuth} = useContext(AuthContext)

  //state
  const [position, setPosition]: any = useState<string>("Full-stack developer");

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const [loginOpen, setLoginOpen] = useState(false);

  //useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (
    event: SelectChangeEvent<{
      value: unknown;
      name: string;
    }>
  ) => setPosition(event.target.value);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6"> My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip label = {`Last time working on this project: ${lastTime} - Status: ${status}`} />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  className={classes.positionSelect}
                  onChange={handleChange}
                >
                  <MenuItem value="Full-stack Developer">
                    Full-stack developer
                  </MenuItem>
                  <MenuItem value="Front-end Developer">
                    Front-end developer
                  </MenuItem>
                  <MenuItem value="Back-end Developer">
                    Back-end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained" color="success" onClick = { isAuthenticated? toggleAuth.bind(this, '') : setLoginOpen.bind(this,true)}>
              {" "}
              {isAuthenticated ?  "Logout" : "Login"}
            </Button>
          </Box>
          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
