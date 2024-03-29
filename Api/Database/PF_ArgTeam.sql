USE [master]
GO
/****** Object:  Database [PF_ArgTeam]    Script Date: 24/11/2023 10:12:43 ******/
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
/****** Object:  User [argteam]    Script Date: 24/11/2023 10:12:43 ******/
CREATE USER [argteam] FOR LOGIN [argteam] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [alumno]    Script Date: 24/11/2023 10:12:43 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [argteam]
GO
/****** Object:  Table [dbo].[Equipo]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipo](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[nombreContactoReferencia] [nchar](50) NULL,
	[apellidoContactoReferencia] [nchar](50) NULL,
	[celularContactoReferencia] [int] NULL,
 CONSTRAINT [PK_Proveedores] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 24/11/2023 10:12:43 ******/
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
/****** Object:  Table [dbo].[Inscriptos_X_EventoEquipos]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inscriptos_X_EventoEquipos](
	[fkIdEquipo] [int] NOT NULL,
	[fkIdEvento] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inscriptos_X_EventoLibre]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inscriptos_X_EventoLibre](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[fkIdInscripto] [int] NOT NULL,
	[fkEvento] [int] NOT NULL,
 CONSTRAINT [PK_Proveedor_X_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participante]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participante](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[DNI] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Inscripto] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Persona_X_Equipo]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Persona_X_Equipo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](50) NULL,
	[apellido] [nchar](50) NULL,
	[DNI] [int] NULL,
	[fkIdEquipo] [int] NOT NULL,
 CONSTRAINT [PK_Persona_X_Equipo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesional_X_Evento]    Script Date: 24/11/2023 10:12:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profesional_X_Evento](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[fkProfesional] [int] NOT NULL,
	[fkEvento] [int] NOT NULL,
 CONSTRAINT [PK_Profesional_X_Evento] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profesionales]    Script Date: 24/11/2023 10:12:43 ******/
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
/****** Object:  Table [dbo].[Usuario]    Script Date: 24/11/2023 10:12:43 ******/
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

INSERT [dbo].[Equipo] ([ID], [nombre], [nombreContactoReferencia], [apellidoContactoReferencia], [celularContactoReferencia]) VALUES (9, N'CateringPop', N'Mariela                                           ', N'Mulan                                             ', 1125445523)
INSERT [dbo].[Equipo] ([ID], [nombre], [nombreContactoReferencia], [apellidoContactoReferencia], [celularContactoReferencia]) VALUES (12, N'adudas club', N'Pablo                                             ', N'Sanchez                                           ', 1120020033)
INSERT [dbo].[Equipo] ([ID], [nombre], [nombreContactoReferencia], [apellidoContactoReferencia], [celularContactoReferencia]) VALUES (13, N'mac', N'lola                                              ', N'sanch                                             ', 1136363232)
INSERT [dbo].[Equipo] ([ID], [nombre], [nombreContactoReferencia], [apellidoContactoReferencia], [celularContactoReferencia]) VALUES (14, N'Leonas', N'Soledad                                           ', N'Pastorutti                                        ', 1123456789)
SET IDENTITY_INSERT [dbo].[Equipo] OFF
GO
SET IDENTITY_INSERT [dbo].[Evento] ON 

INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (1, N'Clínica Gorze', N'Entre Ríos', CAST(N'2023-09-12' AS Date), NULL, N'Viene Gorzelani, juntoa  otros profes a dar una clase de hockey técnico                                                                                                                                                                                                                                                                                                                                                                                                                                             ', N'fg                                                                                                  ', N'gerg                                                                                                ', 1, N'e21                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (2, N'Campus Infantil', N'Macabi Bs As', CAST(N'2023-11-25' AS Date), CAST(N'2023-11-28' AS Date), N'Campus de 4 días para chicos de escuelitas deportivas en futbol y hockey                                                                                                                                                                                                                                                                                                                                                                                                                                            ', N'gfe                                                                                                 ', N'rge                                                                                                 ', 1, N'e1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (3, N'Clínica Zeke Paulon', N'Junín', CAST(N'2023-09-21' AS Date), NULL, N'Clínica con Paulon, especialmente para primaria                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ', N'dfg                                                                                                 ', N'rge                                                                                                 ', 1, N'tr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 1)
INSERT [dbo].[Evento] ([ID], [nombre], [lugar], [fechaInicio], [fechaFin], [descripcion], [hospedaje], [gastronomia], [numEdicionEvento], [sponsors], [hayParticipantesLibres]) VALUES (4, N'Campus Mamis', N'Mendoza', CAST(N'2023-08-26' AS Date), CAST(N'2023-08-28' AS Date), N'Fin de semana de torneo, entrenamientos, capacitación individuales                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', N'gd                                                                                                  ', N'rg                                                                                                  ', 1, N'ge                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ', 0)
SET IDENTITY_INSERT [dbo].[Evento] OFF
GO
INSERT [dbo].[Inscriptos_X_EventoEquipos] ([fkIdEquipo], [fkIdEvento]) VALUES (9, 4)
INSERT [dbo].[Inscriptos_X_EventoEquipos] ([fkIdEquipo], [fkIdEvento]) VALUES (12, 4)
GO
SET IDENTITY_INSERT [dbo].[Inscriptos_X_EventoLibre] ON 

INSERT [dbo].[Inscriptos_X_EventoLibre] ([ID], [fkIdInscripto], [fkEvento]) VALUES (1, 1, 1)
INSERT [dbo].[Inscriptos_X_EventoLibre] ([ID], [fkIdInscripto], [fkEvento]) VALUES (2, 2, 2)
INSERT [dbo].[Inscriptos_X_EventoLibre] ([ID], [fkIdInscripto], [fkEvento]) VALUES (3, 6, 3)
INSERT [dbo].[Inscriptos_X_EventoLibre] ([ID], [fkIdInscripto], [fkEvento]) VALUES (4, 7, 3)
INSERT [dbo].[Inscriptos_X_EventoLibre] ([ID], [fkIdInscripto], [fkEvento]) VALUES (5, 8, 3)
SET IDENTITY_INSERT [dbo].[Inscriptos_X_EventoLibre] OFF
GO
SET IDENTITY_INSERT [dbo].[Participante] ON 

INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (1, N'mijal', N'averbuch', N'44444444')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (2, N'micaela ', N'nowak', N'47777777')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (3, N'sofia', N'salom', N'99999999')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (4, N'juan', N'lopez', N'19191919')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (5, N'Tamara', N'Joa', N'56891234')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (6, N'Mica', N'crack', N'2233448')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (7, N'Miji', N'capa', N'1345677')
INSERT [dbo].[Participante] ([ID], [nombre], [apellido], [DNI]) VALUES (8, N'Lol', N'po', N'0923948')
SET IDENTITY_INSERT [dbo].[Participante] OFF
GO
SET IDENTITY_INSERT [dbo].[Persona_X_Equipo] ON 

INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (1, N'mi                                                ', N'av                                                ', 45454554, 9)
INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (2, N'mic                                               ', N'no                                                ', 44444444, 9)
INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (3, N'flo                                               ', N'ma                                                ', 47744774, 9)
INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (5, N'dsd                                               ', N'ii                                                ', 54353433, 12)
INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (6, N'Micaela                                           ', N'Sor                                               ', 44117896, 12)
INSERT [dbo].[Persona_X_Equipo] ([id], [nombre], [apellido], [DNI], [fkIdEquipo]) VALUES (7, N'Luciana                                           ', N'pol                                               ', 277261, 9)
SET IDENTITY_INSERT [dbo].[Persona_X_Equipo] OFF
GO
SET IDENTITY_INSERT [dbo].[Profesional_X_Evento] ON 

INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (4, 1, 2)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (5, 2, 1)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (6, 2, 3)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (7, 2, 2)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (8, 2, 4)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (13, 3, 1)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (15, 3, 3)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (16, 1, 3)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (17, 5, 4)
INSERT [dbo].[Profesional_X_Evento] ([ID], [fkProfesional], [fkEvento]) VALUES (18, 4, 4)
SET IDENTITY_INSERT [dbo].[Profesional_X_Evento] OFF
GO
SET IDENTITY_INSERT [dbo].[Profesionales] ON 

INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (1, N'Juana', N'Morales', N'juanimorales@yahoo.com.ar', N'Profesora', 1123456789)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (2, N'Marcelo', N'Lopez', N'marce2001@gmail.com', N'Comunity Manager', 1178342986)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (3, N'María José', N'Piña', N'majopiña', N'Profesora', 1124379845)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (4, N'Carolina', N'Verea', N'carolinamail@hotmail.com', N'Profesora', 1198542874)
INSERT [dbo].[Profesionales] ([ID], [nombre], [apellido], [mail], [rol], [celular]) VALUES (5, N'Mijal', N'Av', N'mijal@gmail.com', N'Entrenadora', 25545555)
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
