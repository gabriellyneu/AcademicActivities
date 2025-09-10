CREATE TABLE clientes (
    cliente_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL
);

CREATE TABLE contas (
    conta_id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(cliente_id),
    numero_conta VARCHAR(20) UNIQUE NOT NULL,
    saldo DECIMAL(12,2) DEFAULT 0.00
);

CREATE TABLE transacoes (
    transacao_id SERIAL PRIMARY KEY,
    conta_id INT REFERENCES contas(conta_id),
    tipo VARCHAR(10) CHECK (tipo IN ('deposito','saque','transferencia')),
    valor DECIMAL(12,2) NOT NULL,
    data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clientes (nome, cpf, data_nascimento) VALUES
('João Pereira', '98765432100', '1988-07-19'),
('Maria Fernandes', '87654321099', '1992-01-30'),
('Roberto Silva', '76543210988', '1975-12-05');

INSERT INTO contas (cliente_id, numero_conta, saldo) VALUES
(1, '2001', 2200.00),
(2, '2002', 3400.00),
(3, '2003', 800.00);

INSERT INTO transacoes (conta_id, tipo, valor, data_transacao) VALUES
(1, 'deposito', 1000.00, '2025-09-02'),
(1, 'saque', 300.00, '2025-09-05'),
(2, 'deposito', 1500.00, '2025-09-06'),
(3, 'deposito', 500.00, '2025-09-08'),
(2, 'saque', 600.00, '2025-08-29');
 

SELECT COUNT(*) AS total_transacoes_mes
FROM transacoes
WHERE DATE_TRUNC('month', data_transacao) = DATE_TRUNC('month', CURRENT_DATE);

SELECT AVG(valor) AS media_depositos
FROM transacoes
WHERE tipo = 'deposito';

UPDATE contas
SET saldo = saldo + 300.00
WHERE numero_conta = '1001';


-- Atividade 

SELECT COUNT(*) AS total_clientes
FROM clientes;

SELECT SUM(saldo) AS saldo_total
FROM contas;

SELECT AVG(valor) AS media_saques
FROM transacoes
WHERE tipo = 'saque';
