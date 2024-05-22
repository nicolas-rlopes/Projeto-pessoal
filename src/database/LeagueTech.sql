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
	fk_rota INT,
	FOREIGN KEY (fk_rota) REFERENCES rota(id)
);

select * from usuario;

CREATE TABLE quiz (
tentativa int auto_increment,
acertos int,
erros int,
fkUsuario int,
constraint fkQuizUsuario foreign key (fkUsuario)
	references usuario(id),
primary key (tentativa, fkUsuario)
);
select * from usuario;
select * from quiz;

create table minijogo (
id int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fkJogoUsuario foreign key (fkUsuario)
	references usuario(id)
);

select * from minijogo;

SELECT * FROM usuario;