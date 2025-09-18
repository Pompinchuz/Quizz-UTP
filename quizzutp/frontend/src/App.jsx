import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuizList from "./pages/QuizList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./components/Logout";
import Quiz from "./pages/Quiz";

function App() {
  const usuarioId = localStorage.getItem("usuarioId");

  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>{" "}
        {!usuarioId && <Link to="/login">Login</Link>}{" "}
        {!usuarioId && <Link to="/register">Registro</Link>}{" "}
        {usuarioId && <Link to="/quiz">Quiz</Link>}{" "}
        {usuarioId && <Link to="/logout">Cerrar Sesión</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
