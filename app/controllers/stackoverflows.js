const mongoose =  require("mongoose")
const Stackoverflow = mongoose.model("Stackoverflow")

module.exports = {
  load: (req, res, next, id) => {
    Stackoverflow.findOne({_id: id})
    .then(stackoverflow => {
      req.stackoverflow = stackoverflow
      if(!req.stackoverflow) return next(new Error("stackoverflow not found"))
      next()
    })
    .catch(err => next(err))
  },
  index: (req, res, next) => {
    console.log("stackoverflow index action")
    Stackoverflow.find({})
    .then(stackoverflows => res.json(stackoverflows))
    .catch(err => next(err))
  },
  show: (req, res) => {
    console.log("stackoverflow show action")
    res.json(req.stackoverflow)
  },
  create: (req, res) => {
    console.log("stackoverflow create action")
    const stackoverflow = new Stackoverflow(req.body)
    stackoverflow.save()
      .then (stackoverflow => res.json(stackoverflow))
      .catch((err) =>{
        res.json({
          message: `Error creating stackoverflow`,
          errors: [err.toString()]
        })
      })
  },
  update: (req, res) => {
    console.log("stackoverflow update action")
    const stackoverflow = req.stackoverflow
    Object.assign(stackoverflow, req.body)
    stackoverflow.save()
    .then(stackoverflow => res.json(stackoverflow))
    .catch((err) => {
      res.json({
        message: `Error updating Stackoverflow id: ${stackoverflow._id}`,
        errors: [err.toString()]
      })
    })
  },
  destroy: (req, res) => {
    console.log("stackoverflow destroy action")
    req.stackoverflow.remove()
    .then(_ => res.json({
      message: "stackoverflow deleted"
    }))
  }
}


//define controller action in app/controllers/stackoverflow.js... just adding actions in the controller
