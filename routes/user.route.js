const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.get('/api/users', UserController.findAllUser)
    app.get('/api/users/:id', UserController.findUserById)
    app.patch('/api/users/:id', UserController.updateExistingUser)
    app.post('/api/users', UserController.createNewUser)
    app.delete('/api/users/:id', UserController.deleteExistingUser)
}