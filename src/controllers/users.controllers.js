const mysql = require('mysql')
const mySqlData = require('../config/mysqlData');
const queries = require('../mysql/usersQueries');

const pool = mysql.createPool(mySqlData)

const ctrl = {};

ctrl.index = (req, res) => {
    res.json({ message: 'index' })
}

// get users
ctrl.getUsers = (req, res) => {
    const sqlSelect = queries.getUsers;
    pool.query(sqlSelect, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

// get user
ctrl.getUser = (req, res) => {
    const { id } = req.params;
    const sqlSelect = queries.getUser;
    pool.query(sqlSelect, [id], (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

// create user
ctrl.createUser = (req, res) => {
    const { name, email, age, vegan } = req.body;
    const sqlCreate = queries.createUser;
    pool.query(sqlCreate, [name, email, age, vegan], (err, response) => {
        if (err) throw err;
        res.json({ message: 'User has been created' });
    })
}

// delete user
ctrl.deleteUser = (req, res) => {
    const { id } = req.params;
    const sqlDelete = queries.deleteUser;
    pool.query(sqlDelete, [id], (err, response) => {
        if (err) throw err;
        res.json({ message: 'User has been removed' })
    })
}

// update user 
ctrl.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, age, vegan } = req.body;
    const sqlUpdate = queries.updateUser;
    // checking if all the fields are filled, I won't need it when I create the UI, I will fill the fields with the values that I get from server so all the fields are been fill
    if (name === undefined || email === undefined || age === undefined  || vegan === undefined) {
        return res.status(400).json({ message: 'Please insert all the fields' })
    } else {
        try {
            pool.query(sqlUpdate, [name, email, age, vegan, id], (err, response) => {
                if (err) throw err;
                res.status(400).json({ message: 'Users has been updated' })
            })
        } catch (error) {
            res.status(500).json({ message: 'Server error' })
        }
    }

}

module.exports = ctrl;