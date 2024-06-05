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

SELECT tentativa, acertos, erros, usuario.nome FROM quiz JOIN usuario ON fkUsuario = usuario.id WHERE nome = 'ppp' ORDER BY tentativa DESC;

SELECT tentativa, acertos, erros, usuario.nome FROM quiz JOIN usuario ON fkUsuario = usuario.id WHERE nome = 'ppp' ORDER BY tentativa DESC LIMIT 3;

select * from usuario;
select * from quiz;

create table minijogo (
id int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fkJogoUsuario foreign key (fkUsuario)
	references usuario(id)
);

SELECT pontuacao, MINIJOGO.ID, nome FROM minijogo JOIN usuario ON fkUsuario = usuario.id
                   WHERE nome = 'Nícolas Reis' ORDER BY pontuacao DESC LIMIT 5 ;
                   
SELECT pontuacao, MINIJOGO.ID, nome FROM minijogo JOIN usuario ON fkUsuario = usuario.id
                   WHERE nome = 'ppp' ORDER BY pontuacao DESC LIMIT 5 ;
                   
SELECT pontuacao, MINIJOGO.ID, nome FROM minijogo JOIN usuario ON fkUsuario = usuario.id
                        WHERE nome = 'Nícolas Reis' ORDER BY pontuacao DESC LIMIT 5;

select * from minijogo;	
select pontuacao, fkUsuario from minijogo 
	order by pontuacao desc
    limit 5;
    
SELECT pontuacao, fkUsuario, nome FROM minijogo JOIN usuario on fkUsuario = usuario.id ORDER BY pontuacao DESC LIMIT 5; 
 
select pontuacao, fkUsuario from minijogo;

select * from minijogo;

SELECT * FROM usuario;

select * from rota;


select distinct pontuacao, fkUsuario from minijogo order by pontuacao desc limit 5;

SELECT minigame.pontuacaoMaxima,
		minigame.fkUsuario,
		usuario.nome FROM 
			(SELECT MAX(pontuacao) AS pontuacaoMaxima,
			fkUsuario from minijogo
			GROUP BY fkUsuario) AS minigame
				JOIN usuario ON minigame.fkUsuario = usuario.id
				ORDER BY minigame.pontuacaoMaxima 
				DESC LIMIT 5;

select minigame.pontuacaoMaxima, minigame.fkUsuario, usuario.nome from 
	(select max(pontuacao) as pontuacaoMaxima, minijogo.fkUsuario from minijogo group by minijogo.fkUsuario) as minigame
    join usuario
    on fkUsuario = usuario.id
    order by pontuacaoMaxima
    desc limit 5;
    

SELECT MAX(pontuacao) AS pontuacaoMaxima,
			fkUsuario from minijogo
			GROUP BY fkUsuario;
            
select * from minijogo;
select * from usuario;


