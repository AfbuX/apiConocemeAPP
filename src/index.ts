import express from 'express';
import usuario from './routes/usuario.routes';
import dbcita from './routes/dbcita.routes';
import dbinventario from './routes/dbinventario.routes';
import cors from 'cors';

const app = express ();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/usuario', usuario);
app.use('/api/dbcita', dbcita);
app.use('/api/dbinventario', dbinventario);


app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`);
});


