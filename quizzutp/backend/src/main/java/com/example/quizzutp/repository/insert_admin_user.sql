-- Script para insertar usuario administrador en PostgreSQL
-- Nota: La tabla usuarios se crea automáticamente con spring.jpa.hibernate.ddl-auto=update

-- Limpiar usuario admin existente (opcional)
-- DELETE FROM usuarios WHERE username = 'admin';

-- Insertar usuario administrador
INSERT INTO usuarios (username, email, password, best_score, role) 
VALUES ('admin', 'admin@utp.com', 'admin123', 0, 'ADMINISTRADOR')
ON CONFLICT (username) DO NOTHING;

-- Insertar usuarios estudiantes de ejemplo
INSERT INTO usuarios (username, email, password, best_score, role) 
VALUES 
('estudiante1', 'est1@utp.com', '123456', 0, 'ESTUDIANTE'),
('estudiante2', 'est2@utp.com', '123456', 0, 'ESTUDIANTE')
ON CONFLICT (username) DO NOTHING;