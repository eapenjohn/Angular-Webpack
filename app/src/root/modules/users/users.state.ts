
function config1($stateProvider) {
    $stateProvider
        .state('root.users', {
            url: '/users',
            template: require('./users.html')
        })
}

config1.$inject = ['$stateProvider']


angular.module('root.modules.users', [
    'root.modules.users.details'
])
    .config(config1)