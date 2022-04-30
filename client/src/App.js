import "./App.scss";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import ReservationInfo from "./components/ReservationInfo/ReservationInfo";
import Contact from "./components/Contact/Contact";
import "antd/dist/antd.css";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/tables" component={ReservationInfo} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
