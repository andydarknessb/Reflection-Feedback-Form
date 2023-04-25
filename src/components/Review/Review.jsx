import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitFeedback } from  "../../redux/slices/feedbackSlice";
import axios from "axios";

const Review = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector((state) => state.feedback);


    const handleSubmit = async () => {
        const success = await dispatch(submitFeedback(feedback));
        if (success) {
            history.push('/submission-success');
        } else {
            alert("Failed to submit feedback. Please try again.");
        }
    };


    return (
        <div>
          <h2>Review Your Feedback</h2>
          <p>Feeling: {feedback.feeling}</p>
          <p>Understanding: {feedback.understanding}</p>
          <p>Support: {feedback.support}</p>
          <p>Comments: {feedback.comments}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
};
    
export default Review;