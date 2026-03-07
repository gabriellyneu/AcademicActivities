-- ======================================
-- Script de dados iniciais do sistema
-- Projeto: Atividade Prisma ORM
-- Autor: Pedro Nunes
-- ======================================

-- Inserir Pessoas

INSERT INTO pessoa (nome, email) VALUES
('Pedro Nunes','pedro@email.com'),
('Maria Silva','maria@email.com'),
('João Souza','joao@email.com'),
('Ana Costa','ana@email.com'),
('Lucas Pereira','lucas@email.com');


-- Inserir Carros

INSERT INTO carro (modelo, marca, ano) VALUES
('Civic','Honda',2022),
('Corolla','Toyota',2021),
('Gol','Volkswagen',2019),
('Onix','Chevrolet',2023),
('HB20','Hyundai',2020);


-- Associação Pessoa x Carro

INSERT INTO pessoa_por_carro ("pessoaId","carroId") VALUES
(1,1),
(1,2),
(2,3),
(3,1),
(2,4),
(3,5);