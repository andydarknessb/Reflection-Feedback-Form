import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSupport } from "../../redux/slices/feedbackSlice";
import { useHistor } from "react-router-dom";

const SupportForm = () => {
    const [support, setSupportValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (support >= 1 && support <= 5) {
            dispatch(setSupport(support));
            history.push("/comments");
        } else {
            alert("Please provide a valid score between 1 and 5.");
        }
    };

    return (
        <div>
            <h2>How well are you being supported?</h2>
            <form onSubmit={handleSubmit}></form>
        </div>
    )
}