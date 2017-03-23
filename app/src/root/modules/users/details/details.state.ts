function config( $stateProvider)
{
      $stateProvider
        .state('root.users.details', {
            url: '/users?id',
            template: require('./details.html')
        })
}


config1.$inject = ['$stateProvider']


angular.module('root.modules.users', [])
    .config(config1)