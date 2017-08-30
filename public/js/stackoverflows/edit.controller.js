angular
.module('stackoverflowApp')
.controller('StackoverflowsEditController', [
  '$state',
  'StackoverflowsFactory',
  StackoverflowsEditControllerFunction
])


function StackoverflowsEditControllerFunction($state, StackoverflowsFactory){
  this.stackoverflow = StackoverflowsFactory.get({id: $state.params.id})

  this.update = function () {
    this.stackoverflow.$update({id: $state.params.id}, (res) => {
      $state.go('stackoverflowsShow', { id: res._id })
    })
  }

  this.destroy = function () {
    this.stackoverflow.$delete({id: $state.params.id}, () => {
      $state.go('stackoverflowsIndex')
    })
  }
}
