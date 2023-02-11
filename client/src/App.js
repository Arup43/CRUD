import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ReadPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/update/:id" component={UpdatePage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
