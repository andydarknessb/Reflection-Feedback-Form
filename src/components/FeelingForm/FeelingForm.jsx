import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeeling } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";
import styles from "./FeelingForm.module.css";

    const FeelingForm = () => {
    const [feeling, setFeelingValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling >= 1 && feeling <= 5) {
          dispatch(setFeeling(feeling));
          history.push("/understanding");
        } else {
          alert("Please enter a value between 1 and 5");
        }
      };
  
    return (
      <form onSubmit={handleSubmit} className={styles.form} >
        <label htmlFor="feeling" className={styles.label} 
        >How are you feeling today?</label>
        <input
          type="number"
          name="feeling"
          value={feeling}
          onChange={(event) => setFeelingValue(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
            Next</button>
      </form>
    );
  };
  
  export default FeelingForm;