const mongoose = require("mongoose")
const connect = require("./connect")
const stackoverflowSeeds = require("./seedStackoverflows")

const Stackoverflow = mongoose.model('Stackoverflow')

connect()
  .then(_ => Stackoverflow.remove({}))
  .then(_ => Stackoverflow.collection.insert(stackoverflowSeeds))
  .then(stackoverflow => {
    console.log(stackoverflow)
    process.exit()
  })
  .catch((err)=>{
    console.log(err)
    process.exit()
  })
