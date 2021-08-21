import Topbar from "./componets/Topbar/Topbar";
import Home from "./componets/pages/home/Home";
import Single from "./componets/pages/single/Single";
import Write from "./componets/pages/write/Write";
import Settings from "./componets/pages/settings/Settings";
import Login from "./componets/pages/login/Login";
import Register from "./componets/pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar/>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/Register">{ user ? <Home />: <Register />}</Route>
          <Route path="/Login">{ user ? <Home />: <Login />}</Route>
          <Route path="/Write">{ user ? <Write />: <Register />}</Route>
          <Route path="/Settings">{ user ? <Settings />: <Register />}</Route>
          <Route path="/Post/:postId">
              <Single />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
