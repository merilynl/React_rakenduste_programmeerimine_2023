import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"

function FeedbackForm() {
  const [feedback, setFeedback] = useState("")
  const [submittedFeedback, setSubmittedFeedback] = useState([])

  const handleFeedbackChange = e => {
    setFeedback(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Add the feedback to the submittedFeedback array
    setSubmittedFeedback([...submittedFeedback, feedback])
    // Clear the input field after submission
    setFeedback("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em"
        }}
      >
        <TextField
          label="Feedback"
          variant="outlined"
          multiline
          rows={4}
          value={feedback}
          onChange={handleFeedbackChange}
          style={{ width: 440 }}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Submit Feedback
        </Button>

        {/* Display submitted feedback */}
        {submittedFeedback.length > 0 && (
          <div>
            <h2>Submitted Feedback:</h2>
            <ul>
              {submittedFeedback.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </form>
  )
}

export default FeedbackForm
