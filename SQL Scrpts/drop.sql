GO
ALTER TABLE [dbo].[UserIncapacidade] DROP CONSTRAINT [FK__UserIncap__UserI__14E61A24]
GO
ALTER TABLE [dbo].[UserIncapacidade] DROP CONSTRAINT [FK__UserIncap__Incap__15DA3E5D]
GO
ALTER TABLE [dbo].[ReportProblem] DROP CONSTRAINT [FK__ReportPro__UserI__13F1F5EB]
GO
ALTER TABLE [dbo].[ReportProblem] DROP CONSTRAINT [FK__ReportPro__Place__12FDD1B2]
GO
ALTER TABLE [dbo].[Rate] DROP CONSTRAINT [FK__Rate__UserID__11158940]
GO
ALTER TABLE [dbo].[Rate] DROP CONSTRAINT [FK__Rate__PlaceID__1209AD79]
GO
ALTER TABLE [dbo].[questions] DROP CONSTRAINT [FK__questions__Check__10216507]
GO
ALTER TABLE [dbo].[images] DROP CONSTRAINT [FK__images__PlaceID__0F2D40CE]
GO
ALTER TABLE [dbo].[FavPlaces] DROP CONSTRAINT [FK__FavPlaces__UserI__0D44F85C]
GO
ALTER TABLE [dbo].[FavPlaces] DROP CONSTRAINT [FK__FavPlaces__Place__0E391C95]
GO
ALTER TABLE [dbo].[comment] DROP CONSTRAINT [FK__comment__UserID__0C50D423]
GO
ALTER TABLE [dbo].[comment] DROP CONSTRAINT [FK__comment__PlaceID__0B5CAFEA]
GO
ALTER TABLE [dbo].[Audit] DROP CONSTRAINT [FK__Audit__UserID__09746778]
GO
ALTER TABLE [dbo].[Audit] DROP CONSTRAINT [FK__Audit__PlaceID__0A688BB1]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[UserIncapacidade]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[UserIncapacidade]
GO
/****** Object:  Table [dbo].[ReportProblem]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[ReportProblem]
GO
/****** Object:  Table [dbo].[Rate]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[Rate]
GO
/****** Object:  Table [dbo].[questions]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[questions]
GO
/****** Object:  Table [dbo].[Places]    Script Date: 03/12/2015 09:50:06 ******/
DROP TABLE [dbo].[Places]
GO
/****** Object:  Table [dbo].[Media]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[Media]
GO
/****** Object:  Table [dbo].[Incapacidade]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[Incapacidade]
GO
/****** Object:  Table [dbo].[images]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[images]
GO
/****** Object:  Table [dbo].[FavPlaces]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[FavPlaces]
GO
/****** Object:  Table [dbo].[comment]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[comment]
GO
/****** Object:  Table [dbo].[CheckList]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[CheckList]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[Blog]
GO
/****** Object:  Table [dbo].[Audit]    Script Date: 03/12/2015 09:50:07 ******/
DROP TABLE [dbo].[Audit]
GO
