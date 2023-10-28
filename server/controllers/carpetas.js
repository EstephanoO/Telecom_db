import connection from '../../con_db.js';

export class CarpetasController {
    getAllCarpetas = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM carpetas');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    getCarpeta = async (req, res) => {
        try {
            const [rows] = await connection.execute('SELECT * FROM carpetas WHERE carpeta_id = ?', [req.params.id]);
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    crearCarpeta = async (req, res) => {
        console.log(req.body);
        try {
            const { nombre, rol_id, usuario_id } = req.body;

            if (!nombre) {
                throw new Error('Nombre not found');
            }

            if (!rol_id) {
                throw new Error('Rol not found');
            }

            if (!usuario_id) {
                throw new Error('Usuario not found');
            }

            const [rows] = await connection.execute(`
        INSERT INTO carpetas (nombre, rol_id, usuario_id)
        VALUES (?, ?, ?);
      `, [nombre, rol_id, usuario_id]);
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
