import React, { useState } from "react";
import ClassroomLogin from "./components/classroomlogin";
import MakeClassroomButton from "./components/makeClassroomButton";
import UsernameInput from "./components/usernameInput";
import Footer from "../../components/footer";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Zoom } from "@material-ui/core";

import Logo from "../../assets/pavo_logo.svg";

import { useSound } from "use-sound";
import sound from "../../assets/peacockSound.m4a";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }
  }
}));

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [play] = useSound(sound);

  const classes = useStyles();

  const handleScream = (e) => {
    if (e.detail === 5) {
      play();
    }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
    <Zoom in={true}>
      <Paper elevation={2} className={classes.paper}>
      <img
        src={Logo}
        alt="Peacock!"
        onClick={(e) => handleScream(e)}
        style={{ width: "400px", height: "300px" }}
      />
      <UsernameInput setUsername={setUsername} invalidUsername={invalidUsername} />
      <ClassroomLogin username={username} setInvalidUsername={setInvalidUsername} />
      <MakeClassroomButton username={username} setInvalidUsername={setInvalidUsername} />
      </Paper>
      </Zoom>

      <Footer />
    </Box>
  );
};

export default Homepage;
