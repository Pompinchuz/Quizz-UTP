import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("usuarioId"); // elimina la sesión
    window.location.href = "/login"; // redirige al login
  }, []);

  return <p>Cerrando sesión...</p>;
}
