import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Modal from './components/Modal';
import Cart from './components/Cart';
import Details from './components/Details';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/details" component={Details} />
          <Route exact path="/" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
