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