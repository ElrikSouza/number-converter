import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Conversion } from "./conversion-page";
import { ToFloatPage } from "./floats/tofloat-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/float">
          <ToFloatPage />
        </Route>
        <Route path="/">
          <Conversion />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
