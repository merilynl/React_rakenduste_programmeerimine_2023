import { ThemeProvider, createTheme } from "@mui/material/styles"
import Layout from "./layout/Layout"
import { Outlet } from "react-router-dom"
import Header from "./layout/Header"
import { useLocation } from "react-router-dom"
import { Typography } from "@mui/material"
import List from "./components/List"
import FeedbackForm from "./components/FeedbackForm"
import "./App.css"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(254, 217, 255)"
    }
  }
})

function App() {
  const myHobbies = ["Reading", "Gardening", "Cooking", "Hiking"]
  let location = useLocation()
  return (
    <ThemeProvider theme={theme}>
      <Header title="Kekw" />
      <Layout>
        {location?.pathname === "/" && (
          <Typography
            variant="h4"
            sx={{ marginLeft: 10, marginTop: 5 }}
            align="center"
          >
            Merilyn Hunt
          </Typography>
        )}
        <Outlet />
        <List hobbies={myHobbies} />

        <FeedbackForm />
      </Layout>
    </ThemeProvider>
  )
}

export default App
