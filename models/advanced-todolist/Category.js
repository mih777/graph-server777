const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

    title: String

})


module.exports = mongoose.model('task-categories', categorySchema)