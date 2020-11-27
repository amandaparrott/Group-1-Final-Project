create schema blogs;
use blogs;

create table Blogs (
   id int not null auto_increment primary key,
   title varchar(100) not null,
   content text not null,
   authorid int not null,
   _created datetime default current_timestamp,
   foreign key (authorid) references Authors(id)
); 

create table Authors (
   id int not null auto_increment primary key,
   name varchar(70) not null,
   email varchar(70) not null,
   _created datetime default current_timestamp
);

create table Tags (
   id int not null auto_increment primary key,
   name varchar(25) not null,
   _created datetime default current_timestamp
); 

create table BlogTags (
   blogid int not null,
   tagid int not null,
   primary key(blogid, tagid),
   foreign key (blogid) references Blogs(id),
   foreign key (tagid) references Tags(id)
);

insert into authors (name, email) values
("Garrett", "code@garrett.com");

INSERT INTO Blogs(title, content, authorid) VALUES(
	"Why Betsy Should Date Me", "I'll tell you why. I think she's a lonely person. I drive by this place a lot and I see her here. I see a lot of people around her. And I see all these phones and all this stuff on her desk. It means nothing. Then when I came inside and I met her, I saw in her eyes and I saw the way she carried yourself that she's not a happy person. And I think she needs something. And if she wants to call it a friend, she can call it a friend.", 1);
INSERT INTO Blogs(title, content, authorid) VALUES(
	"The Effects of Coffee on The Human Body", "It make you go zoom zoom heart go thump thump. Heart go thump thump then brain go zig zag. After the zig zag scary thought may pop up in head but you just have to eat food then they kinda go away! That coffee for you! Thank for reading", 2);
INSERT INTO Blogs(title, content, authorid) VALUES(
	"Sitting Down on Computer All The Time", "Shoulder hurt back hurt but if walk arounda alittle bit then not as much pain. Headache from light from screen and problem solving all day but if u get glasses from amazon then it not as bad. Still need to try yoga for upper back but only did it once. Thanks", 3);

insert into tags (name) values
("coding"),
("lifestyle"),
("tech"),
("literature"),
("political");

insert into blogtags (blogid, tagid) values
(1, 2),
(1, 3),
(2, 5),
(3, 4);

DELIMITER //
CREATE PROCEDURE spBlogTags (blogid int)
BEGIN
  SELECT tags.name FROM blogtags
  JOIN tags 
  ON blogtags.tagid = tags.id
  WHERE blogtags.blogid = blogid;
END //
DELIMITER ;

call spBlogTags(2);
call spBlogTags(1);

CREATE USER 'blogs'@'localhost' IDENTIFIED BY 'blogs123';
GRANT ALL PRIVILEGES ON blogs.* TO 'blogs'@'localhost';