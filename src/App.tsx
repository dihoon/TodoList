import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import TodoList from "./pages/TodoList/TodoList";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div id="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/todoList" element={<TodoList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
