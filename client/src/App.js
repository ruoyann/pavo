import "./App.css";
import Homepage from "./pages/homepage/homepage";
import WaitingRoomPage from "./pages/roomPage/RoomPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyItems: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Homepage />
          </div>
        </Route>
        <Route path="/room/:roomCode">
          <WaitingRoomPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
