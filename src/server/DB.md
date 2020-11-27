Preliminary Database

pUser                                                
Id
Name
Email
Password
Role
childId
_created

·    (parent user account would have admin privileges and be able to set mandatory tasks)

cUser
Id
Name
Email
Password
Role
_created
(child user account will be connected to parent user account. They can still set their own events, but cannot override what the parent sets as mandatory)

Events
Id
Title
Location
Time
date/duedate
Mandatory (boolean)
categoryId
_created

Category
Id
Name
_created
(would work like blogtags from personal blog lab)

EventTags
Categoryid
cUserId
pUserId

Checklist?
ChecklistItems?
