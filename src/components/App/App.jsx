import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import feelingForm from "../FeelingForm/FeelingForm";
import Review from "../Review/Review";
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
