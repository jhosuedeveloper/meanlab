angular.module("stackoverflowApp")
.controller("StackoverflowsNewController", [
'$state',
'StackoverflowsFactory',
  StackoverflowsNewControllerFunction])

StackoverflowsNewControllerFunction.$inject =  ['StackoverflowsFactory']


function StackoverflowsNewControllerFunction ( $state, StackoverflowsFactory){
  // this.createStackoverflow = createStackoverflow
  //
  // function createStackoverflow(){
  //   console.log('gonna make a stackoverflow')
  // }

this.stackoverflow = new StackoverflowsFactory()

this.create = function (){

  this.stackoverflow.$save(() => {
    console.log("this things just got saved")
    $state.go('stackoverflowsIndex')
  })
}


}
