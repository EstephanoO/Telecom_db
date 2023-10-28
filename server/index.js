import express , { json } from 'express';
import { createUsersRouter } from './routes/users.js';
import { createRolesRouter } from './routes/roles.js';
import { createFormulariosRouter } from './routes/formularios.js';
import { createCarpetasRouter } from './routes/carpetas.js';
import { createArchivosRouter } from './routes/archivos.js';
import { createItemsRouter } from './routes/items.js';
import { corsMiddleware } from './middleware/cors.js';

export const createApp = () => {
    const app = express();
    app.use(json());
    app.use(corsMiddleware());
    app.disable('x-powered-by');

    app.get('/', (req, res) => {
        res.sendFile(process.cwd() + '/client/index.html');
    });
    app.use('/users', createUsersRouter());
    app.use('/roles', createRolesRouter());
    app.use('/formularios', createFormulariosRouter());
    app.use('/carpetas', createCarpetasRouter())
    app.use('/archivos', createArchivosRouter())
    app.use('/items', createItemsRouter())

    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
    return app;
    }