import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setFeeling: (state, action) => {
            state.feeling = action.payload;
        },
        setUnderstanding: (state, action) => {
            state.understanding = action.payload;
        },
        setSupport: (state, action) => {
            state.support = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        resetFeedback: () => initialState,
    },
});

export const {
    setFeeling,
    setUnderstanding,
    setSupport,
    setComments,
    resetFeedback,
} = feedbackSlice.actions;


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