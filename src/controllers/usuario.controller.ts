import * as usuariodao from '../dao/usuario.dao';
import { usuario } from "../models/usuario";

export const getusuario = async (): Promise<usuario[]> => {
    try{
        let p = await usuariodao.Listar();
        return p;
    }catch (error){
        throw error;
    }
}