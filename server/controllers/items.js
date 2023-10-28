import connection from '../../con_db.js'

export class ItemsController {
    getAllItems = async (req, res) => {
        try {
            const [rows] = await connection.execute(`
                SELECT a.id, a.name, a.type, a.ruta, c.nombre AS carpeta_nombre
                FROM archivos a
                LEFT JOIN carpetas c ON a.carpeta_id = c.id
                UNION
                SELECT c.id, c.nombre, 'carpeta', '', p.nombre AS carpeta_nombre
                FROM carpetas c
                LEFT JOIN carpetas p ON c.carpeta_padre_id = p.id
            `);
            res.header('Access-Control-Allow-Origin', '*');
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}