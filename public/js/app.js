angular.module('waterfallApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        resolve: {
            user: function() {
                return {};
            }
        }
    })

    .state('waterfall', {
        url: '/waterfall',
        templateUrl: 'views/waterfall.html',
        controller: 'mainCtrl',
        resolve: {
            user: function(mainSvc) {
                return mainSvc.getCurrentUser();
            }
        }
    })

    .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
    })

    .state('landingPage', {
        url: '/landingPage',
        templateUrl: 'views/landingPage.html',
        controller: 'landingCtrl',
        resolve: {
            user: function() {
                return {};
            }
        }
    });



});
