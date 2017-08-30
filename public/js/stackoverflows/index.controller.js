angular.module('stackoverflowApp')
.controller('StackoverflowsIndexController', StackoverflowsIndexControllerFunction)


StackoverflowsIndexControllerFunction.$inject  = ['StackoverflowsFactory']

function StackoverflowsIndexControllerFunction (Stackoverflow){
  this.stackoverflows = Stackoverflow.query()

  console.log("i was here")


  this.toggleStatus = toggleStatus

  function toggleStatus (id) {
    const stackoverflow = this.stackoverflows.find(stackoverflow => stackoverflow._id ===id)
    stackoverflow.$update({id: stackoverflow._id})
  } //ask LATER
}
