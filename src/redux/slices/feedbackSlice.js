import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const feedbackSlice = createSlice({});

export const submitFeedback = (feedback) => async (dispatch) => {
    try {
        const response = await axios.post("/api/feedback", feedback);
        if (response.status === 201) {
            return true;
        } else {
            console.error("Failed to submit feedback:", response.status, response.data);
            return false;
        }
    } catch (error) {
        console.error("Failed to submit feedback:",error);
        return false;
    }
};

export default feedbackSlice.reducer;