import * as dbcitadao from '../dao/dbcita.dao';
import { dbcita } from "../models/dbcita";

export const getdbcita = async (): Promise<dbcita[]> => {
    try{
        let p = await dbcitadao.Listar();
        return p;
    }catch (error){
        throw error;
    }
}
export const postdbcita = async (us: dbcita): Promise<dbcita> => {
    try {
        return await dbcitadao.Crear(us);
    } catch (error) {
        throw error;
    }
}

export const deletedbcita = async (id: number): Promise<boolean> => {
    try {
        const eliminado = await dbcitadao.Delete(id); 
        return eliminado;
    } catch (error) {
        throw error;
    }
}

export const putdbcita = async (us: dbcita): Promise<boolean> => {
    try {
        return await dbcitadao.Editar(us);
    } catch (error) {
        throw error;
    }
};

