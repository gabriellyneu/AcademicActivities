INSERT INTO categoria_usuario (nome, descricao) VALUES
('Administrador', 'Usuário responsável pela gestão completa do sistema'),
('Analista', 'Usuário que insere e atualiza dados de eventos'),
('Observador', 'Usuário com permissão apenas para consulta de informações');

INSERT INTO usuario (nome, email, senha_hash, id_categoria) VALUES
('Marcos Silva', 'marcos.silva@email.com', 'hash111', 1),
('Patrícia Gomes', 'patricia.gomes@email.com', 'hash222', 2),
('Ricardo Alves', 'ricardo.alves@email.com', 'hash333', 3);

INSERT INTO tipo_evento (nome, descricao) VALUES
('Enchente Urbana', 'Acúmulo de água em áreas residenciais e comerciais'),
('Incêndio Florestal', 'Queimada de grande proporção em área de mata'),
('Deslizamento de Terra', 'Movimento de solo em encostas ou áreas instáveis');

INSERT INTO estado (sigla_estado, nome_estado) VALUES
('SP', 'São Paulo'),
('RJ', 'Rio de Janeiro'),
('MG', 'Minas Gerais');

INSERT INTO localizacao (latitude, longitude, cidade, sigla_estado) VALUES
(-23.550520, -46.633308, 'São Paulo', 'SP'),
(-22.906847, -43.172896, 'Rio de Janeiro', 'RJ'),
(-19.916681, -43.934493, 'Belo Horizonte', 'MG');

INSERT INTO evento (titulo, descricao, data_hora, status, id_tipo_evento, id_localizacao) VALUES
('Enchente na Zona Leste', 'Ruas alagadas após fortes chuvas', '2025-09-10 18:20:00', 'Ativo', 1, 1),
('Incêndio na Serra', 'Fogo de grande proporção em área de mata', '2025-09-08 14:50:00', 'Em Monitoramento', 2, 2),
('Deslizamento em Vila Rica', 'Encosta deslizou após dias de chuva', '2025-09-05 07:15:00', 'Resolvido', 3, 3);


SELECT id_usuario, nome, email FROM usuario;

SELECT id_evento, titulo, status FROM evento;

SELECT titulo, descricao, status 
FROM evento
WHERE status = 'Ativo';

SELECT nome, email 
FROM usuario
WHERE id_categoria = 1;
