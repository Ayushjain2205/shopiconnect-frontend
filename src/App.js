import "./App.css";
import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Shops from "./components/shops/Shops";
import ShopPage from "./components/shops/ShopPage";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    shops: [],
    shop: {},
  };

  getShop = async (id) => {
    const res = await axios.get(`http://localhost:1337/shops/${id}`);
    this.setState({ shop: res.data });
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:1337/shops?_sort=name");
    this.setState({ shops: res.data });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Shops shops={this.state.shops} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/shop/:id'
                render={(props) => (
                  <ShopPage
                    {...props}
                    getShop={this.getShop}
                    shop={this.state.shop}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
