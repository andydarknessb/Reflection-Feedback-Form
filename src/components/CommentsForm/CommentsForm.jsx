import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";

const CommentsForm = () => {
    const [comments, setCommentsValue] = useState("");
    const disptach = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatchEvent(setComments(comments));
        history.push("/review");
    };
}