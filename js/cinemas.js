(function () {

    'use strict';
    angular
        .module('moviesowlApp')
        .controller('CinemasController', CinemasController);

    /* @ngInject */
    function CinemasController($http, ENV, $rootScope, $scope, $state, $ionicHistory, $stateParams, $ionicViewSwitcher) {
        /* jshint validthis: true */

        activate();
        $scope.goToMovies = goToMovies;

        ////////////////

        function activate() {
            if(localStorage.cinema) {
                //var cinemaObj = angular.fromJson(localStorage.cinema);
                //$scope.cinemaLocation = cinemaObj.location;
            }

            $http.get(ENV.apiEndpoint + 'cities/' + $stateParams.city + '/cinemas').then(function(response) {
                $scope.cinemas = response.data.data;
            });
        }

        function goToMovies(cinema) {
            _.assign($rootScope.favouriteCinema, cinema);
            if($rootScope.favouriteCinemas.length < 3
                && $rootScope.favouriteCinemas[$rootScope.favouriteCinemas.length - 1].id) {
                $rootScope.favouriteCinemas.push({});
            }
            window.localStorage.favouriteCinemas = angular.toJson($rootScope.favouriteCinemas);

            $ionicViewSwitcher.nextDirection('back');
            $ionicHistory.nextViewOptions({
                //disableAnimate: true,
                disableBack: true
            });
            $state.go('movies');
        }
    }

})();
