import * as dbinventarioController from '../controllers/dbinventario.controller'
import  express  from 'express';

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

export default router;