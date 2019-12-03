/**
*  Developer model
*  Describes the characteristics of each attribute in a developer resource.
*
* @author Denise Case <denisecase@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const AddnewplaceSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  address:{
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'address'
  },
  city: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    minlength: 5,
    maxlength: 12,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'USA'
  }

})
module.exports = mongoose.model('addnewplaces', AddnewplaceSchema)
