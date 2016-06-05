import './modules'
import './services'
import  DatasetController from './dataset.controller'

function config($stateProvider)
{
     $stateProvider
     .state('root.dataset', {
        url: '/dataset',
        template:require('./dataset.html')
        // ,
        // abstract:true
        // requireADLogin: false
    })
}
config.$inject=['$stateProvider']

angular.module('root.modules.dataset',[
    'root.modules.dataset.modules.explore',
    'root.modules.dataset.services'
])
.config(config)
.controller('datasetController',DatasetController)