import getConnection from "../conexion/conection";
import { dbcita} from "../models/dbcita";

export const Listar = async (): Promise<dbcita[]> => {
    try {
        let tsql = "select * from dbcita";
        const pool = await getConnection();
        let rs = await pool.query<dbcita>(tsql);
        if (rs != undefined){
            return rs.recordset;
        }
        return[];
    }catch (error){
        throw error
    }
} 