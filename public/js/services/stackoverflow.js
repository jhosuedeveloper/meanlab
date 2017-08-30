angular.module('stackoverflowApp')
.factory('StackoverflowsFactory', stackoverflow )

stackoverflow.$inject = ['$resource']

function stackoverflow($resource){
  return $resource('/api/stackoverflows/:id', {}, {
    update: {method: 'PUT'}
  })
}
