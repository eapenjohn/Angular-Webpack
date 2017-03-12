import './modules'

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      url: '',
      template: require('./root.html'),
      abstract: true
      // controller: 'Hitachi.SmartCity.ToolBox.Controllers.DatasetController as DatasetCntrl',
      // controllerAs: 'DatasetCntrl',   
      // requireADLogin: false
    })


  $urlRouterProvider.when('/', '/home')
    .otherwise('/')
}

config.$inject = ['$stateProvider', '$urlRouterProvider']

angular.module('root', [
  'ui.router',
  'root.modules.home',
  'root.modules.dataset'])
  .config(config)

