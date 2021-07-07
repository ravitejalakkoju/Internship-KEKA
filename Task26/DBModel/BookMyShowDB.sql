create database BookMyShowDB;

use BookMyShowDB;

create table Location(
ID int, 
	constraint [Location_Constraint_PK] primary key (ID),
Name varchar(max) not null,
State varchar(max) not null,
Pincode bigint not null,
Type int
);

create table Theatre(
ID int,
	constraint [Theate_Constraint_PK] primary key (ID),
Name varchar(max) not null
);