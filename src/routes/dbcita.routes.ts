import * as dbcitaController from '../controllers/dbcita.controller'
import  express  from 'express';

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

export default router;
