import getConnection from "../conexion/conection";
import { usuario } from "../models/usuario";

export const Listar = async (): Promise<usuario[]> => {
    try {
        let tsql = "select * from usuario";
        const pool = await getConnection();
        let rs = await pool.query<usuario>(tsql);
        if (rs != undefined){
            return rs.recordset;
        }
        return[];
    }catch (error){
        throw error
    }
} 