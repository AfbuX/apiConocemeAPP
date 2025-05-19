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