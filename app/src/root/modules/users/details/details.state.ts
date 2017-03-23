function config( $stateProvider)
{
      $stateProvider
        .state('root.users.details', {
            url: '/users?id',
            template: require('./details.html')
        })
}


config.$inject = ['$stateProvider']


angular.module('root.modules.users.details', [])
    .config(config)