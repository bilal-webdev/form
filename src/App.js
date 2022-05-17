import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserForm}/>
        <Route exact path="/registered" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
