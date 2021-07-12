const table = process.env.DB_USERS_TABLE;

module.exports = {
    // get users
    getUsers: `SELECT * FROM ${table};`,
    // get user by id
    getUser: `SELECT * FROM ${table} WHERE id=?`,
    // create an user
    createUser: `INSERT INTO ${table}(name, email, age, vegan)VALUES(?,?,?,?)`,
    // delete an user
    deleteUser: `DELETE FROM ${table} WHERE id=?`,
    // update an user
    updateUser: `UPDATE ${table} SET name=?, email=?, age=?, vegan=? WHERE id=?`
}