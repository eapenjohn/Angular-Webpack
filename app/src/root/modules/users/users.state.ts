
import UsersController from './users.controller'



function config1($stateProvider) {
    $stateProvider
        .state('root.users', {
            url: '/users',
            template: require('./users.html'),
            controller: UsersController,
            controllerAs: 'usersCntrl',   
        })
}

config1.$inject = ['$stateProvider']


angular.module('root.modules.users', [
    'root.modules.users.service',
    'root.modules.users.details'
])
    .config(config1)