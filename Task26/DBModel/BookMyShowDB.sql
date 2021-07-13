create database BookMyShowDB;

use BookMyShowDB;

create table State(
ID int identity(1,1),
	constraint [State_PK] primary key (ID),
Name varchar(20) not null,
	constraint [State_Name_Unique] unique (Name)
);

create table LocationType(
ID int identity(1,1),
	constraint [LocationType_PK] primary key (ID),
Name varchar(20) not null,
	constraint [LocationType_Name_Unique] unique (Name)
);

create table Location(
ID int identity(1,1), 
	constraint [Location_Constraint_PK] primary key (ID),
Name varchar(100) not null,
StateID int not null,
	constraint [Location_State_FK] foreign key (StateID) references State(ID),
TypeID int,
	constraint [LocationType_FK] foreign key (TypeID) references LocationType(ID)
);

create table Theatre(
ID int identity(1,1),
	constraint [Theatre_Constraint_PK] primary key (ID),
Name varchar(200) not null,
LocationID int not null,
	constraint [Theatre_Location_Constraint_FK] foreign key (LocationID) references Location(ID),
	constraint [Theatre_Location_Constraint_Unique] unique (Name, LocationID)
);

create table Movie(
ID int identity(1,1), 
	constraint [Movie_Constraint_PK] primary key (ID),
ReleaseDate date default null,
Certification int default null,
EndingDate date default null,
Status smallint,
APIID int
);

create table Genre(
ID int identity(1,1),
	constraint [Genre_Constraint_PK] primary key (ID),
Name varchar(20) not null
);

create table Movie_Genre_Mapping(
MovieID int,
	constraint [Movie_Genre_Mapping_FK] foreign key (MovieID) references Movie(ID),
GenreID int,
	constraint [Genre_Mapping_FK] foreign key (GenreID) references Genre(ID),
	constraint [Movie_Genre_Mapping_PK] primary key (MovieID, GenreID)
);

create table Language(
ID int identity(1,1),
	constraint [Language_Constraint_PK] primary key (ID),
Name varchar(20) not null
);

create table Movie_Language_Mapping(
MovieID int,
	constraint [Movie_Language_Mapping_FK] foreign key (MovieID) references Movie(ID),
LanguageID int,
	constraint [Language_Mapping_FK] foreign key (LanguageID) references Language(ID),
	constraint [Movie_Language_Mapping_PK] primary key (MovieID, LanguageID)
);

drop table Screen;

create table Screen(
ID int identity(1,1),
	constraint [Screen_Constraint_PK] primary key(ID),
Code varchar(30) not null,
Levels int not null,
	constraint [Screen_Levels_Check] check (Levels between 1 and 26),
SeatsPerLevel int not null,
TheatreID int not null,
	constraint [Screen_Theatre_Constraint_FK] foreign key (TheatreID) references Theatre(ID),
	constraint [Screen_Unique] unique(TheatreID, Code),
MovieID int default null,
	constraint [Screen_Movie_Constraint_FK] foreign key (MovieID) references Movie(ID),
SeatPrice int not null
);

drop table Seat;

create table Seat(
ID int identity(1,1),
	constraint [Seat_Constraint_PK] primary key (ID),
ScreenID int,
	constraint [Seat_Screen_Constraint_FK] foreign key (ScreenID) references Screen(ID),
Code varchar(5) not null,
	constraint [Seat_Screen_Unique] unique(ScreenID, Code),
Active smallint default 1
);

drop trigger Screen_Trigger
go
create trigger Screen_Trigger
on Screen
after insert
as
begin
    declare @o_cnt int = 1;
    declare @i_cnt int = 1;

    while @o_cnt <= (select Levels from inserted)
    begin
		while @i_cnt <= (select SeatsPerLevel from inserted)
		begin
			insert into Seat (ScreenID, Code) 
			values ((select ID from inserted), (SELECT Code = CHAR(64 + @o_cnt) + CAST(@i_cnt as char)))
			set @i_cnt = @i_cnt + 1;
		end
		set @o_cnt = @o_cnt + 1;
		set @i_cnt = 1;
    end
end;
go


create table Customer(
ID int identity(1,1),
	constraint [User_Constraint_PK] primary key (ID),
FirstName varchar(100) not null,
LastName varchar(50) default null,
Email varchar(40) not null,
Password varchar(max) not null,
DisplayPicture varchar(max) null,
Status smallint not null default 0,
CreationDate date not null
);

create table Booking(
ID int identity(1,1),
	constraint [Booking_Constraint_PK] primary key (ID),
Amount int not null,
Time datetime not null,
Status int not null,
SelectedSeats varchar(max),
PaymentMode smallint,
CustomerID int,
	constraint [User_Booking_Constraint_FK] foreign key (CustomerID) references Customer(ID)
);

create table Ticket(
ID int identity(1,1),
	constraint [Ticket_Constraint_PK] primary key (ID),
Date date not null,
ShowTime time not null,
SeatID int,
	constraint [Seat_Ticket_Constraint_FK] foreign key (SeatID) references Seat(ID),
BookingID int,
	constraint [Booking_Ticket_Constraint_FK] foreign key (BookingID) references Booking(ID)
);

