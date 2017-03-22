import './modules'
import 'angular-material-icons'
function config($stateProvider, $urlRouterProvider, $mdIconProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self','https://rawgit.com/angular/material-start/es5-tutorial**'])
  $mdIconProvider.defaultIconSet("https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/avatars.svg", 128)

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

config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdIconProvider','$sceDelegateProvider']

angular.module('root', [
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  'root.modules.home',
  'root.modules.dataset'])
  .config(config)

