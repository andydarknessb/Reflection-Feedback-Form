import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSupport } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
  } from "@mui/material";

const SupportForm = () => {
    const [support, setSupportValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (support === "") {
            alert("Please enter a value.");
          } else if (support >= 1 && support <= 5) {
            dispatch(setSupport(support));
            history.push("/comments");
          } else {
            alert("Please provide a valid score between 1 and 5.");
          }
        };

    const handleBack = () => {
        history.goBack();
      };

      return (
        <Card>
          <CardContent>
            <Typography variant="h5">How well are you being supported?</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                type="number"
                name="support"
                value={support}
                onChange={(event) => setSupportValue(event.target.value)}
                label="Support"
                variant="outlined"
                margin="normal"
                style={{ width: "8%" }}
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
              
export default SupportForm;