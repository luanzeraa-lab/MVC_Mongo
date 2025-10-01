const mongoose = require('mongoose')
const schema = mongoose.Schema;

let userSchema = new schema({
    name: {type: String, require: true, max: 100},
    age: {type: Number, require: true}
})

module.exports = mongoose.model('User', userSchema)