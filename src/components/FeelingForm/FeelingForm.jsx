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
      dispatch(setFeeling(feeling));
      history.push('/understanding');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="feeling">How are you feeling today?</label>
        <input
          type="number"
          name="feeling"
          value={feeling}
          onChange={(event) => setFeelingValue(event.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    );
  };
  
  export default FeelingForm;