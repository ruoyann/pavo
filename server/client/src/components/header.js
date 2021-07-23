import React from "react-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import EventAvailableIcon from "@material-ui/icons/EventAvailable";

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
  const classes = useStyles();
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{ backgroundColor: "#f3f5f8" }}
        elevation={1}
      >
        <Toolbar>
          <Link to="/" className={classes.title} style={navStyle}>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ color: "#ff5138" }}
            >
              Peacock
            </Typography>
          </Link>
          <Link style={navStyle} to="/help">
            <Button style={{ color: "#ff5138" }}>Help</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;