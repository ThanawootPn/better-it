import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './contents/Home';
import DataAnalytics from './contents/DataAnalytics';
import Entites from './contents/Entites';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataAnalytics" component={DataAnalytics} />
          <Route path="/Entites" component={Entites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
