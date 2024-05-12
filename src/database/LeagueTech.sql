CREATE DATABASE LeagueTech;

USE LeagueTech;

CREATE TABLE rota (
	id INT PRIMARY KEY AUTO_INCREMENT,
	funcao VARCHAR(50),
	descricao varCHAR(100)
);

insert into rota (funcao, descricao) values 
	('TOP', 'Lutador corpo a corpo TANK'),
	('JUNGLER', 'Assassinos e lutadores com pouca vida'),
	('MID', 'Magos, Assassinos e Lutadores'),
	('ADC', 'Atiradores poderosos'),
	('SUP', 'Tanques e Proteção');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);