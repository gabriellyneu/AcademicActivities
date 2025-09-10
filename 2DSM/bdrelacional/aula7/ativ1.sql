CREATE TABLE cursos (
    id_curso SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id_aluno SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_curso INT REFERENCES cursos(id_curso)
);

CREATE TABLE notas (
    id_nota SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES alunos(id_aluno),
    id_disciplina INT REFERENCES disciplinas(id_disciplina),
    nota DECIMAL(5,2) NOT NULL
);

CREATE TABLE disciplinas (
    id_disciplina SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_curso INT REFERENCES cursos(id_curso)
);

INSERT INTO cursos (id_curso, nome) VALUES
(1, 'Engenharia Civil'),
(2, 'Psicologia');

INSERT INTO alunos (id_aluno, nome, id_curso) VALUES
(1, 'Mariana Costa', 1),
(2, 'Pedro Santos', 2),
(3, 'Juliana Ribeiro', 1),
(4, 'Lucas Almeida', 2),
(5, 'Fernanda Oliveira', 1);

INSERT INTO disciplinas (id_disciplina, nome, id_curso) VALUES
(1, 'Cálculo Estrutural', 1),
(2, 'Psicologia do Desenvolvimento', 2);

INSERT INTO notas (id_aluno, id_disciplina, nota) VALUES
(1, 1, 7.5),
(2, 2, 8.0),
(3, 1, 6.5),
(4, 2, 9.0),
(5, 1, 8.8);


SELECT COUNT(*) AS total_alunos
FROM alunos;

SELECT AVG(nota) AS media_geral_notas
FROM notas;

SELECT c.nome AS curso, COUNT(a.id_aluno) AS total_alunos
FROM cursos c
LEFT JOIN alunos a ON c.id_curso = a.id_curso
GROUP BY c.nome;

UPDATE notas
SET nota = 9.0
WHERE id_aluno = 3
  AND disciplina = 'Psicologia do Desenvolvimento;
