import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUnderstanding } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
  } from "@mui/material";

const UnderstandingForm = () => {
    const [understanding, setUnderstandingValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (understanding === "") {
            alert("Please enter a value.");
          } else if (understanding >= 1 && understanding <= 5) {
            dispatch(setUnderstanding(understanding));
            history.push("/support");
          } else {
            alert("Please provide a valid score between 1 and 5.");
          }
        };
    const handleBack = () => {
        history.goBack();
    }
    return (
        <Card>
          <CardContent>
            <Typography variant="h5">
              How well are you understanding the content?
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                type="number"
                name="understanding"
                value={understanding}
                onChange={(event) => setUnderstandingValue(event.target.value)}
                label="Understanding"
                variant="outlined"
                margin="normal"
                style={{ width: "12%" }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Next
            </Button>
            <Button onClick={handleBack} variant="outlined" color="secondary">
              Back
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

    export default UnderstandingForm;
