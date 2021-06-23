create database Employee;

use Employee;

create table Employee(
ID int,
	constraint [PK_Employee] primary key (ID),
Name varchar(50) not null,
Email varchar(20) not null,
MobileNumber varchar(10) not null,
	constraint [unique_employee_mobile] unique (MobileNumber),
Landline varchar(10),
Website varchar(30),
	constraint [unique_employee_website] unique (Website),
Address varchar(200) not null
);

select * from Employee;

insert into Employee values (1, 'Ravi Teja Lakkoju', 'raviteja.l@gmail.com', '9951282998', null, null, 'Flat 402, Street no.6, Aadarsh Nagar, Visakhapatnam, 530076');

use Employee;

alter table Employee
alter column Website varchar(40);

drop table Employee;

create table Employee(
ID int,
	constraint [PK_Employee] primary key (ID),
Name varchar(50) not null,
Email varchar(30) not null,
	constraint [unique_employee_email] unique (Email),
MobileNumber varchar(10) not null,
	constraint [unique_employee_mobile] unique (MobileNumber),
Landline varchar(10),
Website varchar(50),
	constraint [unique_employee_website] unique (Website),
Address varchar(200) not null
);


CREATE UNIQUE NONCLUSTERED INDEX unique_website
ON Employee(Website)
WHERE Website IS NOT NULL

select * from Employee;

CREATE UNIQUE INDEX unique_website_employee
ON Employee(Website)
WHERE Website IS NOT NULL

insert into Employee values (1, 'Ravi Teja Lakkoju', 'raviteja.l@gmail.com', '9951282998', null, null, 'Lane 6, Flat 101, Kakani Nagar, Visakhapatnam, 530345');
insert into Employee values (2, 'Nikhil VemiReddy', 'nikhil.v@gmail.com', '9876543210', null, null, 'Lane 5, Flat 101, Kakani Nagar, Visakhapatnam, 530345');




