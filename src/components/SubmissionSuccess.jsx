import React from 'react';
import { useHistory } from 'react-router-dom';

const SubmissionSuccess = () => {
    const history = useHistory();

    const handleNewSurvey = () => {
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