import * as dbinventarioController from '../controllers/dbinventario.controller'
import  express  from 'express';
import { dbinventario } from '../models/dbinventario';

const router = express.Router();

router.get('/',(rq, rs) => {

    dbinventarioController.getdbinventario()
        .then(obj =>{
            rs.json (obj);
        })
        .catch ( e => {
            rs.status(500).json(e);
        })
    
});

router.post('/', (rq, rs) => {
    dbinventarioController.postdbinventario(rq.body as dbinventario)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

router.delete('/:id', (rq, rs) => {
    dbinventarioController.deletedbinventario(parseInt(rq.params['id']))
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

router.put('/', (rq, rs) => {
    dbinventarioController.putdbinventario(rq.body as dbinventario)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

export default router;