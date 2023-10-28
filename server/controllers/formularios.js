import connection from "../../con_db.js";

export class FormularioController {
    getAllFormularios = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM formularios');
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    getFormulario = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM formularios WHERE ID = ?', [req.params.id]);
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    createFormulario = async (req, res) => {
        try {
            const { Fecha, Nombre, Grupo, NombresGrupo, TipoTrabajo, TrabajoRealizado, Ubicacion, Observacion, UsuarioID } = req.body;

            if (!Fecha) {
                throw new Error('Fecha not found');
            }

            if (!Nombre) {
                throw new Error('Nombre not found');
            }

            if (!Grupo) {
                throw new Error('Grupo not found');
            }

            if (!NombresGrupo) {
                throw new Error('NombresGrupo not found');
            }

            if (!TipoTrabajo) {
                throw new Error('TipoTrabajo not found');
            }

            if (!TrabajoRealizado) {
                throw new Error('TrabajoRealizado not found');
            }

            if (!Ubicacion) {
                throw new Error('Ubicacion not found');
            }

            const [rows] = await connection.execute(`
        INSERT INTO formularios (Fecha, Nombre, Grupo, NombresGrupo, TipoTrabajo, TrabajoRealizado, Ubicacion, Observacion, UsuarioID)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
      `, [Fecha, Nombre, Grupo, NombresGrupo, TipoTrabajo, TrabajoRealizado, Ubicacion, Observacion, UsuarioID]);

            res.header('Access-Control-Allow-Origin', '*');
            res.status(201).json({
                id: rows.insertId,
                Fecha,
                Nombre,
                Grupo,
                NombresGrupo,
                TipoTrabajo,
                TrabajoRealizado,
                Ubicacion,
                Observacion,
                UsuarioID,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    deleteFormulario = async (req, res) => {

        try {
            const [rows] = await connection.execute('DELETE FROM formularios WHERE ID = ?', [req.params.id]);
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }

    }
}