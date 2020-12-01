use calendar;

insert into users(
name,
email,
password,
role
)

values
("Tim", "timgmail", "pass1", "parent"),
("Jake", "jakegmail", "pass2", "parent"),
("Josh", "joshgmail", "pass3", "child"),
("Will", "willgmail", "pass4", "child");
SELECT * FROM users;

insert into events(
   title,
   location,
   time,
   duedate, 
   mandatorytask,
   completedtask,
   userid
)

VALUES
("History Class","BHAM","9:00AM","12/01/2020","1","0", 3),
("Pickup Football Game","BHAM","3:00PM","12/01/2020","0","0", 3),
("Family Dinner","BHAM","5:30PM","12/01/2020","0","0", 3),
("Dentist Appointment","BHAM","8:00AM","12/01/2020","1","0", 4),
("Walking Dog","BHAM","7:00AM","12/01/2020","1","0", 4);
SELECT * FROM events JOIN users ON events.userid = users.id;

insert into reminders(
    userid,
    content
)
VALUES
(1, "This is a parent reminder"),
(2, "This is a parent reminder"),
(3, "This is a child reminder"),
(4, "This is a child reminder");
SELECT * FROM reminders JOIN users ON reminders.userid = users.id;

insert into messages(
    userid,
    content
)
VALUES
(1, "This is a parent message"),
(2, "This is a parent message"),
(3, "This is a child message"),
(4, "This is a child message");
SELECT * FROM messages JOIN users ON messages.userid = users.id;

insert into category (
    userid,
    name
)
values 
(3, "School"),
(3, "Sports"),
(3, "Family Time"),
(4, "Health"),
(4, "Chores");
SELECT * FROM category JOIN users ON category.userid = users.id;

insert into EventTags (
    eventtagid,
    categoryid,
    userid
)

VALUES
(1, 5, 1),
(2, 4, 2),
(3, 3, 3),
(4, 2, 4),
(5, 1, 4);
select * from eventtags;