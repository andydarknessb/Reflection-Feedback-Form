import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUnderstanding } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";

const UnderstandingForm = () => {
    const [understanding, setUnderstandingValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(understanding >= 1 && understanding <= 5) {
            dispatch(setUnderstanding(understanding));
            history.push("/support");
    } else {
        alert("Please provide a valid score between 1 and 5. ");
     }
    };
    
    return (
        <div>
        <h2>How well are you understanding the content</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="understanding">Understanding:</label>
        <input 
            type="number"
            id="understanding"
            value={understanding}
            onChange={(event) => setUnderstandingValue(event.target,value)}
            />
            <button type="submit">Next</button>
            </form>
            </div>
          );
    };

    export default UnderstandingForm;
