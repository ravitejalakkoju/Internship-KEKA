use [Session 2]

select firstname, lastname from employee e
inner join (select distinct EmployeeID from Orders
where OrderDate BETWEEN '1996-08-15' AND '1997-08-15') o on e.EmployeeID = o.EmployeeId;

select distinct EmployeeID from Orders where OrderDate < '1996-10-16';

select count(OrderID) as OrderCount  from Orders where OrderDate between '1997-01-13' and '1997-04-16';

select sum(Quantity) as Quantity from OrderDetails od inner join
(select OrderID from Orders o where o.EmployeeID in 
	(select EmployeeID from Employee where FirstName = 'Anne' and LastName = 'Dodsworth') 
		and OrderDate between '1997-01-13' and '1997-04-16') orderList
			on orderList.OrderID = od.OrderID;

select count(OrderID) as Orders from Orders o inner join 
	(select EmployeeID from Employee where FirstName='Robert' and LastName='King') e on o.EmployeeID = e.EmployeeID;

select count(distinct ProductID) from OrderDetails od inner join 
	(select OrderID from Orders where EmployeeID in 
		(select EmployeeID from Employee where FirstName='Robert' and LastName='King')
			and OrderDate BETWEEN '1996-08-15' AND '1997-08-15') orderList 
			on orderList.OrderID = od.OrderID;

select distinct e.EmployeeID, CONCAT(e.FirstName, SPACE(1), e.LastName) as FullName, e.HomePhone from Employee e
	inner join Orders o on o.EmployeeID = e.EmployeeID and o.OrderDate between '1997-01-13' and '1997-04-16';

select top 1 p.ProductID, p.ProductName, pc.OrderCount from Products p inner join 
	(select ProductID, count(OrderID) as  OrderCount from OrderDetails group by ProductID) pc 
		on pc.ProductID = p.ProductID order by pc.OrderCount desc;

select top 5 p.ProductID, p.ProductName, pc.OrderCount as Shippings from Products p inner join 
	(select ProductID, count(OrderID) as  OrderCount from OrderDetails group by ProductID) pc 
		on pc.ProductID = p.ProductID order by pc.OrderCount;

select sum(UnitPrice) as TotalAmount from OrderDetails where OrderID in
(select OrderID from Orders where EmployeeID in 
(select EmployeeID from Employee where FirstName='Laura' and LastName='Callahan')
	and OrderDate = '1997-01-13');

select count(distinct EmployeeID) from Orders o inner join
(select OrderID from OrderDetails where ProductID in (select ProductID from Products where ProductName in ('Gorgonzola Telino', 'Gnocchi di nonna Alice', 'Raclette Courdavault', 'Camembert Pierrot'))) oid
on oid.OrderID = o.OrderID;

select CONCAT(FirstName, SPACE(1), LastName) as FullName from Employee where EmployeeID in 
(select distinct EmployeeID from Orders o inner join
(select OrderID from OrderDetails where ProductID in (select ProductID from Products where ProductName = 'Tofu')) oid
on oid.OrderID = o.OrderID and o.OrderDate between '1997-01-13' and '1997-01-30');

select EmployeeId, CONCAT(FirstName, SPACE(1), LastName) as FullName, DATEDIFF(YY, BirthDate, GETDATE()) as Years, 
		DATEDIFF(MM, BirthDate, GETDATE()) as Months, 
		DATEDIFF(DD, BirthDate, GETDATE()) as Days from Employee 
where EmployeeID in (select distinct EmployeeID from Orders where MONTH(OrderDate) ='08');

select CompanyName as ShipperName, s.OrderCount from Shippers so inner join
(select ShipperID, count(OrderID) as OrderCount from Orders group by ShipperID) s 
on so.ShipperID = s.ShipperID;

select s.CompanyName as ShipperName, sp.ShippedProducts from Shippers s inner join
(select o.ShipperID, sum(oc.ProductCount) as ShippedProducts from Orders o inner join
(select OrderID, count(ProductID) as ProductCount from OrderDetails group by OrderID) oc
on oc.OrderID = o.OrderID group by o.ShipperID) sp
on sp.ShipperID = s.ShipperID;

select top 1 s.ShipperId, s.CompanyName as ShipperName, sc.OrderCount from Shippers s inner join
(select ShipperID, count(OrderID) as OrderCount from Orders group by ShipperID) sc
on s.ShipperID = sc.ShipperID order by sc.OrderCount desc;

select top 1 s.CompanyName as ShipperName, sp.ShippedProducts from Shippers s inner join
(select o.ShipperID, sum(oc.ProductCount) as ShippedProducts from Orders o inner join
(select OrderID, count(ProductID) as ProductCount from OrderDetails group by OrderID) oc
on oc.OrderID = o.OrderID where o.OrderDate between '1996-08-10' and '1998-09-20' group by o.ShipperID) sp
on sp.ShipperID = s.ShipperID order by sp.ShippedProducts desc;

select CONCAT(FirstName, SPACE(1), LastName) as Employees from Employee where EmployeeID 
NOT IN (select distinct EmployeeID from Orders where OrderDate = '1997-04-04');

Select sum(Quantity) as ShippedProducts from OrderDetails where OrderID in 
(select OrderID from Orders where EmployeeID in 
(select EmployeeID from Employee where FirstName='Steven' and LastName='Buchanan'));

Select sum(Quantity) as ShippedProducts from OrderDetails where OrderID in 
(select OrderID from Orders where EmployeeID in 
(select EmployeeID from Employee where FirstName='Steven' and LastName='Buchanan'));

select count(OrderID) as Shippings from Orders where EmployeeID in 
(select EmployeeID from Employee where CONCAT(FirstName, LastName) in ('MichaelSuyama')) and ShipperID=3 
	group by ShipperID;

select count(OrderID) as OrdersFromUKnGermany from (select OrderID from OrderDetails where ProductID in 
(select ProductID from Products where SupplierID in
(select SupplierID from Suppliers where Country in ('UK', 'Germany')))) Orders;

select sum(Quantity*UnitPrice) as ExoticLiquidsAmount from (
select * from OrderDetails where ProductID in
(select ProductID from Products where SupplierID in 
	(select SupplierID from Suppliers where CompanyName = 'Exotic Liquids'))) ExoticOrders;

select OrderDate from Orders where OrderID in 
(select OrderID from OrderDetails od inner join
(select ProductID from Products where SupplierID in 
(select SupplierID from Suppliers where CompanyName='Tokyo Traders')) p
on od.ProductID = p.ProductID) and MONTH(OrderDate) = '01' and YEAR(OrderDate) = '1997';

select OrderDate from Orders
join OrderDetails on Orders.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
join Suppliers on Products.SupplierID = Suppliers.SupplierID
where Suppliers.CompanyName = 'Tokyo Traders' and MONTH(OrderDate) = '01' and YEAR(OrderDate) = '1997';

declare @date_from datetime, @date_to datetime
set @date_from = '01/01/1997'
set @date_to = '01/31/1997'
;with dates as(
    select @date_from as date
    union all
    select DATEADD(d,1,date) from dates where date<@date_to
)
select Day(date) from dates where date not in (
select OrderDate from Orders
join OrderDetails on Orders.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
join Suppliers on Products.SupplierID = Suppliers.SupplierID
where Suppliers.CompanyName = 'Tokyo Traders' and MONTH(OrderDate) = '01' and YEAR(OrderDate) = '1997'); 

select EmployeeID, CONCAT(FirstName,SPACE(1), LastName) as FullName from Employee where EmployeeID not in (
select distinct e.EmployeeID from Employee e
join Orders on Orders.EmployeeID = e.EmployeeID
join OrderDetails on Orders.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
join Suppliers on Products.SupplierID = Suppliers.SupplierID
where Suppliers.CompanyName = 'Ma Maison' and Month(Orders.OrderDate) = '05');

select top 1 Shippers.CompanyName, count(OrderDetails.ProductID) as Products from Shippers
join Orders on Shippers.ShipperID = Orders.ShipperID
join OrderDetails on Orders.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
where MONTH(Orders.OrderDate) between '09' and '10' and YEAR(Orders.OrderDate) = '1997'
group by Shippers.CompanyName order by Products

select distinct ProductID, ProductName from Products where ProductID not in (
select distinct Products.ProductID from Products 
join OrderDetails on Products.ProductID = OrderDetails.ProductID
join Orders on OrderDetails.OrderID = Orders.OrderID
where MONTH(Orders.OrderDate) = '08') order by ProductID;

select Employee.EmployeeID, STRING_AGG(Products.ProductID, ',') as ProductList from Employee 
full outer join Orders on Employee.EmployeeID = Orders.EmployeeID
full outer join OrderDetails on Orders.OrderID = OrderDetails.OrderID
full outer join Products on OrderDetails.ProductID = Products.ProductID
where Employee.EmployeeID is null
group by Employee.EmployeeID

select top 1 Shippers.ShipperID, Shippers.CompanyName, Count(OrderID) from Shippers
join Orders on Shippers.ShipperID = Orders.ShipperID
where MONTH(Orders.OrderDate) in ('04', '05', '06') and YEAR(Orders.OrderDate) in ('1997', '1996')
group by Shippers.ShipperID, Shippers.CompanyName
order by Shippers.ShipperID desc;

select top 1 Orders.ShipperID, Shippers.CompanyName, count(distinct Orders.OrderID) as ProductCount from Orders
join OrderDetails on OrderDetails.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
join Shippers on Orders.ShipperID = Shippers.ShipperID
group by Orders.ShipperID, Shippers.CompanyName
order by ProductCount

select avg(DATEDIFF(DAY, OrderDate, ShippedDate)) as AvgDays from Orders

select CompanyName from Shippers 
where ShipperID in (
select ShipperID from (select top 1 ShipperID, avg(DATEDIFF(DAY, OrderDate, ShippedDate)) as AvgDays from Orders
group by ShipperID order by AvgDays) TopShipper)

select top 1 Orders.OrderID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName), COUNT(Products.ProductID) as TotalProducts, AVG(DATEDIFF(DAY, Orders.OrderDate, Orders.ShippedDate)) as AvgDays from Orders
join Employee on Orders.EmployeeID = Employee.EmployeeID
join OrderDetails on Orders.OrderID = OrderDetails.OrderID
join Products on OrderDetails.ProductID = Products.ProductID
where DATEDIFF(DAY, Orders.OrderDate, Orders.ShippedDate) is not null
group by Orders.OrderID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName)
order by AvgDays

/* UNIONS */

select list.OrderID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName) as FullName, count(OrderDetails.ProductID) as ProductCount, Shippers.CompanyName, list.ShippingDays from (
select OrderID, EmployeeID, DATEDIFF(DAY, OrderDate, ShippedDate) as ShippingDays, ShipperID from Orders 
where DATEDIFF(DAY, OrderDate, ShippedDate) is not null and
DATEDIFF(DAY, OrderDate, ShippedDate) in (select min(DATEDIFF(DAY, OrderDate, ShippedDate)) as ShippingDays from Orders) 
UNION
select OrderID, EmployeeID, DATEDIFF(DAY, OrderDate, ShippedDate) as ShippingDays, ShipperID from Orders 
where DATEDIFF(DAY, OrderDate, ShippedDate) is not null and
DATEDIFF(DAY, OrderDate, ShippedDate) in (select max(DATEDIFF(DAY, OrderDate, ShippedDate)) as ShippingDays from Orders) 
) list 
join Employee on list.EmployeeID = Employee.EmployeeID
join OrderDetails on list.OrderID = OrderDetails.OrderID
join Shippers on list.ShipperID = Shippers.ShipperID
group by list.OrderID, CONCAT(Employee.FirstName, SPACE(1), Employee.LastName), Shippers.CompanyName, list.ShippingDays
order by FullName

select ProductID, ProductName, UnitPrice from Products
where UnitPrice in (select top 1 UnitPrice from OrderDetails
where OrderID in (select OrderID from Orders
where MONTH(OrderDate) = '10' and YEAR(OrderDate) = '1997' and DAY(OrderDate) between '8' and '14')
order by UnitPrice)
union
select ProductID, ProductName, UnitPrice from Products
where UnitPrice in (select top 1 UnitPrice from OrderDetails
where OrderID in (select OrderID from Orders
where MONTH(OrderDate) = '10' and YEAR(OrderDate) = '1997' and DAY(OrderDate) between '8' and '14')
order by UnitPrice desc)

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
