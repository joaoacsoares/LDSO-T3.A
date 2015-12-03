GO
/****** Object:  Table [dbo].[Audit]    Script Date: 03/12/2015 09:51:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Audit](
	[AuditID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[AuditDate] [datetime] NOT NULL,
	[AuditWCJustPT] [text] NOT NULL,
	[AuditWCJustEN] [text] NOT NULL,
	[AuditParkJustPT] [text] NOT NULL,
	[AuditParkJustEN] [text] NOT NULL,
	[AuditGASJustPT] [text] NOT NULL,
	[AuditGASJustEN] [text] NOT NULL,
	[AuditIntJustPT] [text] NOT NULL,
	[AuditIntJustEN] [text] NOT NULL,
	[AuditOutJustPT] [text] NOT NULL,
	[AuditOutJustEN] [text] NOT NULL,
	[AuditHallJustPT] [text] NOT NULL,
	[AuditHallJustEN] [text] NOT NULL,
	[AuditIntRoute] [decimal](18, 0) NOT NULL,
	[AuditOutRoute] [decimal](18, 0) NOT NULL,
	[AuditHallway] [decimal](18, 0) NOT NULL,
	[AuditWC] [decimal](18, 0) NOT NULL,
	[AuditCarPark] [decimal](18, 0) NOT NULL,
	[AuditGoodsServ] [decimal](18, 0) NOT NULL,
	[AuditTotal] [decimal](18, 0) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AuditID] ASC,
	[PlaceID] ASC,
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Blog]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Blog](
	[BlogID] [int] NOT NULL,
	[BlogText] [text] NOT NULL,
	[BlogImage] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[BlogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CheckList]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CheckList](
	[ChecklistID] [int] NOT NULL,
	[identifier] [varchar](20) NOT NULL,
	[ChecklistDate] [datetime] NOT NULL,
	[Active] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[ChecklistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON),
UNIQUE NONCLUSTERED 
(
	[identifier] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[comment]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comment](
	[UserID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
	[CommentID] [int] NOT NULL,
	[Content] [text] NOT NULL,
	[Date] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[PlaceID] ASC,
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[FavPlaces]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FavPlaces](
	[UserID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[PlaceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[images]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[images](
	[ImageID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
	[ImageName] [varchar](200) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ImageID] ASC,
	[PlaceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Incapacidade]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Incapacidade](
	[IncapacidadeID] [int] NOT NULL,
	[Designation] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[IncapacidadeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Media]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Media](
	[MediaID] [int] NOT NULL,
	[MediaLink] [varchar](200) NOT NULL,
	[MediaDate] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MediaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Places]    Script Date: 03/12/2015 09:51:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Places](
	[PlaceID] [int] NOT NULL,
	[DesignacaoPT] [text] NULL,
	[DesignacaoEN] [text] NULL,
	[Endereco] [text] NULL,
	[DescricaoPT] [text] NULL,
	[DescricaoEN] [text] NULL,
	[Contacto] [varchar](9) NULL,
	[TipoEspaco] [int] NULL,
	[Latitude] [decimal](18, 0) NULL,
	[longitude] [decimal](18, 0) NULL,
	[direcao] [decimal](18, 0) NULL,
	[Distrito] [varchar](30) NULL,
	[Auditado] [bit] NULL,
	[PlaceAdmin] [varchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[PlaceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[questions]    Script Date: 03/12/2015 09:51:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[questions](
	[QuestionID] [int] NOT NULL,
	[ChecklistID] [int] NOT NULL,
	[QuestionText] [text] NOT NULL,
	[Answer] [tinyint] NOT NULL,
	[Suggestion] [text] NULL,
	[Questionweight] [decimal](18, 0) NOT NULL,
	[QuestionType] [decimal](18, 0) NOT NULL,
	[Active] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC,
	[ChecklistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Rate]    Script Date: 03/12/2015 09:51:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rate](
	[UserID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
	[RateID] [int] NOT NULL,
	[Grade] [tinyint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[PlaceID] ASC,
	[RateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[ReportProblem]    Script Date: 03/12/2015 09:51:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ReportProblem](
	[ReportID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[PlaceID] [int] NOT NULL,
	[ProblemDescription] [text] NOT NULL,
	[ProblemPhoto] [varchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[ReportID] ASC,
	[UserID] ASC,
	[PlaceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserIncapacidade]    Script Date: 03/12/2015 09:51:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserIncapacidade](
	[UserID] [int] NOT NULL,
	[IncapacidadeID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC,
	[IncapacidadeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
/****** Object:  Table [dbo].[Users]    Script Date: 03/12/2015 09:51:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] NOT NULL,
	[email] [varchar](50) NOT NULL,
	[PassHash] [varchar](50) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Newsletter] [bit] NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[StateDate] [datetime] NULL,
	[LastAccessDate] [datetime] NULL,
	[UserState] [varchar](30) NOT NULL,
	[AuthProvider] [varchar](30) NULL,
	[ExternalID] [int] NULL,
	[UserImage] [varchar](100) NOT NULL,
	[isVisible] [bit] NOT NULL,
	[Auditor] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON),
UNIQUE NONCLUSTERED 
(
	[ExternalID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON),
UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON),
UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)
)

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[CheckList] ADD  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Places] ADD  DEFAULT ((0)) FOR [Auditado]
GO
ALTER TABLE [dbo].[questions] ADD  DEFAULT ((1)) FOR [Active]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [Newsletter]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((1)) FOR [isVisible]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [Auditor]
GO
ALTER TABLE [dbo].[Audit]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Audit]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[comment]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[comment]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FavPlaces]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FavPlaces]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[images]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[questions]  WITH CHECK ADD FOREIGN KEY([ChecklistID])
REFERENCES [dbo].[CheckList] ([ChecklistID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rate]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Rate]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReportProblem]  WITH CHECK ADD FOREIGN KEY([PlaceID])
REFERENCES [dbo].[Places] ([PlaceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ReportProblem]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserIncapacidade]  WITH CHECK ADD FOREIGN KEY([IncapacidadeID])
REFERENCES [dbo].[Incapacidade] ([IncapacidadeID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserIncapacidade]  WITH CHECK ADD FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
