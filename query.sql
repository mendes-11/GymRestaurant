use master
go

if exists(select * from sys.databases where name = 'GymRestaurant')
	drop database GymRestaurant
go

create database GymRestaurant
go

use GymRestaurant
go

create table Imagem(
	ID int identity primary key,
	Foto varbinary(MAX) not null
);
go

create table Usuario(
	ID int identity primary key,
	Nome varchar(80) not null,
	Email varchar(50) not null,
	Cpf varchar(11) not null,
	Senha varchar(MAX) not null,
	Salt varchar(200) not null,
	Adm bit NOT NULL,
	ImagemID int references Imagem(ID)
);
go


create table Cardapio(
	ID int identity primary key,
	Nome varchar(80) not null,
	Descricao varchar(300) not null,
	CodProduto varchar(50) not null,
	Valor decimal(3,2) not null,
	ImagemID int references Imagem(ID)


	
);


create table Post(
	ID int identity primary key,
	UsuarioID int references Usuario(ID) not null,
	ImagemID int references Imagem(ID) not null
);
go