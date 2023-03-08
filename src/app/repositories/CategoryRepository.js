const db = require('../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const diretion = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${diretion}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async create(name) {
    const [row] = await db.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    return row;
  }

  async delete(id) {
    const [row] = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return row;
  }

  async update(name, id) {
    const [row] = await db.query(`
    UPDATE categories
    SET name = $1
    WHERE id = $2`, [name, id]);
    return row;
  }
}

module.exports = new CategoryRepository();
