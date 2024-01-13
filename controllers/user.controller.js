const User = require('../models/user.model');

// create new user
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then((newlyCreatedUser) => {
            res.json({
                user: newlyCreatedUser
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        })

}
// Find all users
module.exports.findAllUser = (req, res) => {
    User.find({})
        .then((allUsers) => {
            res.json({
                users: allUsers
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        })
}

// Find a specific user using ObjectId
module.exports.findUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((user) => {
            res.json({
                user:user
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        })
}

//update an existing user
module.exports.updateExistingUser =(req, res) =>{
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then((updatedUser) => {
        res.json({
            user: updatedUser
        })
    })
    .catch((err) =>{
        res.json({
            message: 'Something went wrong',
            error: err
        })
    })
}

//delete an existing user
module.exports.deleteExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({
                result
            })
        })
        .catch((err) => {
            res.json({
                message: 'Something went wrong',
                error: err
            })
        })
}


