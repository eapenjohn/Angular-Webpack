function config($stateProvider)
{
     $stateProvider
        .state('root.login', {
        url: '/login',
        template: require('./login.html'),    
        // controller: 'Hitachi.SmartCity.ToolBox.Controllers.DatasetController as DatasetCntrl',
        // controllerAs: 'DatasetCntrl',   
        // requireADLogin: false
    })
}

config.$inject=['$stateProvider']

angular.module('root.modules.account',[])
.config(config)