const express = require('express')

const router = express.Router()
const stackoverflows = require('../../app/controllers/stackoverflows')

module.exports = router

router.param('stackoverflowId', stackoverflows.load)


router.get('/stackoverflows', stackoverflows.index)
router.post('/stackoverflows', stackoverflows.create)
router.get('/stackoverflows/:stackoverflowId', stackoverflows.show)
router.put('/stackoverflows/:stackoverflowId', stackoverflows.update)
router.delete('/stackoverflows/:stackoverflowId', stackoverflows.destroy)



router.use(function (err, req, res, next) {

  if(err.message &&
    (~err.message.indexOf('not found') ||
    (~err.message.indexOf('cast to ObjectId failed')))){
      return next()
    }

    console.error(err.stack)

    //error page

    res.status(500).json({
      message: 'internal server error',
      error: err.stack
    })
  })


  // set 404 when the middle ware doesn't respond

  router.use(function (req,res){
    const payload = {
      url: req.originalUrl,
      error: 'NOt found'
    }
    return res.status(404).json(payload)
  })
