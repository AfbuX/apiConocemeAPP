import getConnection from "../conexion/conection";
import { dbinventario} from "../models/dbinventario";

export const Listar = async (): Promise<dbinventario[]> => {
    try {
        let tsql = "select * from dbinventario";
        const pool = await getConnection();
        let rs = await pool.query<dbinventario>(tsql);
        if (rs != undefined){
            return rs.recordset;
        }
        return[];
    }catch (error){
        throw error
    }
} 