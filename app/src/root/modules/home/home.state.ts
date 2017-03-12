
function config1($stateProvider) {
    $stateProvider
        .state('root.home', {
            url: '/home',
            template: require('./home.html')
        })
}

config1.$inject = ['$stateProvider']


angular.module('root.modules.home', [])
    .config(config1)