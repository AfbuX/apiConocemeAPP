import getConnection from "../conexion/conection";
import { usuario } from "../models/usuario";

export const Listar = async (): Promise<usuario[]> => {
    try {
        let tsql = "select * from usuario";
        const pool = await getConnection();
        let rs = await pool.query<usuario>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Crear = async (us: usuario): Promise<usuario> => {
    try {
        let tsql = `INSERT INTO usuario(dbpassword, email, fecha, nombre, roll)
        VALUES('${us.dbpassword}', '${us.email}', '${us.fecha}','${us.nombre}','${us.roll}')`;
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

export const Editar = async (us: usuario): Promise<boolean> => {
    try {
        const tsql = `UPDATE usuario 
                      SET dbpassword = @dbpassword, 
                          email = @email, 
                          fecha = @fecha, 
                          nombre = @nombre, 
                          roll = @roll 
                      WHERE id = @id`;

        const pool = await getConnection();
        const request = pool.request()
            .input('id', us.id)
            .input('dbpassword', us.dbpassword)
            .input('email', us.email)
            .input('fecha', us.fecha)
            .input('nombre', us.nombre)
            .input('roll', us.roll);

        const rs = await request.query(tsql);
        
        return rs.rowsAffected[0] > 0; 
    } catch (error) {
        throw error;
    }
};

