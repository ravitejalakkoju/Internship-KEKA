create database StudentManagementSystem_2;

create table department(
DepartmentID int not null,
	constraint [PK_Dept] primary key (DepartmentID),
DepartmentName varchar(100) NOT NULL unique,
DepartmentCode varchar(3) not null unique
)

insert into department values (1, 'Computer Science and Engineering', 'CSE')
insert into department values (2, 'Electrical and Communication Engineering', 'ECE')
insert into department values (3, 'Civil Engineering', 'CVL')
insert into department values (4, 'Electrical and Electronics Engineering', 'EEE')
insert into department values (5, 'Mechanical Engineering', 'MEC')

select * from department

create table parent(
ParentID int,
	constraint [PK_Parent_Report] primary key (ParentID),
ParentName varchar(100) not null,
Age int not null,
Gender varchar(1) not null,
MobileNumber bigint null
)

CREATE UNIQUE INDEX unique_parent_mobileNum_report
ON parent(MobileNumber)
WHERE MobileNumber IS NOT NULL

insert into parent values (1, 'Ravi Kumar', 58, 'M', 7093930006)
insert into parent values (2, 'Charitha', 45, 'F', null)
insert into parent values (3, 'Manoj', 54, 'M', null)
insert into parent values (4, 'Raghunath', 35, 'M', 7567346666)
insert into parent values (5, 'Raghav', 35, 'M', 7567348989)

select * from parent

create table courses(
CourseID int,
	constraint [PK_Courses] primary key (CourseID),
CourseName varchar(50) not null,
CourseCode varchar(7) not null,
DepartmentID int not null,
	constraint [FK_Courses_Report] foreign key(DepartmentID) references department(DepartmentID),
constraint [unique_courses_report] unique(CourseName, CourseCode, DepartmentID),
)

insert into courses values (1, 'Chemistry','ECS-101',  1)
insert into courses values (2, 'Electronics', 'EID-101', 4)
insert into courses values (3, 'Mathematics', 'EME-101', 1)
insert into courses values (4, 'Petro Chemicals', 'ECS-201', 1)
insert into courses values (5, 'Circuit Analysis', 'EID-201', 4)
insert into courses values (6, 'Discrete Mathemetics', 'EME-201', 1)

select * from courses order by CourseID;

create table designations(
DesignationCode varchar(10),
	constraint [PK_Designation_Report] primary key (DesignationCode),
Designation varchar(100),
	constraint [unique_designation] unique(Designation)
)

insert into designations values ('Prof', 'Proffesor')
insert into designations values ('Asst.Prof', 'Assistant Proffesor')
insert into designations values ('HOD', 'Head of the Department')
insert into designations values ('Lab.Inch', 'Laboratory Incharge')

select * from designations

create table students(
StudentID int,
	constraint [PK_Student_Report] primary key (StudentID),
StudentName varchar(100) not null,
DateOfBirth Date not null,
MobileNumber bigint null,
DepartmentID int,
	constraint [FK_Student_Department] foreign key (DepartmentID) references department(DepartmentID),
ParentID int,
	constraint [FK_Student_Parent] foreign key (ParentID) references parent(ParentID)
)

CREATE UNIQUE INDEX unique_student_mobileNum_report
ON students(MobileNumber)
WHERE MobileNumber IS NOT NULL

insert into students values (1, 'Ravi Teja', '2000-08-06', 9951282998, 1, 1)
insert into students values (2, 'Nikhil', '2000-09-16', 9951292998, 1, 2)
insert into students values (3, 'Pavan', '1999-10-23', 9951382998, 2, 3)
insert into students values (4, 'Pranay', '1999-01-12', 9951482998, 3, 4)
insert into students values (5, 'Varun', '2000-02-20', null, 4, 5)

select students.StudentName, department.DepartmentName, DATEDIFF(YEAR, students.DateOfBirth, GETDATE()) as Age from students
inner join department on students.DepartmentID = department.DepartmentID

create table lecturers(
LecturerID int,
	constraint [PK_Lecturer] primary key (LecturerID),
LecturerName varchar(100) not null,
MobileNumber bigint null,
DepartmentID int,
	constraint [FK_Lecturer_Department] foreign key (DepartmentID) references department(DepartmentID),
DesignationCode varchar(10),
	constraint [FK_Lecturer_Designation] foreign key (DesignationCode) references designations(DesignationCode)
)

CREATE UNIQUE INDEX unique_lecturer_mobileNum_report
ON lecturers(MobileNumber)
WHERE MobileNumber IS NOT NULL

insert into lecturers values (1, 'Sasi Kumar', 9928192887, 1, 'Prof')
insert into lecturers values (2, 'Bhargav', 9928192892, 1, 'Prof')
insert into lecturers values (3, 'Avinash', 9928192897, 3, 'Prof')
insert into lecturers values (4, 'Sridhar', 9928192817, 2, 'Asst.Prof')
insert into lecturers values (5, 'Manikanta', 9928193887, 1, 'Asst.Prof')
insert into lecturers values (6, 'Thammi Reddy', 9928193897, 1, 'HOD')

select * from lecturers

create table enrollment(
StudentID int,
	constraint [FK_Student_Enrollment] foreign key (StudentID) references students(StudentID),
CourseID int,
	constraint [FK_Course_Enrollment] foreign key (CourseID) references courses(CourseID),
LecturerID int,
	constraint [FK_Lecturer_Enrollment] foreign key (LecturerID) references lecturers(LecturerID),
Marks int null,
	constraint [check_marks_limit] check(Marks <= 100),
	constraint [PK_Enrollment] primary key(StudentID, CourseID, LecturerID)
)

select * from students

truncate table enrollment

insert into enrollment values (1, 1, 1, 90)
insert into enrollment values (1, 2, 2, 45)
insert into enrollment values (2, 3, 3, 80)
insert into enrollment values (2, 4, 4, 50)
insert into enrollment values (2, 5, 5, 54)
insert into enrollment values (5, 6, 6, 89)
insert into enrollment values (2, 1, 1, 69)
insert into enrollment values (3, 2, 2, 95)
insert into enrollment values (3, 3, 3, 65)
insert into enrollment values (4, 4, 4, 98)
insert into enrollment values (4, 5, 5, 100)
insert into enrollment values (4, 6, 6, 20)
insert into enrollment values (4, 6, 1, 34)
insert into enrollment values (5, 4, 2, 94)

select * from enrollment

select students.StudentName, STRING_AGG(courses.CourseName, ', ') AS CoursesEnrolled, Count(enrollment.LecturerID) as Lecturers
from enrollment
inner join students on enrollment.StudentID = students.StudentID
inner join courses on enrollment.CourseID = courses.CourseID
inner join lecturers on enrollment.LecturerID = lecturers.LecturerID
group by students.StudentName

select StudentID, [1], [2], [3], [4], [5], [6] from 
(select StudentID, [CourseID], Marks from enrollment)Tab1
PIVOT (
sum(Marks) for [CourseID] in ([1], [2], [3], [4], [5], [6])) as Tab2
order by Tab2.StudentID

select students.StudentName, [1], [2], [3], [4], [5], [6] from 
(select StudentID, [CourseID], Marks from enrollment)Tab1
PIVOT (
sum(Marks) for [CourseID] in ([1], [2], [3], [4], [5], [6])) as Tab2
inner join students on tab2.StudentID = students.StudentID
order by Tab2.StudentID

create table attendence(
date Date, 
StudentID int,
	constraint [FK_Student_Attendence_Report] foreign key (StudentID) references students(StudentID),
LecturerID int,
	constraint [FK_Lecturer_AttendenceMark_Report] foreign key (LecturerID) references lecturers(LecturerID),
Status bit not null,
constraint [PK_Attendence] primary key (date, StudentID),
constraint [unique_attendence_lecturer_mark] unique (date, StudentID, LecturerID)
)

select * from enrollment

insert into attendence values ('2021-04-15', 1, 1, 1)
insert into attendence values ('2021-04-15', 2, 1, 1)
insert into attendence values ('2021-04-15', 3, 2, 0)
insert into attendence values ('2021-04-15', 4, 4, 1)
insert into attendence values ('2021-04-15', 5, 6, 0)
insert into attendence values ('2021-04-16', 1, 1, 2)
insert into attendence values ('2021-04-16', 2, 1, -2)

select * from attendence

select attendence.date, students.StudentName, lecturers.LecturerName, 
case 
	when attendence.Status = 1 then 'Present'
	when attendence.Status = 0 then 'Absent'
END AS Attendence
from attendence
inner join students on attendence.StudentID = students.StudentID
inner join lecturers on attendence.LecturerID = lecturers.LecturerID

create table logs(
logs int
)

GO
CREATE TRIGGER TR_MARKS ON enrollment
FOR UPDATE 
AS
BEGIN
  INSERT INTO logs
  SELECT Marks
  FROM inserted
END

select * from logs

update enrollment 
set Marks = 90 where StudentID = 1 and CourseID = 1

select * from enrollment
