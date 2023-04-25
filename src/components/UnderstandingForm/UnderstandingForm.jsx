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
        if(understanding >= 1 && understanding <= 5 {
            dispatch(setUnderstanding)(understanding));
            history.push("/support");
    } else {
        alert("Please provide a vald score between 1 and 5. ");
     }
    };
    
