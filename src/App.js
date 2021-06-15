import Navbar from "./Navbar";
import Home from "./Home";
import Createblog from "./Createblog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./BlogDetail";
import Notfound from "./Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Createblog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
