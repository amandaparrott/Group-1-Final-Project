--copy paste this and run everything to create database to start postman

create database calendar;
use  calendar;

create User "eventsapp"@"localhost" IDENTIFIED BY "group1";
GRANT ALL PRIVILEGES on calendar.* to"eventsapp" @"localhost";

create table users (
   id int not null auto_increment primary key,
   name varchar(100) not null,
   email varchar(70) not null,
   password varchar(60) not null,
   role varchar(6) not null,
   relationid int not null,
   childnum int not null,
   _created datetime default current_timestamp
);

insert into users(
name,
email,
password,
role,
relationid,
childnum
)

values
("Tim", "timgmail", "pass1", "parent", 1, 0),
("Jake", "jakegmail", "pass2", "parent", 2, 0),
("Josh", "joshgmail", "pass3", "child", 1, 1),
("Will", "willgmail", "pass4", "child", 2, 1),
("Jane", "janegmail", "pass5", "child", 1, 2),
("Selina", "selinagmail", "pass6", "child", 1, 3),
("Franco", "francogmail", "pass7", "child", 2, 2);
SELECT * FROM users;

create table events (
   id int not null auto_increment primary key,
   title varchar(50) not null,
   location varchar(70) not null,
   time varchar(50) not null,
   duedate varchar(10) not null, 
   mandatorytask boolean,
   completedtask boolean,
   relationid int not null,
   childnum int not null,
   _created datetime default current_timestamp
); 
select * from events;

insert into events(
   title,
   location,
   time,
   duedate, 
   mandatorytask,
   completedtask,
   relationid,
   childnum
)

VALUES
("History Class","BHAM","9:00AM","12/01/2020","1","0", 1 ,1),
("Pickup Football Game","BHAM","3:00PM","12/01/2020","0","0", 1, 1),
("Family Dinner","BHAM","5:30PM","12/01/2020","0","0", 1, 1),
("Dentist Appointment","BHAM","8:00AM","12/01/2020","1","0", 2, 1),
("Walk Dog","BHAM","5:00PM","12/01/2020","1","0", 2, 1);
SELECT * FROM events;

create table category (
   id int not null auto_increment primary key,
   categoryid int not null,
   name varchar(100) not null,
   relationid int not null,
   childnum int not null,
   _created datetime default current_timestamp
);

insert into category (
    categoryid,
    name,
    relationid,
    childnum
)
values 
(1, "School", 1, 1),
(2, "Sports", 1, 1),
(3, "Family Time", 1, 1),
(4, "Health", 1, 1),
(5, "Chores", 1, 1);
SELECT * FROM category;

create table reminders (
   id int not null auto_increment primary key,
   reminderid int not null,
   content varchar(70) not null,
   relationid int not null,
   childnum int not null,
	_created datetime default current_timestamp
);

insert into reminders(
    reminderid,
    content,
    relationid,
    childnum
)
VALUES
(1, "This is a child reminder1", 1, 1),
(2, "This is a child reminder2", 1, 1),
(3, "This is a child reminder3", 1, 1),
(4, "This is a child reminder4", 1, 1),
(5, "This is a child reminder5", 1, 1);
SELECT * FROM reminders;

create table messages (
   id int not null auto_increment primary key,
   messageid int not null,
   content varchar(70) not null,
   relationid int not null,
   childnum int not null,
	_created datetime default current_timestamp
);

insert into messages(
    messageid,
    content,
    relationid,
    childnum
)
VALUES
(1, "This is a child message1", 1, 1),
(2, "This is a child message2", 1, 1),
(3, "This is a child message3", 1, 1),
(4, "This is a child message4", 1, 1),
(5, "This is a child message5", 1, 1);
SELECT * FROM messages;