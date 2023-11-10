USE [master]
GO
/****** Object:  Database [PF_ArgTeam]    Script Date: 10/11/2023 09:16:18 ******/
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
/****** Object:  User [argteam]    Script Date: 10/11/2023 09:16:18 ******/
CREATE USER [argteam] FOR LOGIN [argteam] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 10/11/2023 09:16:18 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [argteam]
GO
/****** Object:  Table [dbo].[Equipo]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipo](
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
/****** Object:  Table [dbo].[Evento]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[lugar] [varchar](50) NOT NULL,
	[fechaInicio] [date] NOT NULL,
	[fechaFin] [date] NULL,
	[descripcion] [nchar](500) NULL,
	[hospedaje] [nchar](100) NULL,
	[gastronomia] [nchar](100) NULL,
	[numEdicionEvento] [int] NULL,
	[sponsors] [nchar](500) NULL,
	[hayParticipantesLibres] [bit] NULL,
 CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inscriptos_X_Evento]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inscriptos_X_Evento](
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
/****** Object:  Table [dbo].[Participante]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participante](
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
/****** Object:  Table [dbo].[Persona_X_Equipo]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Persona_X_Equipo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](50) NULL,
	[apellido] [nchar](50) NULL,
	[edad] [int] NULL,
 CONSTRAINT [PK_Persona_X_Equipo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesional_X_Evento]    Script Date: 10/11/2023 09:16:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profesional_X_Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[fkProfesional] [int] NOT NULL,
	[fkEvento] [int] NOT NULL,
	[sueldo] [int] NULL,
 CONSTRAINT [PK_Profesional_X_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesionales]    Script Date: 10/11/2023 09:16:18 ******/
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
/****** Object:  Table [dbo].[Usuario]    Script Date: 10/11/2023 09:16:18 ******/
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
SET IDENTITY_INSERT [dbo].[Equipo] ON 

INSERT [dbo].[Equipo] ([ID], [nombre], [descripcion], [tipo], [logo], [contacto]) VALUES (9, N'CateringPop', N'contratado para BsAs, nunca nos falló', N'comida', N'catering.png', 1125445523)
INSERT [dbo].[Equipo] ([ID], [nombre], [descripcion], [tipo], [logo], [contacto]) VALUES (12, N'adudas', N'ropa deportiva, colabora con materiales', N'sponsor', N'adudas.jpg', 1120020033)
SET IDENTITY_INSERT [dbo].[Equipo] OFF
GO
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (1, N'Clínica Gorze', N'Entre Ríos', CAST(N'2023-09-12' AS Date), NULL, N'Viene Gorzelani, juntoa  otros profes a dar una clase de hockey técnico                                                                                                                                                                                                                                                                                                                                                                                                                                             ', N'fg                                                                                                  ', N'gerg                                                                                                ', 1, N'e21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (2, N'Campus Infantil', N'Macabi Bs As', CAST(N'2023-11-25' AS Date), CAST(N'2023-11-28' AS Date), N'Campus de 4 días para chicos de escuelitas deportivas en futbol y hockey                                                                                                                                                                                                                                                                                                                                                                                                                                            ', N'gfe                                                                                                 ', N'rge                                                                                                 ', 1, N'e1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (3, N'Clínica Zeke Paulon', N'Junín', CAST(N'2023-09-21' AS Date), NULL, N'Clínica con Paulon, especialmente para primaria                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'dfg                                                                                                 ', N'rge                                                                                                 ', 1, N'tr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (4, N'Campus Mamis', N'Mendoza', CAST(N'2023-08-26' AS Date), CAST(N'2023-08-28' AS Date), N'Fin de semana de torneo, entrenamientos, capacitación individuales                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', N'gd                                                                                                  ', N'rg                                                                                                  ', 1, N'ge                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 0)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (5, N'ert', N'rt', CAST(N'2023-11-10' AS Date), CAST(N'2023-11-10' AS Date), N'ert                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'te                                                                                                  ', N'et                                                                                                  ', NULL, N'etw                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', NULL)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (6, N'fs', N'fw', CAST(N'2023-11-10' AS Date), CAST(N'2023-11-10' AS Date), N'dfw                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'wef                                                                                                 ', N'wef                                                                                                 ', NULL, N'wef                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', NULL)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (7, N'the', N'th', CAST(N'2023-11-10' AS Date), CAST(N'2023-11-10' AS Date), N'th                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', N'trh                                                                                                 ', N'rth                                                                                                 ', NULL, N'th                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', NULL)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (8, N'afeewf', N'ewf', CAST(N'2023-11-10' AS Date), CAST(N'2023-11-10' AS Date), N'wef                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'we                                                                                                  ', N'efe                                                                                                 ', NULL, N'wef                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (9, N'he', N'eth', CAST(N'2023-11-10' AS Date), CAST(N'2023-11-10' AS Date), N'the                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', N'eth                                                                                                 ', N'eh                                                                                                  ', NULL, N'h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ', 0)
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
SET IDENTITY_INSERT [dbo].[Profesional_X_Evento] ON 

INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (3, 1, 1, 50000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (4, 1, 2, 30000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (5, 2, 1, 20000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (6, 2, 3, 30000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (7, 2, 2, 15000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (8, 2, 4, 40000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (9, 3, 1, 35000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (10, 4, 4, 50000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (11, 3, 3, 15000)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (12, 2, 5, NULL)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (13, 3, 6, NULL)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (14, 2, 6, NULL)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento], [sueldo]) VALUES (15, 3, 8, NULL)
SET IDENTITY_INSERT [dbo].[Profesional_X_Evento] OFF
GO
SET IDENTITY_INSERT [dbo].[Profesionales] ON 

INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (1, N'Juana', N'Morales', N'juanimorales@yahoo.com.ar', N'Profesora', 1123456789)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (2, N'Marcelo', N'Lopez', N'marce2001@gmail.com', N'Comunity Manager', 1178342986)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (3, N'María José', N'Piña', N'majopiña', N'Profesora', 1124379845)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (4, N'Carolina', N'Verea', N'carolinamail@hotmail.com', N'Profesora', 1198542874)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (5, N'', N'', N'', N'', 0)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (6, N'', N'', N'', N'', 0)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (7, N'', N'', N'', N'', 0)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (8, N'', N'', N'', N'', 0)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (9, N'dhgh', N'dh', N'hdf', N'fhdf', 112222344)
SET IDENTITY_INSERT [dbo].[Profesionales] OFF
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
