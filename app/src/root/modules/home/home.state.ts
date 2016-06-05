
function config($stateProvider)
{
     $stateProvider
        .state('root.home', {
        url: '/home',
        template: require('./home.html')
    })
}

config.$inject=['$stateProvider']

angular.module('root.modules.home', [])
.config(config)