BEGIN TRANSACTION T1

CREATE TABLE dbo.Users
(
    UserID int NOT NULL PRIMARY KEY,
	email VarChar(50) UNIQUE NOT NULL,
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
	isVisible bit NOT NULL default 1,
	Auditor bit NOT NULL default 0
);

Create table dbo.Places
(
	PlaceID int NOT NULL PRIMARY KEY,
	DesignacaoPT text,
	DesignacaoEN text,
	Endereco text,
	DescricaoPT text,
	DescricaoEN text,
	Contacto Varchar(9),
	TipoEspaco int,
	Latitude decimal,
	longitude decimal,
	direcao decimal,
	Distrito VarChar(30),
	Auditado bit default 0,
	PlaceAdmin VarChar(30)
);

Create table Blog(
	BlogID int NOT NULL PRIMARY KEY,
	BlogText text NOT NULL,
	BlogImage VarCHAR(30)
);

Create table Media(
	MediaID int NOT NULL PRIMARY KEY,
	MediaLink VarChar(200) NOT NULL,
	MediaDate datetime NOT NULL
);

Create table Audit(
	AuditID int UNIQUE NOT NULL,
	PlaceID int NOT NULL,
	UserID int NOT NULL,
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

create table CheckList(
	ChecklistID int NOT NULL primary key,
	identifier VarChar(20) UNIQUE NOT NULL,
	ChecklistDate datetime NOT NULL,
	Active bit default 1
);

create table questions(
	QuestionID int NOT NULL,
	ChecklistID int NOT NULL,
	QuestionText text NOT NULL,
	Answer tinyint NOT NULL,
	Suggestion text,
	Questionweight decimal NOT NULL,
	QuestionType decimal NOT NULL,
	Active bit default 1
	primary key (QuestionID,ChecklistID)
	FOREIGN KEY (ChecklistID)
	REFERENCES CheckList (ChecklistID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

create table comment(
	UserID int NOT NULL,
	PlaceID int NOT NULL,
	CommentID int NOT NULL,
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

create table FavPlaces(
	UserID int NOT NULL,
	PlaceID int NOT NULL
	Primary Key (UserID,PlaceID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

create table Rate(
	UserID int NOT NULL,
	PlaceID int NOT NULL,
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

create table images(
	ImageID int NOT NULL,
	PlaceID int NOT NULL,
	ImageName VarChar(200) NOT NULL
	Primary key (ImageID,PlaceID)
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);



create table Incapacidade(
	IncapacidadeID int NOT NULL PRIMARY KEY,
	Designation varchar(50)
);

create table ReportProblem(
	ReportID int NOT NULL,
	UserID int NOT NULL,
	PlaceID int NOT NULL,
	ProblemDescription text NOT NULL,
	ProblemPhoto VarChar(200)
	primary key(ReportID,UserID,PlaceID)
	FOREIGN KEY (UserID)
	REFERENCES Users (UserID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (PlaceID)
	REFERENCES Places (PlaceID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

create table AuditChecklist(
	AuditID int NOT NULL,
	ChecklistID int NOT NULL
	primary key (AuditID,ChecklistID)
	FOREIGN KEY (AuditID)
	REFERENCES Audit (AuditID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
	FOREIGN KEY (ChecklistID)
	REFERENCES CheckList (ChecklistID) 
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
	REFERENCES Incapacidade (IncapacidadeID) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

COMMIT TRANSACTION T1