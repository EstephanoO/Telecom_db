import connection from '../../con_db.js'

export class UserController {
  getAllUsers = async (req, res) => {
    try {
      const [rows] = await connection.execute(`
        SELECT u.*, r.rol_name AS rol_name
        FROM users u
        JOIN roles r ON u.rol_id = r.rol_id
      `);
      res.header('Access-Control-Allow-Origin', '*');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  getUser = async (req, res) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [req.params.id]);
      res.header('Access-Control-Allow-Origin', '*');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  createUser = async (req, res) => {
    try {
      const { nombre, email, rol_id, password } = req.body;

      if (!nombre) {
        throw new Error('nombre not found');
      }

      const [result] = await connection.execute(
        'INSERT INTO users (nombre, email, rol_id, password) VALUES (?, ?, ?, ?)',
        [nombre, email, rol_id, password]
      );

      res.header('Access-Control-Allow-Origin', '*');
      res.json({ id: result.insertId, nombre, email, rol_id, password });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}