create database BookMyShow;

create table Movie(
ID int, 
	constraint [PK_movie_id] primary key (ID),
Name varchar(max) not null
);

create table Theatre(
ID int,
	constraint [PK_Theatre_id] primary key (ID),
Name varchar(max) not null,
	constraint [PK_Theatre_Name] unique (ID),
LocationID int not null
);

create table screen(
ID int,
	constraint [PK_Screen_id] primary key (ID),
Name varchar(5) not null,
MovieID int,
	constraint [FK_Movie_ID] foreign key (MovieID) references Movie(ID),
NumberOfRows int not null,
SeatsPerRow int not null,
TheatreID int not null,
	constraint [FK_Theatre_ID] foreign key (TheatreID) references Theatre(ID)
);

create table Transactions(
ID int,
	constraint [PK_Transaction_ID] primary key (ID),
Price int not null,
Status int not null,
Mode int not null
);

create table Ticket(
ID int,
	constraint [PK_Ticket_ID] primary key (ID),
ScreenID int,
	constraint [FK_Tkt_Screen_ID] foreign key (ScreenID) references Screen(ID),
TheatreID int not null,
	constraint [FK_Tkt_Theatre_ID] foreign key (TheatreID) references Theatre(ID),
TransactionID int not null,
	constraint [FK_Tkt_Transaction_ID] foreign key (TransactionID) references Transactions(ID),
Seats varchar(max) not null,
PurchaseTime DateTime not null,
ShowTime DateTime not null,
Price int not null
);

create table Logs(
ID int,
	constraint [PK_Logs_ID] primary key (ID),
TicketID int,
	constraint [PK_logs_Ticket_Id] foreign key (TicketID) references Ticket(ID),
TransactionID int not null,
	constraint [FK_Logs_Transaction_ID] foreign key (TransactionID) references Transactions(ID),
);

use BookMyShow;