import logo from './assets/logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import CreateClassroomPage from './pages/createClassroomPage/createClassroomPage'
import RoomPage from './pages/roomPage/RoomPage'
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Header></Header>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/createClassroom">
            <CreateClassroomPage />
          </Route>
          <Route path="/room/:roomCode">
            <RoomPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
