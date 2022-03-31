import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
          <Switch>
          <Route exact path="/"  component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route component={NotFound}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
