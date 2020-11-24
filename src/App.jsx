import React, { Component} from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import '../node_modules/antd/dist/antd.css'

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
        <Switch>
          {
            routes.map((item) => {
              return <Route {...item} key={item.path} ></Route>
            })
          }
          </Switch>
          </Router>
      </div>
    );
  }
}
