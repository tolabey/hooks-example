import React from 'react';
import './App.css';
import ShoppingApp from "./components/ShoppingApp";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SaveProduct from "./components/saveProduct/SaveProduct";
import Notification from "./commons/notifications/Notification";
import {connect} from "react-redux";
import I from 'immutable';

// conditinally rendering,
// React-router-dom
// redux
// immutable
// useState
// functional components
// Bem
// flex


function App(props) {


  return (
    <div className="App">

      <Notification
        message={props.notificationMessage}
      />

      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ShoppingApp}/>
          <Route exact path={'/save-product'} component={SaveProduct}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


function mapStateToProps(store) {
  return {
    notificationMessage: store.get('notificationMessage', I.Map()),
  }
}

export default connect(mapStateToProps)(App);
