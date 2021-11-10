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
import FourOhFour from "./components/FourOhFour";

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
          <Route path="/events/bucketlist" exact>
            <BucketList />
          </Route>
          <Route path="/events/search" exact>
            <Homepage />
          </Route>
          <Route path="/">
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
