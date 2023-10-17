-- Testtable
CREATE TABLE testtable(
   Email      VARCHAR(29) NOT NULL PRIMARY KEY
  ,Full_Name  VARCHAR(17) NOT NULL
  ,Country    VARCHAR(24) NOT NULL
  ,User_Id    INTEGER  NOT NULL
  ,Created_At VARCHAR(24) NOT NULL
);
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Arlo_Senger@forrest.us','Reggie Cassin','Moldova',0,'1995-04-03T10:50:44.954Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Dayton.Erdman@ezra.net','Laury Walter','Turks and Caicos Islands',1,'1991-03-11T22:21:36.078Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Guiseppe@evie.net','Eloy Nienow','Serbia',2,'1997-11-29T06:21:48.875Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Edgardo_Botsford@hudson.com','Adolphus Ebert II','Azerbaijan',3,'1980-07-31T09:39:14.379Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Chad@antonette.io','Laila Zboncak','Gambia',4,'2004-06-22T07:03:55.798Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Missouri.Bernier@donald.co.uk','Rubie Lind','Barbados',5,'1997-12-06T19:10:06.184Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Declan_Barton@lea.name','Haven Ortiz','Mauritania',6,'2021-08-25T18:55:27.765Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Sadye@sven.us','Marcia Nitzsche','Peru',7,'1996-07-08T20:51:43.038Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Ludie_Jerde@anabelle.org','Idell Kuvalis','Ecuador',8,'2001-05-12T04:40:46.904Z');
INSERT INTO testtable(Email,Full_Name,Country,User_Id,Created_At) VALUES ('Grady@ana.com','Viola Upton','San Marino',9,'1990-01-17T10:14:14.510Z');

-- guilds
CREATE TABLE guilds (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (uuid)
);
