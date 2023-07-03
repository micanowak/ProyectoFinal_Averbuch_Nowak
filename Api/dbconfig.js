import 'dotenv/config';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

export default config;

/*USE [master]
GO
CREATE LOGIN [argteam] WITH PASSWORD=N'adminArgTeam2020', DEFAULT_DATABASE=[PF_ArgTeam], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [PF_ArgTeam]
GO
CREATE USER [argteam] FOR LOGIN [argteam]
GO
USE [PF_ArgTeam]
GO
ALTER ROLE [db_owner] ADD MEMBER [argteam]
GO*/