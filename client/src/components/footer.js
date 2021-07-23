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

const Footer = () => {
  const classes = useStyles();
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="fixed-bottom" style={{ paddingTop: "70px" }}>
      <p style={{ textAlign: "center", fontSize: "13px" }}>
        A whiteboard for a fun and interactive classroom experience
      </p>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        Contact us: exclusivepeacock31@gmail.com
      </p>
    </div>
  );
};

export default Footer;
