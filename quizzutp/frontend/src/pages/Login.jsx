import { useState } from "react";
import { loginUsuario } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUsuario(email, password);

    if (res.usuarioId) {
      localStorage.setItem("usuarioId", res.usuarioId);
      setMessage("Login exitoso");
      window.location.reload(); // recarga para ir al QuizList
    } else {
      setMessage(res.error || "Credenciales inválidas");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
