-- SCRIPTS UTILIZADOS EN WORKBENCH

SELECT * FROM estudiantes2025;

INSERT INTO estudiantes2025 (nombre, apellido	, telefono, email) VALUES ('Juan', 'Perez', '2604000000', 'juan@gmail.com');

UPDATE estudiantes2025 SET nombre = 'Carlos', apellido = 'Gonzalez' WHERE id = 1;

DELETE FROM estudiantes2025 WHERE id = 1;
DELETE FROM estudiantes2025 WHERE id > 0;

ALTER TABLE estudiantes2025 AUTO_INCREMENT = 1;
