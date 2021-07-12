const router = require('express').Router();

const {
    index,
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/users.controllers');

router.get('/', index);
router.get('/users', getUsers);
router.get('/user/:id', getUser);

router.post('/user', createUser)

router.delete('/user/:id', deleteUser);

router.put('/user/:id', updateUser);


module.exports = router;