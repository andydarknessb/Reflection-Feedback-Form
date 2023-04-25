import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import feelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportForm from "../SupportForm/SupportForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import Review from "../Review/Review";
import axios from 'axios';
import './App.css';

function App() {

  return (
    <Provider store={store}>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Switch>
        <Route path="/" exact component={FeelingForm} />
        <Route path= "/review " component={Review} />
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
