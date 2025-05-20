import * as usuarioController from '../controllers/usuario.controller';
import express from 'express';
import { usuario } from '../models/usuario';

const router = express.Router();

router.get('/', (rq, rs) => {

    usuarioController.getusuario()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })

});

router.post('/', (rq, rs) => {
    usuarioController.postusuario(rq.body as usuario)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

router.delete('/:id', (rq, rs) => {
    usuarioController.deleteusuario(parseInt(rq.params['id']))
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

router.put('/', (rq, rs) => {
    usuarioController.putusuario(rq.body as usuario)
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

















export default router;
