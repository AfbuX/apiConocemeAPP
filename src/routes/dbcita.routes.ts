import * as dbcitaController from '../controllers/dbcita.controller'
import  express  from 'express';
import { dbcita } from '../models/dbcita';

const router = express.Router();

router.get('/',(rq, rs) => {

    dbcitaController.getdbcita()
        .then(obj =>{
            rs.json (obj);
        })
        .catch ( e => {
            rs.status(500).json(e);
        })
    
});

router.post('/', (rq, rs) => {
    dbcitaController.postdbcita(rq.body as dbcita)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            rs.status(500).json(e);
        })
});

router.delete('/:id', (rq, rs) => {
    dbcitaController.deletedbcita(parseInt(rq.params['id']))
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            
            rs.status(500).json(e);
        })
});

router.put('/', (rq, rs) => {
    dbcitaController.putdbcita(rq.body as dbcita)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            console.error(e);
            
            rs.status(500).json(e);
        })
});


export default router;
