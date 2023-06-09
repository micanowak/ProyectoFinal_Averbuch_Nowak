USE [master]
GO
/****** Object:  Database [PF_ArgTeam]    Script Date: 8/6/2023 09:01:22 ******/
CREATE DATABASE [PF_ArgTeam]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PF_ArgTeam', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PF_ArgTeam.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PF_ArgTeam_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\PF_ArgTeam_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [PF_ArgTeam] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PF_ArgTeam].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PF_ArgTeam] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET ARITHABORT OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PF_ArgTeam] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PF_ArgTeam] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PF_ArgTeam] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PF_ArgTeam] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET RECOVERY FULL 
GO
ALTER DATABASE [PF_ArgTeam] SET  MULTI_USER 
GO
ALTER DATABASE [PF_ArgTeam] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PF_ArgTeam] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PF_ArgTeam] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PF_ArgTeam] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PF_ArgTeam] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'PF_ArgTeam', N'ON'
GO
ALTER DATABASE [PF_ArgTeam] SET QUERY_STORE = OFF
GO
USE [PF_ArgTeam]
GO
/****** Object:  User [argteam]    Script Date: 8/6/2023 09:01:23 ******/
CREATE USER [argteam] FOR LOGIN [argteam] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 8/6/2023 09:01:23 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [argteam]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[lugar] [varchar](50) NOT NULL,
	[fechaInicio] [date] NOT NULL,
	[fechaFin] [date] NOT NULL,
 CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inscriptos]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inscriptos](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[DNI] [varchar](50) NOT NULL,
	[equipo] [varchar](50) NOT NULL,
	[fkEvento] [int] NOT NULL,
 CONSTRAINT [PK_Inscripto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesional_X_Evento]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profesional_X_Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[fkProfesional] [int] NOT NULL,
	[fkEvento] [int] NOT NULL,
	[fechaInicio] [date] NOT NULL,
	[fechaFin] [date] NOT NULL,
	[sueldo] [int] NOT NULL,
 CONSTRAINT [PK_Profesional_X_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesionales]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profesionales](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL,
	[rol] [varchar](50) NOT NULL,
	[celular] [int] NOT NULL,
 CONSTRAINT [PK_Profesional] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Proveedor_X_Evento]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Proveedor_X_Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[fkProveedor] [int] NOT NULL,
	[fkEvento] [int] NOT NULL,
	[fechaInicio] [date] NOT NULL,
	[fechaFin] [date] NOT NULL,
 CONSTRAINT [PK_Proveedor_X_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Proveedores]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Proveedores](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[descripcion] [varchar](50) NOT NULL,
	[tipo] [varchar](50) NOT NULL,
	[logo] [varchar](50) NULL,
	[contacto] [int] NOT NULL,
 CONSTRAINT [PK_Proveedores] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 8/6/2023 09:01:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Proveedores] ON 

INSERT [dbo].[Proveedores] ([ID], [nombre], [descripcion], [tipo], [logo], [contacto]) VALUES (9, N'CateringPop', N'contratado para BsAs, nunca nos falló', N'comida', N'catering.png', 1125445523)
INSERT [dbo].[Proveedores] ([ID], [nombre], [descripcion], [tipo], [logo], [contacto]) VALUES (12, N'adudas', N'ropa deportiva, colabora con materiales', N'sponsor', N'adudas.jpg', 1120020033)
SET IDENTITY_INSERT [dbo].[Proveedores] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([ID], [username], [password], [mail]) VALUES (1, N'mica', N'mica12', N'mica@gmail.com')
INSERT [dbo].[Usuario] ([ID], [username], [password], [mail]) VALUES (2, N'miji', N'miji23', N'miji@gmail.com')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
USE [master]
GO
ALTER DATABASE [PF_ArgTeam] SET  READ_WRITE 
GO
