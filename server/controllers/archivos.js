import connection from '../../con_db.js'

export class ArchivosController {
    getAllArchivos = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM archivos');
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    getArchivo = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM archivos WHERE archivo_id = ?', [req.params.id]);
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    subirArchivo = async (req, res) => {
        try {
            const { type, name, carpeta_padre_id, rol_id, ruta } = req.body;

            if (!type) {
                throw new Error('Type not found');
            }

            if (!name) {
                throw new Error('Name not found');
            }

            if (!carpeta_padre_id) {
                throw new Error('Carpeta Padre not found');
            }

            if (!rol_id) {
                throw new Error('Rol not found');
            }

            if (!ruta) {
                throw new Error('Ruta not found');
            }

            const [rows] = await connection.execute(`
        INSERT INTO archivos (type, name, carpeta_padre_id, rol_id, ruta)
        VALUES (?, ?, ?, ?, ?);
      `, [type, name, carpeta_padre_id, rol_id, ruta]);

            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}