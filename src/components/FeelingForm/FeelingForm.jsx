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

    const FeelingForm = () => {
    const [feeling, setFeelingValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (feeling === "") {
            alert("Please enter a value.");
          } else if (feeling >= 1 && feeling <= 5) {
            dispatch(setFeeling(feeling));
          history.push("/understanding");
        } else {
          alert("Please enter a value between 1 and 5");
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