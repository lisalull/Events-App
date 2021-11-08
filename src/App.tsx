import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SearchForm from "./components/SearchForm";
import Details from "./components/Details";
import BucketList from "./components/BucketList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/events/:id/details" exact>
            <Details />
          </Route>
          <Route path="/events/bucketlist">
            <BucketList />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
