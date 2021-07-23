import "./App.css";
import Homepage from "./pages/homepage/homepage";
import Header from "./components/header";
import CreateClassroomPage from "./pages/createClassroomPage/createClassroomPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
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
