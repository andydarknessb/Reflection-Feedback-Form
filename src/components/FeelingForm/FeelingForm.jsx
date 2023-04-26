import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFeeling } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
  } from "@mui/material";

    const FeelingForm = () => { // Component for the feeling form
    const [feeling, setFeelingValue] = useState(''); // Local state for the feeling value
    const dispatch = useDispatch(); // useDispatch hook to dispatch the feeling value to Redux store
    const history = useHistory(); // useHistory hook to navigate between routes
  
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        if (feeling === "") { // If no value is entered
            alert("Please enter a value."); // Show an alert to enter a value
          } else if (feeling >= 1 && feeling <= 5) { // If value is between 1 and 5 (inclusive)
            dispatch(setFeeling(feeling)); // Dispatch the feeling value to the Redux store
          history.push("/understanding"); // Navigate to the next page
        } else {
          alert("Please enter a value between 1 and 5"); // If value is not between 1 and 5, show an alert
        }
      };
  
      return (
        <Card>
          <CardContent>
            <Typography variant="h5">How are you feeling today?</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                type="number"
                name="feeling"
                value={feeling}
                onChange={(event) => setFeelingValue(event.target.value)}
                label="Feeling"
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
                </Box>
              </form>
            </CardContent>
          </Card>
        );
      };
    

  export default FeelingForm;