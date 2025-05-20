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
export const Crear = async (us: dbcita): Promise<dbcita> => {
    try {
        let tsql = `INSERT INTO usuario(dbpassword, email, fecha, nombre, roll)
        VALUES(' '${us.nombre}','${us.fecha}','${us.servicio}')`;
        const pool = await getConnection();
        let rs = await pool.query(tsql);
        if (rs)
            return us;
        else
            throw 'Undefined error';
    } catch (error) {
        throw error;
    }

    
}

export const Delete = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM usuario WHERE id = @id`;
        const pool = await getConnection();
        const request = pool.request().input('id', id);
        const rs = await request.query(tsql);
        
        return rs.rowsAffected[0] > 0; 
    } catch (error) {
        throw error;
    }
};

export const Editar = async (us: dbcita): Promise<boolean> => {
    try {
        const tsql = `UPDATE usuario 
                      SET nombre = @nombre, 
                          fecha = @fecha, 
                          servicio = @servicio, 
                      WHERE id = @id`;

        const pool = await getConnection();
        const request = pool.request()
            .input('id', us.id)
            .input('nombre', us.nombre)
            .input('fecha', us.fecha)
            .input('servicio', us.servicio);

        const rs = await request.query(tsql);
        
        return rs.rowsAffected[0] > 0; 
    } catch (error) {
        throw error;
    }
};

