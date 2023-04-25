import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitFeedback } from  "../../redux/slices/feedbackSlice";
import axios from "axios";

const Review = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector((state) => state.feedback);
}

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (success) {
            alert("Feedback submitted successfully!");
            history.push("/");
        } else {
            alert("Failed to submit feedback.");
        }
    };


    return (
        <div>
          <h2>Review Your Feedback</h2>
          <ul>
            <li>Feeling: {feedback.feeling}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Support: {feedback.support}</li>
            <li>Comments: {feedback.comments}</li>
          </ul>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
    


export default Review;