import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Input from "./input"
import End from "./end"



export default class App extends Component {

  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="page-wrapper">
            <Switch>
              <Route exact path="/" component={Input} />
              {/* <Route path="/input" component={Input} /> */}
              <Route path="/end" component={End} />           
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
