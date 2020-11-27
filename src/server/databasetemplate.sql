create db calendar;

create schema pUser;
use calendar;

/*
pUser                                                
Id
Name
Email
Password
Role
parentid
_created 
(parent user account would have admin privileges and be able to set mandatory tasks)
*/


create table pUser (
   id int not null auto_increment primary key,
   name varchar(100) not null,
   email varchar(70) not null,
   password varchar(60) not null,
   role varchar(5) not null,
   parentid int not null,
   _created datetime default current_timestamp,
    foreign key (parentid) references pUser(id)
); 

/*
cUser
Id
Name
Email
Password
Role
Childid
_created
(child user account will be connected to parent user account. They can still set their own events, but cannot override what the parent sets as mandatory)
*/

create table cUser (
   id int not null auto_increment primary key,
   name varchar(100) not null,
   email varchar(70) not null,
   password varchar(60) not null,
   role varchar(5) not null,
   childid int not null,
   _created datetime default current_timestamp,
    foreign key (childid) references cUser(id)
); 

/*
Events
Id
Title
Location
Time
date/duedate
Mandatorytask (boolean)
completedtask (boolean)
categoryId
_created
*/

create table events (
   id int not null auto_increment primary key,
   title varchar(50) not null,
   location varchar(70) not null,
   time varchar(50) not null,
   duedate varchar(10) not null, 
   mandatorytask boolean,
   completedtask boolean,
   categoryid int not null,
   _created datetime default current_timestamp,
    foreign key (categoryid) references events(id)
); 

/*
Category
Id
Name
_created
(would work like blogtags from personal blog lab)
*/

create table category (
   id int not null auto_increment primary key,
   name varchar(100) not null,
   _created datetime default current_timestamp
); 

/*
EventTags 
Categoryid
cUserId
pUserId
*/

create table EventTags (
    foreign key (categoryid) references category(id),
    foreign key (cUserid) references cUser(childid),
    foreign key (parentid) references pUser(parentid)
); 

/*Addtn'l checklist items refer to the the Overview Doc - pulling existing items form something else but we can always adjust frontend*/

/*
CREATE USER 'blogs'@'localhost' IDENTIFIED BY 'blogs123';
GRANT ALL PRIVILEGES ON blogs.* TO 'blogs'@'localhost';
*/
