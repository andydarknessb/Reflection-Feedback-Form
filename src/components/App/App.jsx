import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import FeelingForm from "../FeelingForm/FeelingForm";
import UnderstandingForm from "../UnderstandingForm/UnderstandingForm";
import SupportForm from "../SupportForm/SupportForm";
import CommentsForm from "../CommentsForm/CommentsForm";
import Review from "../Review/Review";
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import AdminPage from '../AdminPage/AdminPage';


import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Switch>
        <Route path="/" exact component={FeelingForm} />
        <Route path="/understanding" component={UnderstandingForm}/>
        <Route path="/support" component={SupportForm}/>
        <Route path="/comments" component={CommentsForm} />
        <Route path="/review" component={Review} />
        <Route path="/submission-success" component={SubmissionSuccess}/>
        <Route path="/admin" component={AdminPage}/>
      </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
