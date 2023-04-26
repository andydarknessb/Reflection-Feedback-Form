import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../../redux/slices/feedbackSlice";
import { useHistory } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
  } from "@mui/material";
  

const CommentsForm = () => {
    const [comments, setCommentsValue] = useState(""); // Define state variables for comments and useDispatch and useHistory hooks
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => { //Handle form submission
        event.preventDefault();
        if (comments.trim() === "") { //Validate input before dispatching
            alert("Please enter a comment.");
          } else {
            dispatch(setComments(comments)); // Redirect to review page after dispatching
            history.push("/review");
          }
        };

        const handleBack = () => { // Handle clicking "back" button
            history.goBack();
        }

        return ( //comments form
            <Card>
              <CardContent>
                <Typography variant="h5">Any comments you want to leave?</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    multiline
                    rows={4}
                    name="comments"
                    value={comments}
                    onChange={(event) => setCommentsValue(event.target.value)}
                    label="Comments"
                    variant="outlined"
                    margin="normal"
                    fullWidth
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
export default CommentsForm;