import connection from '../../con_db.js';

export class RoleController {

getAllRoles = async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM roles');
    res.header('Access-Control-Allow-Origin', '*');
    res.json(rows);
    }

getRol = async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM roles WHERE rol_id = ?', [req.params.id]);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(rows);
    }
deleteRol = async (req, res) => {
    const [rows] = await connection.execute('DELETE FROM roles WHERE rol_id = ?', [req.params.id]);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(rows);
    }
crearRol = async (req, res) => {
    const [rows] = await connection.execute('INSERT INTO roles (rol_name) VALUES (?)', [req.body.rol_name]);
    res.header('Access-Control-Allow-Origin', '*');
    res.json(rows);
    }
}