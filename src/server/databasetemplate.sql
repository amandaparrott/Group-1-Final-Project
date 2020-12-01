create database calendar;
use  calendar;

-- (parent user account would have admin privileges and be able to set mandatory tasks)
create table users (
   id int not null auto_increment primary key,
   name varchar(100) not null,
   email varchar(70) not null,
   password varchar(60) not null,
   role varchar(6) not null,
   _created datetime default current_timestamp
);

create table events (
   id int not null auto_increment primary key,
   title varchar(50) not null,
   location varchar(70) not null,
   time varchar(50) not null,
   duedate varchar(10) not null, 
   mandatorytask boolean,
   completedtask boolean,
   _created datetime default current_timestamp,
	userid int not null
); 

ALTER table events
ADD CONSTRAINT fk_userid
foreign key (userid) references users(id);

SELECT * FROM events JOIN users ON events.userid = users.id;

create table reminders (
   id int not null auto_increment primary key,
   content varchar(70) not null,
   userid int not null,
	_created datetime default current_timestamp
);

alter table reminders
add constraint fk_userreminderid
foreign key (userid) references users(id);

create table messages (
   id int not null auto_increment primary key,
   content varchar(200) not null,
    userid int not null,
	_created datetime default current_timestamp
);

alter table messages
add constraint fk_usermessagesid
foreign key (userid) references users(id);

create table category (
   id int not null auto_increment primary key,
   userid int not null,
   name varchar(100) not null,
   _created datetime default current_timestamp
);

ALTER table category
ADD CONSTRAINT fk_usercategoryid
foreign key (userid) references users(id);

create table EventTags (
    eventtagid int not null auto_increment primary key,
    categoryid int not null,
    userid int not null
);

alter table eventtags
drop foreign key eventtagid;

alter table EventTags
add constraint fk_eventtagid
foreign key (eventtagid) references events(id);

alter table EventTags
add constraint fk_usereventid
foreign key (userid) references users(id);

alter table EventTags
add constraint fk_categoryeventid
foreign key (categoryid) references category(id);