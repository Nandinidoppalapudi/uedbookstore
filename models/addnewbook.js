/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const AddnewuserSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  author: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Author'
  },
  isbn: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'ISBN'
  },
  publisher: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'Publisher'
  },
  ratings: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    default: 'Ratings'
  },
  price: {
    type: String,
    minlength: 1,
    maxlength: 12,
    required: true,
    default: 'Price'
  },
  language: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'English'
  },
  condition: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'Good'
  }

})
module.exports = mongoose.model('addnewbook', AddnewuserSchema)
