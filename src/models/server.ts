import express, { Application } from 'express';
import cors from 'cors'

// Importamos rutas
import routesAptitudes from '../routes/aptitudes';
import routesUser from '../routes/user';
import routesExperiencia from '../routes/experiencia'
import routesPersona from '../routes/persona';
import routesEducacion from '../routes/educacion';
import routesProyectos from '../routes/proyectos';
import routesFormulario from '../routes/formulario';

// Importamos modelos
import { Proyectos } from './proyectos';
import { Educacion } from './educacion';
import { User } from './user';
import { Persona } from './persona';
import { Aptitudes } from './aptitudes';
import { Experiencia } from './experiencia';
import { Formulario } from './formulario';

class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express(); 
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto " + this.port);
        })
    }

    routes() {
        this.app.use('/api/formulario', routesFormulario);
        this.app.use('/api/users', routesUser);
        this.app.use('/api/persona', routesPersona);
        this.app.use('/api/aptitudes', routesAptitudes);
        this.app.use('/api/experiencia', routesExperiencia);
        this.app.use('/api/educacion', routesEducacion);
        this.app.use('/api/proyectos', routesProyectos)
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Proyectos.sync()
            await Educacion.sync()
            await Experiencia.sync()
            await Aptitudes.sync()
            await Persona.sync()
            await User.sync()
            await Formulario.sync()
        } catch (error) {
            console.log("La conección con la base de datos a fracasado.", error);
        }
    }

}

export default Server;