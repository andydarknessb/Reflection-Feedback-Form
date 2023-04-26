import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFeedback } from '../../redux/slices/feedbackSlice';

const SubmissionSuccess = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewSurvey = () => {
        dispatch(resetFeedback());
        history.push('/');
    };

    return (
        <div>
            <h2>Submission Successful!</h2>
            <p>Your feedback has been submitted.</p>
            <button onClick={handleNewSurvey}>Take a New Survey</button>
        </div>
    );
};

export default SubmissionSuccess;