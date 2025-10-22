import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // tu backend Spring Boot
  timeout: 5000,
});

// Registrar usuario
export const registerUsuario = async (usuario) => {
  try {
    const res = await api.post("/usuarios/register", usuario);
    return res.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { error: "No se pudo registrar" };
  }
};

// Login usuario
export const loginUsuario = async (email, password) => {
  try {
    const res = await api.post("/usuarios/login", { email, password });
    return res.data;
  } catch (error) {
    console.error("Error en login:", error);
    return { error: "Credenciales inválidas" };
  }
};


export const getPreguntas = () => api.get("/preguntas");


export default api;
