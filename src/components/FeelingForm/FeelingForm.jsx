import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeeling } from "../../redux/action";
import { useHistory } from "react-router-dom";
import styles from "./FeelingForm.module.css";

function FeelingForm() {
    const [feeling, setFeelingState] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling >= 1 && feeling <=5) {
        dispatch(setFeeling(feeling));
        history.push("/nextForm");
        } else {
            alert("Please provide a valid scor between 1 and 5.");
        }
    };
}

return (
    <div className={styles.container}>
        <h2>How are you feeling today?</h2>
        <form onSubmit={handleSubmit}>
            <input 
             type="number"
             min="1"
             max="5"
             value={feeling}
             onChange={(e) => setFeelingState(e.target.value)}
             required
            />
            <button type="sumbit">Next</button>
        </form>
    </div>
);

export default FeelingForm;