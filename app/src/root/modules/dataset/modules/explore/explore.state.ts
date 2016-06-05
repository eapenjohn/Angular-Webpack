import './modules'
function config($stateProvider:any) {
     $stateProvider
     .state('root.dataset.explore', {
        url: '/explore',
        template:require('./explore.html'),
        controller: 'datasetController',
        controllerAs: 'datasetCntrl',   
    })
}

config.$inject=['$stateProvider']

angular.module('root.modules.dataset.modules.explore',[
    'root.modules.dataset.modules.explore.modules.details'
])
.config(config)