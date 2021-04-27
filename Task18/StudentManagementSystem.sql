create database StudentManagementSystem

use StudentManagementSystem

create table department(
DepartmentID int primary key,
DepartmentName varchar(100),
DepartmentCode varchar(3) unique not null
)

insert into department values (1, 'Computer Science and Engineering', 'CSE')
insert into department values (2, 'Electrical and Communication Engineering', 'ECE')
insert into department values (3, 'Civil Engineering', 'CVL')
insert into department values (4, 'Electrical and Electronics Engineering', 'EEE')
insert into department values (5, 'Mechanical Engineering', 'MEC')

select * from department

create table courses(
CourseID int primary key,
CourseCode varchar(7) unique not null,
CourseName varchar(30),
DepartmentID int,
foreign key(DepartmentID) references department(DepartmentID)
)

insert into courses values (1, 'ECS-101', 'Chemistry', 1)
insert into courses values (2, 'EID-101', 'Electronics', 4)
insert into courses values (3, 'EME-101', 'Mathematics', 1)

create table parent(
ParentID int primary key,
Name varchar(100) not null,
phone bigint not null unique,
)

insert into parent values (1, 'Ravi Kumar', 9921902008)
insert into parent values (2, 'Kumar', 9921902009)
insert into parent values (3, 'Charan', 9921902018)
insert into parent values (4, 'Rajini', 9921902028)
insert into parent values (5, 'Bhargav', 9921902308)

select * from parent

create table student(
StudentID int primary key,
Name varchar(100) not null,
dob DATE,
phone bigint not null unique,
DepartmentID int,
ParentID int,
foreign key(DepartmentID) references department(DepartmentID),
foreign key(ParentID) references parent(ParentID)
)

insert into student values (1, 'Ravi Teja', '2000-08-06', 9951282998, 1, 1)
insert into student values (2, 'Nikhil', '2000-09-16', 9951292998, 1, 2)
insert into student values (3, 'Pavan', '1999-10-23', 9951382998, 2, 3)
insert into student values (4, 'Pranay', '1999-01-12', 9951482998, 3, 4)
insert into student values (5, 'Varun', '2000-02-20', 9951582998, 4, 5)

select * from student


create table role(
RoleCode varchar(10) primary key,
RoleName varchar(50) not null unique
)

insert into role values ('Prof', 'Proffesor')
insert into role values ('Asst.Prof', 'Assistant Proffesor')
insert into role values ('Lab.Inch.', 'Laboratory Incharge')

select * from role

create table lecturer(
LecturerID int primary key,
Name varchar(100) not null,
MobileNumber bigint not null unique,
Role varchar(10),
DepartmentID int,
foreign key(Role) references role(RoleCode),
foreign key(DepartmentID) references department(DepartmentID)
)

insert into lecturer values (1, 'Sasi Kumar', 9928192887, 'Prof', 1)
insert into lecturer values (2, 'Bhargav', 9928192892, 'Prof', 1)
insert into lecturer values (3, 'Avinash', 9928192897, 'Prof', 3)
insert into lecturer values (4, 'Sridhar', 9928192817, 'Asst.Prof', 2)
insert into lecturer values (5, 'Manikanta', 9928193887, 'Asst.Prof', 1)

select * from lecturer
insert into lecturer values (1, 'Sasi Kumar', 9928192887, 'Prof', 1)

create table marks(
StudentID int not null,
CourseID int not null,
Marks int not null,
foreign key(StudentID) references student(StudentID),
foreign key(CourseID) references courses(CourseID)
)

insert into marks values (1, 1, 90)
insert into marks values (1, 2, 90)
insert into marks values (1, 3, 90)
insert into marks values (2, 1, 90)
insert into marks values (2, 2, 90)
insert into marks values (2, 3, 90)

create table enrolls(
StudentID int not null,
CourseID int not null,
LecturerID int not null,	
foreign key(StudentID) references student(StudentID),
foreign key(CourseID) references courses(CourseID),
foreign key(LecturerID) references lecturer(LecturerID)
)

create table attendence(
date Date not null,
StudentID int not null,
status bit,
foreign key(StudentID) references student(StudentID),
)

/*
SQL Select
select * from student;
SQL Select Distinct
select distinct StudentID from enrolls;
SQL Where
SQL And, Or, Not
SQL Order By
SQL Insert Into
SQL Null Values
SQL Update
SQL Delete
SQL Select Top
SQL Min and Max
SQL Count, Avg, Sum
SQL Like
SQL Wildcards
SQL In
SQL Between
SQL Aliases
SQL Joins
SQL Inner Join
SQL Left Join
SQL Right Join
SQL Full Join
SQL Self Join
SQL Union
SQL Group By
SQL Having
SQL Exists
SQL Any, All
SQL Select Into
SQL Insert Into Select
SQL Case
SQL Null Functions
SQL Stored Procedures
SQL Comments
SQL Operators

SQL Database
SQL Create DB
SQL Drop DB
SQL Backup DB
SQL Create Table
SQL Drop Table
SQL Alter Table
SQL Constraints
SQL Not Null
SQL Unique
SQL Primary Key
SQL Foreign Key
SQL Check
SQL Default
SQL Index
SQL Auto Increment
SQL Dates
SQL Views
SQL Injection
SQL Hosting
SQL Data Types

SQL References
SQL Keywords
MySQL Functions
SQL Server Functions
MS Access Functions
SQL Quick Ref

SQL Examples
SQL Examples
SQL Quiz
SQL Exercises
SQL Certificate

*/