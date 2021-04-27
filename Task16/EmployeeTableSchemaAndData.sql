/****** Object:  Table [dbo].[Employee]    Script Date: 10/25/2010 11:22:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Employee](
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Title] [varchar](50) NULL,
	[Age] [int] NULL,
	[Salary] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Smith', N'Programmer', 54, 27000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Brooks', N'General Manager', 55, 40099)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Fanning', N'Programmer', 28, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Moore', N'Programmer', 27, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Finger', N'Fresher', 22, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Brooks', N'Programmer', 27, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Tait', N'Fresher', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Tolstoy', N'Fresher', 21, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Hopkins', N'Programmer', 26, 19500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Miles', N'General Manager', 54, 30000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Moore', N'Software Engineer', 32, 32513)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Duck', N'Programmer', 35, 19300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Hamilton', N'Fresher', 35, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Karan', N'Fresher', 15, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Peitersen', N'Programmer', 40, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Whales', N'Software Engineer', 20, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Karan', N'Programmer', 38, 30260)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Logan', N'Programmer', 23, 20000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Gran', N'Fresher', 10, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Shield', N'Programmer', 25, 19000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Bichel', N'Fresher', 26, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Stone', N'Fresher', 24, 21000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Groove', N'Software Engineer', 47, 23000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Vista', N'Programmer', 27, 37570)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Bang', N'Fresher', 34, 31000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Hamser', N'Fresher', 42, 34000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Bones', N'Fresher', 51, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Luther', N'Programmer', 45, 33000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Marss', N'Fresher', 24, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Tauton', N'Programmer', 25, 32500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Vaughan', N'Programmer', 25, 27000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Garten', N'Programmer', 55, 40099)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Whitaker', N'Programmer', 25, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Merci', N'Programmer', 27, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Brown', N'Software Engineer', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Alba', N'Programmer', 27, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Sons', N'Fresher', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Mitchell', N'Fresher', 21, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Bravo', N'Programmer', 26, 19500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Kings', N'General Manager', 54, 30000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Dolce', N'Programmer', 32, 32513)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Bus', N'Programmer', 35, 19300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Scott', N'Fresher', 35, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Jones', N'Fresher', 15, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Reese', N'Software Engineer', 40, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Turtle', N'Software Engineer', 40, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Apple', N'Programmer', 38, 30260)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Hammer', N'Programmer', 23, 20000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Gold', N'Fresher', 10, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Rise', N'Programmer', 25, 19000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Bell', N'Fresher', 26, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Moore', N'Fresher', 24, 21000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Tamahori', N'Programmer', 84, 23000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Horn', N'Programmer', 27, 37570)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Crank', N'Programmer', 34, 31000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Josh', N'Fresher', 42, 34000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Michael', N'Fresher', 51, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Long', N'Programmer', 45, 33000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Tamahori', N'Software Engineer', 24, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Moore', N'Programmer', 25, 32500)
GO

select * from employee;

/* Basic Select Statements */
GO
select firstname, lastname, title, age, salary from employee; 
select * from employee;
select firstname, age, salary from employee;
select firstname as Name from employee;
select firstname + ' ' +lastname as Name from employee;
GO

/*Using where clause*/
select * from employee where salary > 38000;
select firstname, lastname from employee where age < 24;
select firstname, lastname, salary from employee where title = 'Programmer';
select * from employee where CHARINDEX('0', lastname) > 0;
select lastname from employee where firstname = 'Kelly';
select * from employee where lastname = 'Moore';
select * from employee where age >= 35;

/* Using multiple where clauses */
select firstname, lastname, age, salary from employee where age > 24 AND age < 48;
select firstname, title, lastname from employee where age > 28 AND age < 62 AND salary > 31250;
select * from employee where age < 48 AND salary >= 21520;
select firstname, age from employee where firstname LIKE 'John%' AND (salary > 25000 AND salary < 35000);

/* using orderby clause */
select * from employee order by age desc;
select * from employee order by age;
select * from employee order by salary desc;
select * from employee order by salary;
select * from employee where age >= 17 order by salary;
select * from employee where age < 34 order by salary desc;

/* Micellanious (count, sum(), max(), min()) */
select * from employee order by LEN(firstname);
select count(*) from employee where age > 45;
select firstname, lastname, title, age+5 as age, salary-250 as salary from employee;
select count(lastname) as Numberofemployees from employee 
where lastname LIKE '%re' or lastname LIKE '%ks' or lastname LIKE '%ri';
select SUBSTRING(lastname, LEN(lastname)-1, LEN(lastname)) as EndingString, count(lastname) as Numberofemployees from employee 
where lastname LIKE '%re' or lastname LIKE '%ks' or lastname LIKE '%ri' group by lastname;
select avg(salary) as AverageSalary from employee;
select avg(salary) as FreshersAverageSalary from employee where title='Fresher';
select avg(age) as FreshersAverageSalary from employee where title='Programmer';
select avg(age) as FreshersAverageSalary from employee where (age >= 35 AND age <= 50);
select count(*) as NumberofFreshers from employee where title='Fresher';
select (count(*)* 100 / (Select Count(*) From employee)) as PercentageofProgrammer from employee where title = 'Programmer';
select sum(salary) as CombinedSalary from employee where age >= 40;
select sum(salary) as FresherAndProgrammerCombinedSalary from employee where (title='Fresher' OR title='Programmer');
select sum(salary)*12*3 as FreshersCombinedSalary from employee where title='Fresher' AND age > 27;

/* using subqueries */
select firstname, lastname, age from employee where age in (select max(age) from employee where salary < 35000);
select firstname + ' ' + lastname as EmployeeName from employee where age in (select min(age) from employee where title='General Manager') and title='General Manager';
select * from employee where age in (select max(age) from employee where title='Fresher' and salary < 35000) and title='Fresher' and salary < 35000;
select firstname, age from employee where (firstname like 'John%' or firstname like 'Michael%') and (salary > 17000 and salary < 26000);

/* Using GroupBy and having clause */
select title, count(title) as NumberofEmployees from employee group by title order by NumberofEmployees;
select title, avg(salary) as AverageSalary from employee group by title;
select avg(salary) as AvgSalNonFresher from employee where title != 'Fresher';
select title, avg(age) as AvgAgeofemployees from employee group by title;
select title, count(title) as Numberofemployees from employee where (age > 25 and age < 40) group by title;
select title, avg(salary) as AvgSalaryfrom employee where salary >= 25000 group by title;
select title, sum(age) as SumofAges from employee group by title having sum(age) > 30;

/* Basic Data Modification */
update employee set lastname='Moore' where firstname='Lisa';
update employee set age+=1, salary += 5000 where firstname='Ginger' and lastname='Finger';
update employee set title = 'Engineer' where title='Programmer';
update employee set salary+=3500 where salary < 30000;
update employee set salary-=((salary*15)/100) where salary > 35500;

drop table employee;
