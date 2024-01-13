const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'First name is required'],
        minLength:[3, 'First name must be at least 3 or more characters']
    },
    lastName:{
        type: String,
        required: [true, 'Last name is required'],
        maxLength:[10, 'Last name must be at most 10 characters']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
    },
    age: {
        type: Number,
        min: [1, 'You must be at least 1 year old or older to register'],
        max: [150, 'You must be at most 149 year old  to register']
    }

},
{timestamps: true}
);
const User = mongoose.model('User', UserSchema);
module.exports =User;

