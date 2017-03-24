function configAccount($stateProvider) {
    $stateProvider
        .state('root.login', {
            url: '/login',
            template: require('./login.html'),
            // controller: 'Hitachi.SmartCity.ToolBox.Controllers.DatasetController as DatasetCntrl',
            // controllerAs: 'DatasetCntrl',   
            // requireADLogin: false
        })
}

configAccount.$inject = ['$stateProvider']

angular.module('root.modules.account', [])
    .config(configAccount)