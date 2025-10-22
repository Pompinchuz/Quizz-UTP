Version de react utilizada: React versión 19.1.1.
BD: MYSQL workbench



Se uso Spring boot como base de datos

Version de spring boot: 17



PASOS PARA INICIALIZAR EL PROYECTO:

1. Modificar el archivo .envexample por ".env"
2. Añadir tus credenciales al archivo  ".env"
3. Verificar la instalacion de la depencia ".env"
4. Inciar tu base de datos MYSQL

5. INSERTAR PREGUNTAS MEDIANTE SQL

INSERT INTO questions (question_text, option1, option2, option3, option4, correct_answer, difficulty) VALUES
('¿Qué significa HTML?', 'Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 1, 'facil'),
('¿Cuál es el resultado de 5 + "5" en JavaScript?', '10', '55', 'Error', 'NaN', 2, 'medio'),
('¿Qué palabra clave se usa para declarar una constante en JavaScript?', 'var', 'let', 'const', 'constant', 3, 'facil'),
('¿Qué es un algoritmo?', 'Un lenguaje de programación', 'Una secuencia de pasos para resolver un problema', 'Un tipo de base de datos', 'Un navegador web', 2, 'facil'),
('¿Cuál de estos NO es un lenguaje de programación?', 'Python', 'Java', 'HTML', 'C++', 3, 'medio'),
('¿Qué método se usa para agregar un elemento al final de un array en JavaScript?', 'add()', 'push()', 'append()', 'insert()', 2, 'facil'),
('¿Qué es SQL?', 'Un lenguaje de programación orientado a objetos', 'Un lenguaje de consulta estructurado', 'Un framework de JavaScript', 'Un sistema operativo', 2, 'medio'),
('¿Cuál es el operador de igualdad estricta en JavaScript?', '=', '==', '===', '====', 3, 'medio'),
('¿Qué significa CSS?', 'Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 3, 'facil'),
('¿Qué estructura de datos sigue el principio LIFO?', 'Queue (Cola)', 'Stack (Pila)', 'Array', 'Linked List', 2, 'medio'),
('¿Cuál es el puerto por defecto de HTTP?', '21', '443', '80', '8080', 3, 'medio'),
('¿Qué es Git?', 'Un lenguaje de programación', 'Un sistema de control de versiones', 'Una base de datos', 'Un editor de código', 2, 'facil'),
('¿Qué es la recursión?', 'Un bucle infinito', 'Una función que se llama a sí misma', 'Un tipo de variable', 'Un método de ordenamiento', 2, 'dificil'),
('¿Cuál es la complejidad temporal de la búsqueda binaria?', 'O(n)', 'O(log n)', 'O(n²)', 'O(1)', 2, 'dificil'),
('¿Qué significa API?', 'Application Programming Interface', 'Advanced Programming Integration', 'Automated Program Interaction', 'Application Process Integration', 1, 'medio');





6. Insertar un usuario en la base de datos

Example:
INSERT INTO usuarios (id, email, password)
VALUES
  (1, 'prubita@gmail.com', '12345'),
  (2, 'otro@email.com', 'abcd');








  khambam

  implementar power bi

  realizar reportes


  pull request (capturas)
