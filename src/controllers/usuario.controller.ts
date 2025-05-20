import * as usuariodao from '../dao/usuario.dao';
import { usuario } from "../models/usuario";

export const getusuario = async (): Promise<usuario[]> => {
    try {
        let p = await usuariodao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

export const postusuario = async (us: usuario): Promise<usuario> => {
    try {
        return await usuariodao.Crear(us);
    } catch (error) {
        throw error;
    }
}

export const deleteusuario = async (id: number): Promise<boolean> => {
    try {
        const eliminado = await usuariodao.Delete(id); 
        return eliminado;
    } catch (error) {
        throw error;
    }
}

export const putusuario = async (us: usuario): Promise<boolean> => {
    try {
        return await usuariodao.Editar(us);
    } catch (error) {
        throw error;
    }
};

