import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";

const CommentsForm = () => {
    const [comments, setCommentsValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setComments(comments));
        history.push("/review");
    };

        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="comments">Comments:</label>
                    <textarea
                    id="comments"
                    value={comments}
                    onChange={(event) => setCommentsValue(event.target.value)}
                    />
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    };


export default CommentsForm;