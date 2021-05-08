use [Session 2]

select Employee.firstname, Employee.lastname from Employee
inner join Orders on Employee.EmployeeID = Orders.EmployeeID
and OrderDate between '1996-08-15' and '1997-08-15'

select count(OrderDetails.ProductID) as TotalProducts from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
and OrderDate between '1997-01-13' and '1997-04-16'

select count(OrderDetails.Quantity) as TotalQuantity from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
and OrderDate between '1997-01-13' and '1997-04-16'
and FirstName = 'Anne' and LastName = 'Dodsworth'

select count(OrderID) as Orders from Orders
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
and Employee.FirstName ='Robert' and Employee.LastName = 'King'

select count(OrderDetails.ProductID) as Products from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
and Employee.FirstName ='Robert' and Employee.LastName = 'King'
and Orders.OrderDate between '1996-08-15' and '1997-08-15'

select Employee.EmployeeID, concat(Employee.FirstName, SPACE(1), Employee.LastName) as FullName, Employee.HomePhone from Employee
inner join Orders on Employee.EmployeeID = Orders.EmployeeID
and Orders.OrderDate between '1997-01-13' and '1997-04-16'

select top 1 OrderDetails.ProductID, Products.ProductName, count(OrderDetails.OrderID) as OrderCount from OrderDetails
inner join Products on OrderDetails.ProductID = Products.ProductID
group by OrderDetails.ProductID, Products.ProductName
order by OrderCount desc


select top 5 OrderDetails.ProductID, Products.ProductName, count(OrderDetails.OrderID) as OrderCount from OrderDetails
inner join Products on OrderDetails.ProductID = Products.ProductID
group by OrderDetails.ProductID, Products.ProductName
order by OrderCount

select (UnitPrice * Quantity) as TotalPrice from Orders
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
inner join OrderDetails on OrderDetails.OrderID = Orders.OrderID
and Orders.OrderDate = '1997-01-13' and Employee.FirstName = 'Laura' and Employee.LastName = 'Callahan'

select count(distinct Employee.EmployeeID) from Employee 
inner join Orders on Orders.EmployeeID = Employee.EmployeeID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '1'
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Products on OrderDetails.ProductID = Products.ProductID
and Products.ProductName in ('Gorgonzola Telino', 'Gnocchi di nonna Alice', 'Raclette Courdavault', 'Camembert Pierrot' )

select concat(Employee.FirstName, SPACE(1), Employee.LastName) as FullName from Employee
inner join Orders on Employee.EmployeeID = Orders.EmployeeID and Orders.OrderDate between '1997-01-13' and '1997-01-30'
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Products on Products.ProductID = OrderDetails.ProductID
and Products.ProductName like 'Tofu'

select Employee.EmployeeID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) as FullName, DATEDIFF(day, Employee.BirthDate, GETDATE()) as Days, DATEDIFF(month, Employee.BirthDate, GETDATE()) as Months, DATEDIFF(year, Employee.BirthDate, GETDATE()) as Years from Employee
inner join Orders on Employee.EmployeeID = Orders.EmployeeID and MONTH(Orders.OrderDate) = '8'

select Shippers.CompanyName, count(Orders.OrderID) as OrderCount from Orders
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
group by Shippers.CompanyName

select Shippers.CompanyName, count(OrderDetails.ProductID) as OrderCount from Orders
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
group by Shippers.CompanyName

select top 1 Shippers.ShipperID, Shippers.CompanyName, count(Orders.OrderID) as OrderCount from Orders
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
group by Shippers.ShipperID, Shippers.CompanyName
order by OrderCount desc

select top 1 Shippers.ShipperID, Shippers.CompanyName, count(OrderDetails.ProductID) as OrderCount from Orders
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
where Orders.OrderDate between '1996-08-10' and '1998-09-20'
group by Shippers.ShipperID, Shippers.CompanyName
order by OrderCount desc

select * from Orders

select Employee.EmployeeID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) as FullName from Employee
left join Orders on Orders.EmployeeID = Employee.EmployeeID and Orders.OrderDate = '1997-04-04'
where Orders.EmployeeID is null

select count(OrderDetails.ProductID) as ShippedProducts from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Employee on Orders.EmployeeID = Employee.EmployeeID and CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) = 'Steven Buchanan'

select count(OrderDetails.ProductID) as ShippedProducts from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Employee on Orders.EmployeeID = Employee.EmployeeID and CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) = 'Michael Suyama'
inner join Shippers on Shippers.ShipperID = Orders.ShipperID and Shippers.CompanyName = 'Federal Shipping'

select count(OrderID) as OrderCount from (
select Orders.OrderID, count(Suppliers.Country) as Countries from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Products on OrderDetails.ProductID = Products.ProductID
inner join Suppliers on Products.ProductID = Suppliers.SupplierID and Suppliers.Country in ('UK', 'Germany')
group by Orders.OrderID) MyTable 
where Countries = 2

select sum(Products.UnitPrice * OrderDetails.Quantity) as Amount from OrderDetails
inner join Orders on Orders.OrderID = OrderDetails.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '1' 
inner join Products on OrderDetails.ProductID = Products.ProductID
inner join Suppliers on Products.SupplierID = Suppliers.SupplierID
and Suppliers.CompanyName = 'Exotic Liquids'

select distinct day(Orders.OrderDate) as OrderDay from OrderDetails
inner join Products on OrderDetails.ProductID = Products.ProductID
inner join Orders on OrderDetails.OrderID = Orders.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '1' 
left join Suppliers on Products.SupplierID = Suppliers.SupplierID and Suppliers.CompanyName = 'Tokyo Traders'
where Suppliers.SupplierID is null

select * from Employee left join(
select Orders.EmployeeID, Suppliers.SupplierID from Orders 
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Products on OrderDetails.ProductID = Products.ProductID
left join Suppliers on Products.SupplierID = Suppliers.SupplierID and Suppliers.CompanyName = 'Ma Maison'
where Suppliers.SupplierID is not null and month(Orders.OrderDate) = '5') MyTable on MyTable.EmployeeID = Employee.EmployeeID
where MyTable.SupplierID is null

select top 1 Shippers.CompanyName, count(OrderDetails.ProductID) as ShippedProducts from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Shippers on Shippers.ShipperID = Orders.ShipperID and month(Orders.OrderDate) in ('9', '10') and year(Orders.OrderDate) = '1997'
group by Shippers.CompanyName
order by ShippedProducts

select distinct Products.ProductID, Products.ProductName from Products left join(
select OrderDetails.ProductID from OrderDetails
inner join Orders on OrderDetails.OrderID = Orders.OrderID and MONTH(Orders.OrderDate) = '08') MyTable 
on MyTable.ProductID = Products.ProductID where MyTable.ProductID is null
order by Products.ProductID

select CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) as FullName, string_agg(Products.ProductName, ', ') as Products from Employee 
full outer join Products on Employee.EmployeeID > 0
left join (
select distinct Orders.EmployeeID, OrderDetails.ProductID from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID) MyTable on MyTable.EmployeeID = Employee.EmployeeID and Products.ProductID = MyTable.ProductID
where MyTable.ProductID is null
group by CONCAT(Employee.FirstName, SPACE(1), Employee.LastName)
order by FullName

select top 1 Shippers.CompanyName, count(Orders.OrderID) as OrderCount from Orders
inner join Shippers on Orders.ShipperID = Shippers.ShipperID 
and year(Orders.OrderDate) in ('1996', '1997') 
and month(Orders.OrderDate) in ('4','5','6')
group by Shippers.CompanyName
order by OrderCount desc

select top 1 Suppliers.Country, count(OrderDetails.ProductID) as Products from Orders
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join Products on OrderDetails.ProductID = Products.ProductID
inner join Suppliers on Products.SupplierID = Suppliers.SupplierID
where year(Orders.OrderDate) = '1997'
group by Suppliers.Country
order by Products desc

select * from Orders

select avg(DATEDIFF(day, Orders.OrderDate, Orders.ShippedDate)) as AvgShippingDays from Orders

select Shippers.CompanyName from Shippers
inner join (
select top 1 Orders.ShipperID, avg(DATEDIFF(day, Orders.OrderDate, Orders.ShippedDate)) as AvgShippingDays from Orders
group by Orders.ShipperID
order by AvgShippingDays) TopShipper
on TopShipper.ShipperID = Shippers.ShipperID

select Orders.OrderID, concat(Employee.FirstName, space(1), Employee.LastName) as FullName, count(OrderDetails.ProductID) as NumberOfProducts, MinShipOrder.MinShip as NumberOfDays, Shippers.CompanyName from Orders
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
inner join OrderDetails on Orders.OrderID = OrderDetails.OrderID
inner join (Select min(datediff(day, Orders.OrderDate, Orders.ShippedDate)) as MinShip from Orders) MinShipOrder
on MinShipOrder.MinShip = datediff(day, Orders.OrderDate, Orders.ShippedDate)
group by Orders.OrderID, concat(Employee.FirstName, space(1), Employee.LastName), MinShipOrder.MinShip, Shippers.CompanyName
/* UNIONS */

select Orders.OrderID, concat(Employee.FirstName, space(1), Employee.LastName) as FullName, Shippers.CompanyName from Orders
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
inner join (Select min(datediff(day, Orders.OrderDate, Orders.ShippedDate)) as MinShip from Orders) MinShipOrder
on MinShipOrder.MinShip = datediff(day, Orders.OrderDate, Orders.ShippedDate)
union
select Orders.OrderID, concat(Employee.FirstName, space(1), Employee.LastName) as FullName, Shippers.CompanyName from Orders
inner join Employee on Orders.EmployeeID = Employee.EmployeeID
inner join Shippers on Orders.ShipperID = Shippers.ShipperID
inner join (Select max(datediff(day, Orders.OrderDate, Orders.ShippedDate)) as MaxShip from Orders) MaxShipOrder
on MaxShipOrder.MaxShip = datediff(day, Orders.OrderDate, Orders.ShippedDate)


select Products.ProductID, Products.ProductName, OrderDetails.UnitPrice from Products
inner join OrderDetails on OrderDetails.ProductID = Products.ProductId
inner join Orders on OrderDetails.OrderID = Orders.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '10' and DATEDIFF(WEEK, DATEADD(MONTH, DATEDIFF(MONTH, 0, OrderDate), 0), OrderDate) = 1
inner join (select min(OrderDetails.UnitPrice) as MinUnitPrice from OrderDetails
inner join Orders on OrderDetails.OrderID = Orders.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '10' and DATEDIFF(WEEK, DATEADD(MONTH, DATEDIFF(MONTH, 0, OrderDate), 0), OrderDate) = 1) MinPriceProduct 
on OrderDetails.UnitPrice = MinPriceProduct.MinUnitPrice
union
select Products.ProductID, Products.ProductName, OrderDetails.UnitPrice from Products
inner join OrderDetails on OrderDetails.ProductID = Products.ProductId
inner join Orders on OrderDetails.OrderID = Orders.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '10' and DATEDIFF(WEEK, DATEADD(MONTH, DATEDIFF(MONTH, 0, OrderDate), 0), OrderDate) = 1
inner join (select max(OrderDetails.UnitPrice) as MaxUnitPrice from OrderDetails
inner join Orders on OrderDetails.OrderID = Orders.OrderID and year(Orders.OrderDate) = '1997' and month(Orders.OrderDate) = '10' and DATEDIFF(WEEK, DATEADD(MONTH, DATEDIFF(MONTH, 0, OrderDate), 0), OrderDate) = 1) MaxPriceProduct 
on OrderDetails.UnitPrice = MaxPriceProduct.MaxUnitPrice

/* Case */

select EmployeeID, ShipperID,
case 
	when ShipperID = 1 then 'Shipping Federal'
	when ShipperID = 2 then 'United Package'
	when ShipperID = 3 then 'Express Speedy'
END AS ShippersName
from Orders
where EmployeeID in (1,3,5,7)
group by EmployeeID, ShipperID
order by EmployeeID