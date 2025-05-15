import * as usuarioController from '../controllers/usuario.controller';
import  express  from 'express';

const router = express.Router();

router.get('/',(rq, rs) => {

    usuarioController.getusuario()
        .then(obj =>{
            rs.json (obj);
        })
        .catch ( e => {
            rs.status(500).json(e);
        })
    
});

export default router;
