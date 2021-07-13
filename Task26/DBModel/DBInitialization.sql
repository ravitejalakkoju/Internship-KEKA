use BookMyShowDB;

select * from State;

insert into State values ('Andhra Pradesh');
insert into State values ('Assam');
insert into State values ('Arunachal Pradesh');
insert into State values ('Bihar');
insert into State values ('Goa');
insert into State values ('Gujarat');
insert into State values ('Jammu and Kashmir');
insert into State values ('Jharkhand');
insert into State values ('West Bengal');
insert into State values ('Karnataka');
insert into State values ('Kerala');
insert into State values ('Madhya Pradesh');
insert into State values ('Maharashtra');
insert into State values ('Manipur');
insert into State values ('Meghalaya');
insert into State values ('Mizoram');
insert into State values ('Nagaland');
insert into State values ('Orissa');
insert into State values ('Punjab');
insert into State values ('Rajasthan');
insert into State values ('Sikkim');
insert into State values ('Tamil Nadu');
insert into State values ('Telangana');
insert into State values ('Tripura');
insert into State values ('Uttaranchal');
insert into State values ('Uttar Pradesh ');
insert into State values ('Haryana');
insert into State values ('Himachal Pradesh');
insert into State values ('Chhattisgarh');

insert into State values ('Andaman and Nicobar');
insert into State values ('Pondicherry');
insert into State values ('Dadra and Nagar Haveli');
insert into State values ('Daman and Diu');
insert into State values ('Delhi');
insert into State values ('Chandigarh');
insert into State values ('Lakshadweep');

select * from LocationType;

insert into LocationType values ('City');
insert into LocationType values ('Town');
insert into LocationType values ('Village');

select * from Location;

insert into Location values ('Hyderabad', 23, 1);
insert into Location values ('Bangalore', 10, 1);
insert into Location values ('Mumbai', 13, 1);
insert into Location values ('Delhi', 34, 1);
insert into Location values ('Ahmedabad', 6, 1);
insert into Location values ('Chennai', 22, 1);
insert into Location values ('Kolkata', 9, 1);
insert into Location values ('Jaipur', 20, 1);
insert into Location values ('Lucknow', 26, 1);
insert into Location values ('Kanpur', 26, 1);
insert into Location values ('Nagpur', 13, 1);
insert into Location values ('Indore', 12, 1);
insert into Location values ('Bhopal', 12, 1);
insert into Location values ('Visakhapatnam', 1, 1);

select Location.Name, State.Name from Location 
inner join State on Location.StateID = State.ID

select * from Theatre order by ID;

insert into Theatre values ('Prasad''s Imax', 1)
insert into Theatre values ('AMB Cinemas: Gachibowli', 1)
insert into Theatre values ('INOX: Maheshwari', 1)
insert into Theatre values ('Sandhya 70mm Dolby Atmos: RTC X Roads', 1)
insert into Theatre values ('INOX: GSM Mall, Hyderabad', 1)
insert into Theatre values ('INOX: GVK One, Banjara Hills', 1)

select Theatre.Name, Location.Name from Theatre 
inner join Location on Theatre.LocationID = Location.ID;

select * from Genre;

insert into Genre values ('Action');
insert into Genre values ('Animation');
insert into Genre values ('Adventure');
insert into Genre values ('Comedy');
insert into Genre values ('Crime');
insert into Genre values ('Drama');
insert into Genre values ('Fantasy');
insert into Genre values ('Historical');
insert into Genre values ('Horror');
insert into Genre values ('Mystery');
insert into Genre values ('Romance');
insert into Genre values ('Science fiction');
insert into Genre values ('Thriller');

select * from Language;

insert into Language values ('English');
insert into Language values ('Hindi');
insert into Language values ('Kannada');
insert into Language values ('Tamil');
insert into Language values ('Telugu');

select Theatre.Name, Screen.Code as ScreenCode, Screen.SeatPrice from Screen 
inner join Theatre on Screen.TheatreID = Theatre.ID and Theatre.ID = 1
order by Screen.Code;

insert into Screen values ('A', 10, 20, 1, null, 250);
insert into Screen values ('B', 10, 20, 1, null, 250);
insert into Screen values ('C', 10, 10, 1, null, 150);
insert into Screen values ('D', 10, 10, 1, null, 150);
insert into Screen values ('E', 10, 10, 1, null, 150);

select * from Screen;

select Theatre.Name, Screen.Code as Screen, Seat.Code as Seat from Seat
inner join Screen on Seat.ScreenID = Screen.ID
inner join Theatre on Screen.TheatreID = Theatre.ID;

select Theatre.Name, Screen.Code as ScreenCode, Count(Seat.ID) as Seats from Seat
inner join Screen on Seat.ScreenID = Screen.ID
inner join Theatre on Screen.TheatreID = Theatre.ID
group by Theatre.Name, Screen.Code;

select * from Seat where ScreenID = 1;