import React from "react"
import { Typography } from "@mui/material"
import { Box } from "@mui/material"

function List(props) {
  const { hobbies } = props

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2em"
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginLeft: 10, marginTop: 5 }}
        align="center"
      >
        List of my Hobbies:
      </Typography>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </Box>
  )
}

export default List
