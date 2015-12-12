// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('moviesowlApp', ['ionic', 'config', 'templates'])

    .run(function ($ionicPlatform, ENV, $rootScope, autoupdate) {

        autoupdate.bootstrapOk();

        console.log('NEW VERSION!!');

        // Globals
        $rootScope.ENV = ENV;

        $ionicPlatform.ready(function () {
            if (window.cordova) {
                // Add in app browser open
                window.open = cordova.InAppBrowser.open;
            }
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:
            .state('cities', {
                url: '/cities',
                templateUrl: 'templates/cities.html',
                controller: 'CitiesController'
            })
            .state('cinemas', {
                url: '/cinemas?city',
                templateUrl: 'templates/cinemas-page.html',
                controller: 'CinemasController'
            })
            .state('movies', {
                parent: 'tab',
                url: '/movies',
                views: {
                    'tab-movies': {
                        templateUrl: 'templates/tab-movies.html',
                        controller: 'MoviesController'
                    }
                }
            })
            .state('showings', {
                parent: 'tab',
                url: '/movies/:movieId',
                views: {
                    'tab-movies': {
                        templateUrl: 'templates/showings.html',
                        controller: 'ShowingsCtrl'
                    }
                }
            })
            .state('seats', {
                parent: 'tab',
                url: '/seats/:showId',
                views: {
                    'tab-movies': {
                        templateUrl: 'templates/seats.html',
                        controller: 'SeatsCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/movies');

    });

setTimeout(function() {
    angular.element(document).ready(function() {
        console.log('bootstrapping now');
        angular.bootstrap(document, ['moviesowlApp']);
    });
}, 0);