// import getConnection from "../conexion/conection";
// import { CompaniaAerea } from "../models/CompaniaAerea";

// export const Listar = async (): Promise<CompaniaAerea[]> => {
//     try {
//         let tsql = "select * from CompaniaAerea";
//         const pool = await getConnection();
//         let rs = await pool.query<CompaniaAerea>(tsql);
//         if (rs != undefined){
//             return rs.recordset;
//         }
//         return[];
//     }catch (error){
//         throw error
//     }
// } 