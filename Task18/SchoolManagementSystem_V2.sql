create database SchoolManagementSystem

use SchoolManagementSystem

create table department(
id int not null,
	constraint [PK_Dept] primary key (id),
name varchar(100) NOT NULL unique,
code varchar(3) not null unique
)

insert into department values (1, 'Telugu', 'TEL')
insert into department values (2, 'Hindi', 'HIN')
insert into department values (3, 'English', 'ENG')
insert into department values (4, 'Maths', 'MAT')
insert into department values (5, 'Science', 'SCI')
insert into department values (6, 'Social', 'SOC')

select * from department

create table designation(
id int not null unique,
code varchar(10),
	constraint [PK_Designation_Report] primary key (code),
name varchar(100),
	constraint [unique_designation] unique(name),
baseSalary int not null
)

insert into designation values (1, 'TCH', 'Teacher', 20000)
insert into designation values (2, 'HOD', 'Head of the Department', 30000)
insert into designation values (3, 'PEON', 'Peon', 5000)
insert into designation values (4, 'ATDR', 'Attender', 2300)
insert into designation values (5, 'PRIN', 'Principal', 40000)

select * from designation

create table employee(
id int,
	constraint [PK_Employee_Report] primary key (id),
name varchar(100) not null,
mobileNumber bigint not null,
	constraint [Unique_Employee_MobileNumber_Report] unique (mobileNumber),
departmentId int,
	constraint [FK_Employee_Department_Report] foreign key (departmentId) references department(id),
role varchar(20) not null,
	constraint [Employee_Role_Restriction_Check] check (role = 'Staff' or role = 'Entourage'),
designationCode varchar(10),
	constraint [FK_Employee_Designation_Report] foreign key (designationCode) references designation(code),
experience int not null,
	constraint [Employee_Experience_Report] check (experience >= 0),
salary int not null,
dob Date not null,
	constraint [Employee_dob_check_Report] check (DATEDIFF(year, dob, getdate()) > 21),	
gender varchar(1) not null,
	constraint [Employee_Gender_Check_Report] check(gender = 'M' or gender = 'F')
)


CREATE UNIQUE INDEX Non_Unique_Null_Employee_MobileNumber_Report
ON employee(MobileNumber)
WHERE MobileNumber IS NOT NULL

create table staff(
id int,
	constraint [PK_Staff_Report] primary key (id),
	constraint [FK_StaffID_Report] foreign key (id) references employee(id),
designationCode varchar(10),
	constraint [FK_Staff_Designation_Report] foreign key (designationCode) references designation(code)
)

create table entourage(
id int,
	constraint [PK_Entourage_Report] primary key (id),
	constraint [FK_EntourageId_Report] foreign key (id) references employee(id),
designationCode varchar(10),
	constraint [FK_Entourage_Designation_Report] foreign key (designationCode) references designation(code)
)

go
create trigger New_Employee_Trigger
on employee
after insert
as
begin 
	if (select role from inserted) like 'Staff'
		insert into staff select id, designationCode from inserted
	if (select role from inserted) like 'Entourage'
		insert into entourage select id, designationCode from inserted
end
go

go
create trigger Employee_Salary_Trigger
on employee
instead of insert
as
begin 
	begin try
		if exists (select i.salary from inserted i inner join designation d on i.designationCode = d.code where i.salary < d.baseSalary)
			throw 50000, 'Less than base salary', 1;
		else insert into employee select * from inserted
	end try 
	begin catch
		print 'In Employee_Salary_Trigger catch block.';
		throw;
	end catch
end
go

insert into employee values (1, 'Adhitya Varma', 9951294998, 1, 'Staff', 'HOD', 4, 30000, '1981-07-14', 'M')
insert into employee values (2, 'Suriya', 8956869990, 1, 'Staff', 'TCH', 2, 20000, '1995-07-14', 'M')
insert into employee values (3, 'Raghuveer', 8951295998, 2, 'Staff', 'HOD', 5, 30000, '1985-07-30', 'M')
insert into employee values (4, 'Rajaram', 8951295990, 2, 'Staff', 'TCH', 3, 20000, '1992-02-28', 'M')
insert into employee values (5, 'Vanitha', 7951295990, 3, 'Staff', 'HOD', 5, 30000, '1978-04-22', 'F')
insert into employee values (6, 'Ravi Kumar', 7941295990, 3, 'Staff', 'TCH', 1, 20000, '1994-04-25', 'M')
insert into employee values (7, 'Sasi Kalyan', 7941305990, 4, 'Staff', 'HOD', 6, 35000, '1990-01-15', 'M')
insert into employee values (8, 'Rajini', 7941385990, 4, 'Staff', 'TCH', 2, 20000, '1996-01-15', 'F')
insert into employee values (9, 'Savithri', 7941386990, 5, 'Staff', 'HOD', 4, 32000, '1987-01-26', 'F')
insert into employee values (10, 'Manoj Chakrabarty', 7941386690, 5, 'Staff', 'TCH', 1, 20000, '1992-07-26', 'M')
insert into employee values (11, 'Venkatesh', 7941386660, 6, 'Staff', 'HOD', 7, 36000, '1992-07-06', 'M')
insert into employee values (12, 'Sita', 7941386669, 6, 'Staff', 'TCH', 2, 35000, '1985-07-01', 'F')
insert into employee values (13, 'Praneetha', 7941387769, 4, 'Staff', 'PRIN', 2, 45000, '1980-07-01', 'F')
insert into employee values (14, 'Raghu', 8956769999, 2, 'Entourage', 'PEON', 5, 5000, '1995-03-12', 'M')
insert into employee values (15, 'Nageshwar', 8956769990, 2, 'Entourage', 'ATDR', 10, 2500, '1980-02-19', 'M')
insert into employee values (16, 'Manamma', 9951295998, 1, 'Entourage', 'ATDR', 10, 2300, '1975-07-14', 'F')

select * from staff;
select * from entourage;
select * from employee;
select * from designation;

create table feestructure(
id int not null unique,
class int,
	constraint [PK_Class_Fees_Report] primary key (class),
fees int not null
)

insert into feestructure values (1, 1, 20000)
insert into feestructure values (2, 2, 25000)
insert into feestructure values (3, 3, 30000)
insert into feestructure values (4, 4, 35000)
insert into feestructure values (5, 5, 40000)


create table class(
classId int,
	constraint [Check_Class_Limit_Report] check (classId <= 5),
	constraint [FK_Classes_Report] foreign key (classId) references feeStructure(class),
section varchar(1) not null,
	constraint [PK_Class_Report] primary key (classId, section),
classTeacher int,
	constraint [FK_ClassTeacher_Report] foreign key (classTeacher) references Staff(id)
)

insert into class values (1, 'A', 3)
insert into class values (1, 'B', 4)
insert into class values (2, 'A', 5)
insert into class values (2, 'B', 6)
insert into class values (3, 'A', 7)
insert into class values (3, 'B', 8)
insert into class values (4, 'A', 9)
insert into class values (4, 'B', 10)
insert into class values (5, 'A', 11)
insert into class values (5, 'B', 12)

select concat(class.classId, '-', class.section) as Class, employee.name as ClassTeacher from class
join employee on class.classTeacher = employee.id

create table parent(
id int,
	constraint [PK_Parent_Report] primary key (id),
name varchar(100) not null,
age int not null,
gender varchar(1) not null,
mobileNumber bigint null
)

CREATE UNIQUE INDEX Unique_Parent_MobileNum_Report
ON parent(mobileNumber)
WHERE mobileNumber IS NOT NULL

insert into parent values (1, 'Ravi Kumar', 58, 'M', 7093930006)
insert into parent values (2, 'Charitha', 45, 'F', null)
insert into parent values (3, 'Manoj', 54, 'M', null)
insert into parent values (4, 'Raghunath', 35, 'M', 7567346666)
insert into parent values (5, 'Raghav', 35, 'M', 7567348989)

select * from parent

create table student(
id int,
	constraint [PK_Student_Report] primary key (id),
name varchar(100) not null,
dob Date not null,
mobileNumber bigint null,
joiningDate Date not null,
releivingDate Date default null,
parentID int,
	constraint [FK_Student_Parent] foreign key (parentID) references parent(id),
feeStatus bit not null default 0
)

CREATE UNIQUE INDEX Unique_Student_MobileNum_Report
ON student(mobileNumber)
WHERE mobileNumber IS NOT NULL

insert into student values (1, 'Ravi Teja', '2000-08-06', 9951282998, '2004-6-14', null, 1, 0)
insert into student values (2, 'Nikhil', '2000-09-16', 9951292998, '2004-6-14', null, 2, 0)
insert into student values (3, 'Pavan', '1999-10-23', 9951382998, '2004-6-14', null, 3, 1)
insert into student values (4, 'Pranay', '1999-01-12', 9951482998, '2004-6-14', null, 4, 1)
insert into student values (5, 'Varun', '2000-02-20', null, '2004-6-14', null, 5, 0)

insert into student values (6, 'Sheetal', '2000-08-06', 8951282998, '2004-6-14', null, 1, 0)
insert into student values (7, 'Chandana', '2000-04-14', 9952292998, '2004-6-14', null, 2, 1)
insert into student values (8, 'Ankita', '1999-10-23', 9951682998, '2004-6-14', null, 3, 1)
insert into student values (9, 'Jayashwani', '1999-01-12', 7851582998, '2004-6-14', null, 4, 1)
insert into student values (10, 'Bhavya', '2000-03-18', null, '2004-6-14', null, 5, 0)

select * from student

create table enrollment(
studentId int,
	constraint [FK_Student_Enrollment_Report] foreign key (studentId) references student(id),
classId int,
section varchar(1),
	constraint [FK_Class_Section_Enrollment_Report] foreign key (classId, section) references class(classId, section),
)

insert into enrollment values (1, 1, 'A')
insert into enrollment values (2, 1, 'B')
insert into enrollment values (3, 2, 'A')
insert into enrollment values (4, 2, 'B')
insert into enrollment values (5, 3, 'A')
insert into enrollment values (6, 3, 'B')
insert into enrollment values (7, 4, 'A')
insert into enrollment values (8, 4, 'B')
insert into enrollment values (9, 5, 'A')
insert into enrollment values (10, 5, 'A')

select s.name, concat(e.classId, '-', e.section) as class from enrollment e
join student s on e.studentId = s.id

create table login(
userId int not null,
	constraint [FK_User_Report] foreign key (userId) references staff(id),
id int,
	constraint [PK_Login_Report] primary key (id),
loginUserName varchar(30) unique not null,
loginPassword varchar(30) not null,
)

select * from employee

insert into login values (1, 1, 'tel_1', 'pass1')
insert into login values (2, 2, 'tel_2', 'pass2')
insert into login values (3, 3, 'hin_1', 'pass3')
insert into login values (4, 4, 'hin_2', 'pass4')
insert into login values (5, 5, 'eng_1', 'pass5')
insert into login values (6, 6, 'eng_2', 'pass6')
insert into login values (7, 7, 'mat_1', 'pass7')
insert into login values (8, 8, 'mat_2', 'pass8')
insert into login values (9, 9, 'sci_1', 'pass9')
insert into login values (10, 10, 'sci_2', 'pass10')
insert into login values (11, 11, 'soc_1', 'pass11')
insert into login values (12, 12, 'soc_2', 'pass12')
insert into login values (13, 13, 'mat_3', 'pass13')
insert into login values (13, 14, 'prin_3', 'pass14')

select * from login

create table permission(
id int,	
	constraint [PK_Permission_Report] primary key (id),
name varchar(30) not null,
designation varchar(10),
	constraint [FK_Permission_Designation_Report] foreign key (designation) references designation(code)
)

insert into permission values (1, 'Marks Update', 'TCH')
insert into permission values (2, 'Marks Update', 'HOD')
insert into permission values (3, 'Fees Update', 'PRIN')

insert into permission values (4, 'Marks Read', 'TCH')
insert into permission values (5, 'Marks Read', 'HOD')
insert into permission values (6, 'Fees Read', 'PRIN')

select * from permission

create table marks(
id int primary key,
studentId int not null, 
	constraint [FK_Student_Marks_Report] foreign key (studentId) references student(id),
subjectId int not null,
	constraint [FK_Student_Subject_Report] foreign key (subjectId) references department(id),
classId int not null,
section varchar(1) not null,
	constraint [FK_Class_Report] foreign key (classId, section) references class(classId, section),
marks int null,
	constraint [Check_Student_Marks_Report] check (marks <= 100)
)

SELECT id, name, classId, section from student 
join enrollment on student.id = enrollment.studentId

insert into marks values (1, 1, 1, 1, 'A',70)
insert into marks values (2, 1, 2, 1, 'A',  74)
insert into marks values (3, 1, 3, 1, 'A', 80)
insert into marks values (4, 1, 4, 1, 'A', 90)
insert into marks values (5, 2, 1, 1, 'B', 96)
insert into marks values (6, 2, 2, 1, 'B', 86)
insert into marks values (7, 2, 3, 1, 'B', 76)
insert into marks values (8, 2, 4, 1, 'B', 66)
insert into marks values (9, 3, 1, 2, 'A', 96)
insert into marks values (10, 3, 2, 2, 'A', 89)
insert into marks values (11, 3, 3, 2, 'A', 92)
insert into marks values (12, 3, 4, 2, 'A', 78)
insert into marks values (13, 3, 5, 2, 'A', 84)
insert into marks values (14, 3, 6, 2, 'A', 82)

select e.studentId, concat(e.classId, '-', e.section) as class, m.subjectId, m.marks from marks m
join enrollment e on m.studentId = e.studentId
