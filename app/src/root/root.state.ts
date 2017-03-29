import './modules'
import 'angular-material-icons'

import RootController from './root.controller'

function config($stateProvider, $urlRouterProvider, $mdIconProvider, $sceDelegateProvider, $locationProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://rawgit.com/angular/material-start/es5-tutorial**'])
  $mdIconProvider.defaultIconSet("https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/avatars.svg", 128)
    .icon("share", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/share.svg", 24)
     .icon("menu", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/menu.svg", 24)
    .icon("google_plus", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/google_plus.svg", 512)
    .icon("hangouts", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/hangouts.svg", 512)
    .icon("twitter", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/twitter.svg", 512)
    .icon("phone", "https://rawgit.com/angular/material-start/es5-tutorial/app/assets/svg/phone.svg", 512)

  

  $stateProvider
    .state('root', {
      url: '',
      template: require('./root.html'),
      abstract: true,
      controller: RootController,
      controllerAs: 'rootCntrl'

    })


  $urlRouterProvider.when('/', '/users')
    .otherwise('/')

      $locationProvider.html5Mode(true);
}

config.$inject = ['$stateProvider', '$urlRouterProvider', '$mdIconProvider', '$sceDelegateProvider', '$locationProvider']

angular.module('root', [
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  'root.modules.users',
  'root.modules.dataset'])
  .config(config)

