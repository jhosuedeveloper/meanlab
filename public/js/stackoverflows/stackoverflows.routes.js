angular.module('stackoverflowApp')
.config([
  '$locationProvider',
  '$stateProvider',
 '$urlRouterProvider',
 RouterFunction
])

function RouterFunction($locationProvider, $stateProvider, $urlRouterProvider){
  console.log("config")
  $locationProvider.html5Mode(true)
  $stateProvider
  .state('stackoverflowsIndex', {
    url: '/stackoverflows',
    templateUrl: 'js/stackoverflows/index.html',
    controller: "StackoverflowsIndexController",
    controllerAs: 'vm'
  })
  .state('stackoverflowsNew', {
    url: '/stackoverflows/new',
    templateUrl: 'js/stackoverflows/new.html',
    controller: "StackoverflowsNewController",
    controllerAs: 'vm'
  })
  .state('stackoverflowsEdit', {
    url: '/stackoverflows/edit/:id',
    templateUrl: 'js/stackoverflows/edit.html',
    controller: "StackoverflowsEditController",
    controllerAs: 'vm'
  })
  .state('stackoverflowsShow', {
    url: '/stackoverflows/:id',
    templateUrl: 'js/stackoverflows/show.html',
    controller: "StackoverflowsShowController",
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/stackoverflows')
}
