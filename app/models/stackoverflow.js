const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StackOverFlowSchema = new Schema({

title: {
  type: String,
  default: '',
  trim: true
},
snippet: {
  type: String,
  default: '',
  trim: true
}





})
mongoose.model("Stackoverflow", StackOverFlowSchema)
