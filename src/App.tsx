import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Login/Login";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div id="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<></>} />
            <Route path="/todoList" element={<></>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
