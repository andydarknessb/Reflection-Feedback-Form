import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {
    const feedback = useSelector((state) => state);
    const history = useHistory();

    const handleSubmit = async () => {
        try {
            await axios.post("/api/feedback", feedback);
            history.push("/success");
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
    };
}

return (
    <div className={StyleSheet.container}>
        <h2>Review Your Feedback</h2>
        <div className={StyleSheet.feedback}>
            <p>Feeling: {feedback.feeling}</p>
        </div>
        <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
);

export default Review;