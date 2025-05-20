import * as dbinventariodao from '../dao/dbinventario.dao';
import { dbinventario } from "../models/dbinventario";

export const getdbinventario = async (): Promise<dbinventario[]> => {
    try{
        let p = await dbinventariodao.Listar();
        return p;
    }catch (error){
        throw error;
    }
}

export const postdbinventario = async (us: dbinventario): Promise<dbinventario> => {
    try {
        return await dbinventariodao.Crear(us);
    } catch (error) {
        throw error;
    }
}

export const deletedbinventario = async (id: number): Promise<boolean> => {
    try {
        const eliminado = await dbinventariodao.Delete(id); 
        return eliminado;
    } catch (error) {
        throw error;
    }
}

export const putdbinventario = async (us: dbinventario): Promise<boolean> => {
    try {
        return await dbinventariodao.Editar(us);
    } catch (error) {
        throw error;
    }
};