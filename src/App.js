import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/navbar/Navbar";
import ChannelDetails from "./components/channels/ChannelDetails";
import CreateChannel from "./components/channels/CreateChannel";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/channel/:id" component={ChannelDetails} />
            <Route exact path="/create" component={CreateChannel} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
