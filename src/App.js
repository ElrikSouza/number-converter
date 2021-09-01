import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Conversion } from "./conversion-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Conversion />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
