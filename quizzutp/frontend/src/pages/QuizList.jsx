import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchQuizzes();
  }, []);

  async function fetchQuizzes() {
    try {
      const res = await api.get("/quizzes");
      setQuizzes(res.data);
    } catch (err) {
      console.error("Error al obtener quizzes:", err);
    }
  }

  async function addQuiz(e) {
    e.preventDefault();
    try {
      const res = await api.post("/quizzes", { title, description });
      setQuizzes([...quizzes, res.data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error al crear quiz:", err);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quizzes</h2>

      <form onSubmit={addQuiz}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Agregar Quiz</button>
      </form>

      <ul>
        {quizzes.map(q => (
          <li key={q.id}>
            <strong>{q.title}</strong>: {q.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
