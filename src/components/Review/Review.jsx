import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitFeedback, resetFeedback } from  "../../redux/slices/feedbackSlice";


const Review = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector((state) => state.feedback);


    const handleSubmit = async () => { // Handle the form submission
        const success = await dispatch(submitFeedback(feedback)); // Dispatch the submitFeedback action to submit the feedback to the server
        if (success) {
            dispatch(resetFeedback()); // If submission is successful, reset the feedback and redirect to the success page
            history.push("/submission-success");
        } else {
            alert("Failed to submit feedback. Please try again."); // If submission fails, show an error message
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