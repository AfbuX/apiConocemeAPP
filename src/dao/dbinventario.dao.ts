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

export const Crear = async (us: dbinventario): Promise<dbinventario> => {
    try {
        let tsql = `INSERT INTO dbinventario(nproducto, cantidad, seccion, marca)
        VALUES( '${us.nproducto}', '${us.cantidad}','${us.seccion}','${us.marca}')`;
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

export const Delete = async (codigo: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM dbinventario WHERE codigo = @codigo`;
        const pool = await getConnection();
        const request = pool.request().input('codigo', codigo);
        const rs = await request.query(tsql);
        
        return rs.rowsAffected[0] > 0; 
    } catch (error) {
        throw error;
    }
};

export const Editar = async (us: dbinventario): Promise<boolean> => {
    try {
        const tsql = `UPDATE dbinventario 
                      SET nproducto = @nproducto, 
                          cantidad = @cantidad, 
                          seccion = @seccion, 
                          marca = @marca 
                      WHERE codigo = @codigo`;

        const pool = await getConnection();
        const request = pool.request()
            .input('codigo', us.codigo)
            .input('nproducto', us.nproducto)
            .input('cantidad', us.cantidad)
            .input('seccion', us.seccion)
            .input('marca', us.marca);

        const rs = await request.query(tsql);
        
        return rs.rowsAffected[0] > 0; 
    } catch (error) {
        throw error;
    }
};