import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFeedback } from '../../redux/slices/feedbackSlice';

const SubmissionSuccess = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNewSurvey = () => {
        dispatch(resetFeedback());
        history.push('/feeling');
    };

    return (
        <div>
            <h1>Thank you for your feedback!</h1>
            <button onClick={handleNewSurvey}>Take a New Survey</button>
        </div>
    );
};

export default SubmissionSuccess;