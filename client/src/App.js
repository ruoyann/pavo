import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import CreateClassroomPage from "./pages/createClassroomPage/createClassroomPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/createClassroom">
            <CreateClassroomPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
