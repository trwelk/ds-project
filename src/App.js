import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
import ProductListing from './components/products/ProductListing'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={ProductListing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
