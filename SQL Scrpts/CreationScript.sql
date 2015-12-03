BEGIN TRANSACTION T1
CREATE TABLE dbo.Users
(
    UserId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Email VarChar(50) UNIQUE NOT NULL,
	PassHash VarChar(50) NOT NULL,
	Name VarChar(50) UNIQUE NOT NULL,
	Newsletter bit NOT NULL Default 0,
	CreationDate datetime NOT NULL,
	StateDate datetime,
	LastAccessDate datetime,
	UserState VarChar(30) NOT NULL,
	AuthProvider VarChar(30),
	ExternalID int Unique,
	UserImage VarChar(100) NOT NULL,
	IsVisible bit NOT NULL default 1,
	Auditor bit NOT NULL default 0
);
Create table dbo.Places
(
	PlaceId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	DesignacaoPT text,
	DesignacaoEN text,
	Endereco text,
	DescricaoPT text,
	DescricaoEN text,
	Contacto Varchar(9),
	TipoEspaco int,
	Latitude decimal,
	Longitude decimal,
	Direcao decimal,
	Distrito VarChar(30),
	Auditado bit default 0,
	PlaceAdmin VarChar(30)
);
Create table dbo.Blogs(
	BlogId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	BlogText text NOT NULL,
	BlogImage VarCHAR(30)
);
Create table dbo.Medias(
	MediaId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	MediaLink VarChar(200) NOT NULL,
	MediaDate datetime NOT NULL
);
Create table dbo.Audits(
	AuditId int UNIQUE NOT NULL,
	PlaceId int NOT NULL,
	UserId int NOT NULL,
	AuditDate datetime NOT NULL,
	AuditWCJustPT text NOT NULL,
	AuditWCJustEN text NOT NULL,
	AuditParkJustPT text NOT NULL,
	AuditParkJustEN text NOT NULL,
	AuditGASJustPT text NOT NULL,
	AuditGASJustEN text NOT NULL,
	AuditIntJustPT text NOT NULL,
	AuditIntJustEN text NOT NULL,
	AuditOutJustPT text NOT NULL,
	AuditOutJustEN text NOT NULL,
	AuditHallJustPT text NOT NULL,
	AuditHallJustEN text NOT NULL,
	AuditIntRoute decimal NOT NULL,
	AuditOutRoute decimal NOT NULL,
	AuditHallway decimal NOT NULL,
	AuditWC decimal NOT NULL,
	AuditCarPark decimal NOT NULL,
	AuditGoodsServ decimal NOT NULL,
	AuditTotal decimal NOT NULL
	primary key(AuditID,PlaceID,UserID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Checklists(
	AuditId int NOT NULL,
	ChecklistId int NOT NULL IDENTITY(1,1) UNIQUE,
	Identifier VarChar(20) UNIQUE NOT NULL,
	ChecklistDate datetime NOT NULL,
	Active bit default 1
	primary key (AuditID, ChecklistID)
	FOREIGN KEY (AuditID)
	REFERENCES Audits (AuditID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Questions(
	QuestionId int NOT NULL IDENTITY(1,1),
	ChecklistId int NOT NULL,
	QuestionText text NOT NULL,
	Answer tinyint NOT NULL,
	Suggestion text,
	QuestionWeight decimal NOT NULL,
	QuestionType decimal NOT NULL,
	Active bit default 1
	primary key (QuestionID,ChecklistID)
	FOREIGN KEY (ChecklistID)
	REFERENCES Checklists (ChecklistID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Comments(
	UserId int NOT NULL,
	PlaceId int NOT NULL,
	CommentId int NOT NULL,
	Content text NOT NULL,
	Date datetime NOT NULL
	Primary key (UserID,PlaceID,CommentID),
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
)
create table dbo.FavPlaces(
	FavPlaceid int NOT NULL IDENTITY (1,1),
	UserId int NOT NULL,
	PlaceId int NOT NULL
	Primary Key (FavPlaceid,UserID,PlaceID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceId)
	REFERENCES Places (PlaceId) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Rates(
	UserId int NOT NULL,
	PlaceId int NOT NULL,
	RateID int NOT NULL,
	Grade tinyint NOT NULL
	Primary Key (UserID,PlaceID,RateID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Images(
	ImageId int NOT NULL IDENTITY(1,1),
	PlaceId int NOT NULL,
	ImageName VarChar(200) NOT NULL
	Primary key (ImageID,PlaceID)
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table dbo.Incapacidades(
	IncapacidadeId int NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Designation varchar(50)
);
create table dbo.ReportProblems(
	ReportProblemId int NOT NULL IDENTITY(1,1),
	UserId int NOT NULL,
	PlaceID int NOT NULL,
	ProblemDescription text NOT NULL,
	ProblemPhoto VarChar(200)
	primary key(ReportProblemId,UserID,PlaceID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
create table UserIncapacidade(
	UserID int NOT NULL,
	IncapacidadeID int NOT NULL
	primary key(USerID, IncapacidadeID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (IncapacidadeID)
	REFERENCES Incapacidades (IncapacidadeID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
COMMIT TRANSACTION T1