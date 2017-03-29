function configAccount($stateProvider) {
    $stateProvider
        .state('root.login', {
            url: '/login',
            template: require('./login.html')
        })
}

configAccount.$inject = ['$stateProvider']

angular.module('root.modules.account', [])
    .config(configAccount)