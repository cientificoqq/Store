import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./index.css";
import { Button } from "@mui/material";
function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
