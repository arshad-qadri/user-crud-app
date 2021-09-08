import { Switch, Route } from "react-router";
import "./App.css";
import Edit from "./components/Edit";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Forms} />
        <Route path="/userlist" component={UserList} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </>
  );
}

export default App;
