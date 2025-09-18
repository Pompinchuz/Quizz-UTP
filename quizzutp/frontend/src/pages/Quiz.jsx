import { useEffect, useState } from "react";
import { getPreguntas } from "../services/api";

function Quiz() {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    getPreguntas().then((res) => setPreguntas(res.data));
  }, []);

  const responder = (correcta) => {
    if (correcta) setPuntaje((prev) => prev + 1);

    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1);
    } else {
      setFinalizado(true);
    }
  };

  if (preguntas.length === 0) return <p>Cargando preguntas...</p>;

  if (finalizado) {
    return (
      <div>
        <h2>¡Quiz terminado!</h2>
        <p>Tu puntaje: {puntaje} / {preguntas.length}</p>
      </div>
    );
  }

  const pregunta = preguntas[indice];

  return (
    <div>
      <h3>{pregunta.enunciado}</h3>
      <ul>
        {pregunta.opciones.map((op) => (
          <li key={op.id}>
            <button onClick={() => responder(op.correcta)}>
              {op.texto}
            </button>
          </li>
        ))}
      </ul>
      <p>Puntaje actual: {puntaje}</p>
    </div>
  );
}

export default Quiz;
