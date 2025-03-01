import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
