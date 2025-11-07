CREATE TABLE livros (
id SERIAL PRIMARY KEY,
titulo VARCHAR(200),
autor VARCHAR(200),
genero VARCHAR(200),
ano_publicacao INTEGER,
resumo TEXT
);

SELECT * FROM livros;