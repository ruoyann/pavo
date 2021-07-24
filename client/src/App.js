import "./App.css";
import Homepage from "./pages/homepage/homepage";
import RoomPage from "./pages/roomPage/RoomPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightRegular: 500,
    body1: {
      fontSize: '1.1rem',
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/room/:roomCode" component={RoomPage} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
