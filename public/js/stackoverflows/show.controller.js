angular.module("stackoverflowApp")
.controller("StackoverflowsShowController",[
  '$stateParams',
  'StackoverflowsFactory',
  StackoverflowsShowControllerFunction
])

function StackoverflowsShowControllerFunction($stateParams, StackoverflowsFactory){
  this.stackoverflow = StackoverflowsFactory.get({id: $stateParams.id})
}
