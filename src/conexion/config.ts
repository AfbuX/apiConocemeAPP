import { config } from "mssql";

export const sqlConfig: config = {
    user: 'sa',
    password: 'DolexMax2024',
    database: 'dbconocemeAPP',
    server: 'localhost',
    // port:1433, Optional si es otro no standard
    options:{
        trustServerCertificate: true,
        encrypt: true,
    }
}
