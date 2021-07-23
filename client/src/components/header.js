import React from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/pavo_logo.svg";
import { useHistory } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#ff5138",
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleExit = () => {
    if (window.confirm("Do you want to go home?")) {
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{ backgroundColor: "#f3f5f8" }}
        elevation={1}
      >
        <Toolbar>
          <img
            src={Logo}
            style={{ maxWidth: 50 }}
            className="img"
            onClick={() => handleExit()}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
