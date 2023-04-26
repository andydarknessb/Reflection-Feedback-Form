import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSupport } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";

const SupportForm = () => {
    const [support, setSupportValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (support === "") {
            alert("Please enter a value.");
          } else if (support >= 1 && support <= 5) {
            dispatch(setSupport(support));
            history.push("/comments");
          } else {
            alert("Please provide a valid score between 1 and 5.");
          }
        };

    const handleBack = () => {
        history.goBack();
      };

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="support">Support:</label>
                <input 
                type="number"
                id="support"
                value={support}
                onChange={(event) => setSupportValue(event.target.value)}
                />
                <button type="submit">Next</button>
                <button type="button" onClick={handleBack}>Back</button>
            </form>
        </div>
    );
};

export default SupportForm;