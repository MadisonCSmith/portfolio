CREATE DATABASE database_name
USE database_name
 
 
CREATE TABLE PET_TYPE
(PetTypeID INT IDENTITY(1,1) primary key not null,
PetTypeName varchar(15) not null)
 
CREATE TABLE COUNTRY
(CountryID INT IDENTITY(1,1) primary key not null,
CountryName varchar(15) not null)
 
CREATE TABLE TEMPERAMENT
(TempID INT IDENTITY(1,1) primary key not null,
TempName varchar(15) not null)
 
CREATE TABLE GENDER
(GenderID INT IDENTITY(1,1) primary key not null,
GenderName varchar(15) not null)
 
-- insert last because has foreign keys
CREATE TABLE PET
(PetID INT IDENTITY(1,1) primary key not null,
PetName varchar(15) not null,
PetTypeID INT FOREIGN KEY REFERENCES PET_TYPE (PetTypeID) not null,
CountryID INT FOREIGN KEY REFERENCES COUNTRY (CountryID) not null,
TempID INT FOREIGN KEY REFERENCES TEMPERAMENT (TempID) not null,
DOB DATE not null,
GenderID INT FOREIGN KEY REFERENCES GENDER (GenderID) not null)



INSERT INTO PET_TYPE
SELECT DISTINCT(PET_TYPE) FROM RawPetData
WHERE PET_TYPE IS NOT NULL

INSERT INTO COUNTRY
SELECT DISTINCT(COUNTRY) FROM RawPetData
WHERE COUNTRY IS NOT NULL

INSERT INTO TEMPERAMENT
SELECT DISTINCT(TEMPERAMENT) FROM RawPetData
WHERE TEMPERAMENT IS NOT NULL

INSERT INTO GENDER
SELECT DISTINCT(GENDER) FROM RawPetData
WHERE GENDER IS NOT NULL



USE database_name
GO

/****** Object:  Table [dbo].[RawPetData]    Script Date: 10/17/2017 8:04:26 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[RawPetData_PK] (
	PK_ID INT IDENTITY(1,1) primary key not null,
	[PETNAME] [nvarchar](255) NULL,
	[PET_TYPE] [nvarchar](255) NULL,
	[TEMPERAMENT] [nvarchar](255) NULL,
	[COUNTRY] [nvarchar](255) NULL,
	[DATE_BIRTH] [datetime] NULL,
	[GENDER] [nvarchar](255) NULL
) ON [PRIMARY]
GO


INSERT INTO RawPetData_PK(PETNAME, PET_TYPE, TEMPERAMENT, COUNTRY, DATE_BIRTH, GENDER)
SELECT PETNAME, PET_TYPE, TEMPERAMENT, COUNTRY, DATE_BIRTH, GENDER
FROM RawPetData


IF EXISTS (SELECT name FROM sys.objects WHERE name = 'working_pet')
BEGIN 
DROP TABLE working_pet
PRINT 'deleting working_pet'
END
SELECT * INTO working_pet
FROM RawPetData_PK



-- insert data from working-pet into pet with right FKs
-- stored procs, get id from original database, given name from working_pet 
-- build while loop that gets min value and decrements min value in while loop to go through working_pet
-- insert data into pet table from working table
-- get name from working data
GO
CREATE PROCEDURE uspGetPetTypeID
@PetTypeName varchar(15),
@PetTypeID INT OUTPUT
AS
SET @PetTypeID = (SELECT PetTypeID FROM PET_TYPE WHERE PetTypeName = @PetTypeName)

GO
CREATE PROCEDURE uspGetCountryID
@CountryName varchar(15),
@CountryID INT OUTPUT
AS
SET @CountryID = (SELECT CountryID FROM COUNTRY WHERE CountryName = @CountryName)

GO
CREATE PROCEDURE uspGetTemperamentID
@TemperamentName varchar(15),
@TemperamentID INT OUTPUT
AS
SET @TemperamentID = (SELECT TempID FROM TEMPERAMENT WHERE TempName = @TemperamentName)

GO
CREATE PROCEDURE uspGetGenderID
@GenderName varchar(15),
@GenderID INT OUTPUT
AS
SET @GenderID = (SELECT GenderID FROM GENDER WHERE GenderName = @GenderName)



DECLARE @NumRows INT = (SELECT COUNT(*) FROM working_pet) -- number of rows in working table
DECLARE @MinPKID INT -- the PK of the current/min row
DECLARE @PetTName varchar(100) -- name of pet type in the row
DECLARE @CName varchar(100) -- name of the country in the row
DECLARE @TName varchar(100) -- name of the temperament in the row
DECLARE @GName varchar(100) -- name of the gender in the row
DECLARE @PetFKID INT -- pet type fk value gotten from uspGet___ that we insert into the pet table
DECLARE @CountryFKID INT --  country fk value gotten from uspGet___ that we insert into the pet table
DECLARE @TemperamentFKID INT --  country fk value gotten from uspGet___ that we insert into the pet table
DECLARE @GenderFKID INT --  gender fk value gotten from uspGet___ that we insert into the pet table
DECLARE @DOB DATE
DECLARE @PetName varchar(35)


WHILE @NumRows > 0
        BEGIN
        SET @MinPKID = (SELECT MIN(PK_ID) FROM working_pet)
        SET @PetTName = (SELECT PET_TYPE FROM working_pet WHERE PK_ID = @MinPKID)
        SET @CName = (SELECT COUNTRY FROM working_pet WHERE PK_ID = @MinPKID)
		SET @TName = (SELECT TEMPERAMENT FROM working_pet WHERE PK_ID = @MinPKID)
		SET @GName = (SELECT GENDER FROM working_pet WHERE PK_ID = @MinPKID)
		SET @DOB = (SELECT DATE_BIRTH FROM working_pet WHERE PK_ID = @MinPKID)
		SET @PetName = (SELECT PetName FROM working_pet WHERE PK_ID = @MinPKID)

EXEC uspGetPetTypeID
                @PetTypeName = @PetTName,
                @PetTypeID = @PetFKID OUTPUT


EXEC uspGetCountryID
                @CountryName = @CName,
                @CountryID = @CountryFKID OUTPUT

EXEC uspGetTemperamentID
                @TemperamentName = @TName,
                @TemperamentID = @TemperamentFKID OUTPUT

EXEC uspGetGenderID
                @GenderName = @GName,
                @GenderID = @GenderFKID OUTPUT

       

INSERT INTO PET(PetName, PetTypeID, CountryID, TempID, DOB, GenderID)
VALUES (@PetName, @PetFKID, @CountryFKID, @TemperamentFKID, @DOB, @GenderFKID)


DELETE FROM working_pet
WHERE PK_ID = @MinPKID
SET @NumRows = @NumRows -1
END

GO