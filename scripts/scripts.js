"use strict";angular.module("moviesowlApp",["ionic"]).run(["$ionicPlatform",function(a){a.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){console.log("Config running, adding routes!"),b.otherwise("/"),a.state("home",{url:"/",templateUrl:"templates/cinemas.html",controller:"CinemasCtrl"}).state("movies",{url:"/movies/:cinemaId/?cinemaLocation",templateUrl:"templates/movies.html",controller:"MoviesCtrl"}).state("movie",{url:"/movie/:movieId",templateUrl:"templates/movieDetails.html",controller:"MovieDetailsCtrl"}).state("showings",{url:"/showings/:showId",templateUrl:"templates/showings.html",controller:"ShowingsCtrl"}).state("seats",{url:"/seats/:showId",templateUrl:"templates/seats.html",controller:"SeatsCtrl"})}]),angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"}),angular.module("moviesowlApp").controller("CinemasCtrl",["$scope","$http",function(a,b){function c(){b.get("http://api.moviesowl.com/v1/cinemas").then(function(b){a.cinemas=b.data.data}),console.log("im here!")}function d(){console.log("Reloading in 2 seconds"),setTimeout(function(){window.location.reload()},2e3)}function e(){console.log("Resetting"),basket.clear(),d()}function f(){console.log("Reloading from Github"),basket.clear();var b=[{url:"http://leinvaim.github.io/moviesowlionic/scripts/scripts.js",key:"scripts/scripts.js",execute:!1},{url:"http://leinvaim.github.io/moviesowlionic/scripts/templates.js",key:"scripts/templates.js",execute:!1}];basket.require.apply(null,b).then(function(b){console.log("New files cached, about to reload"),console.log("Templates:"),console.log(basket.get("scripts/templates.js")),console.log(b),a.$broadcast("scroll.refreshComplete"),d()},function(){console.log("Failed to get from Github!")})}console.log("In cinemas controller"),a.doRefresh=f,a.reset=e,c()}]),angular.module("moviesowlApp").controller("MoviesCtrl",["$scope","$http","$rootScope","$stateParams","selectedMovieService","$state","$ionicLoading",function(a,b,c,d,e,f,g){a.cinemaLocation=d.cinemaLocation,console.log(d.cinemaLocation),g.show({template:'<ion-spinner class="bubbles"></ion-spinner>'}),b.get("http://api.moviesowl.com/v1/cinemas/"+d.cinemaId+"/movies").then(function(b){c.movies=b.data.data,a.movies=_.chunk(c.movies,2),g.hide()}),a.selectMovie=function(a){e.setMovie(a),f.go("movie",{movieId:a.id})}}]),angular.module("moviesowlApp").controller("MovieDetailsCtrl",["$scope","$stateParams","$http","selectedMovieService","showingsDataService","$state",function(a,b,c,d,e,f){function g(a){return console.log(a),150>a?"Small":200>a?"Medium":"Large"}function h(a,b){var c=parseInt(b/a*100);return c>80?"Full":c>30?"Almost Full":c+"% Full"}a.movie=d.selectedMovie,a.showingsData=a.movie.showings.data,_.forEach(a.showingsData,function(b){c.get("http://api.moviesowl.com/v1/showings/"+b.id).then(function(c){for(var d=(c.data,c.data.seats),f=0,i=0,j=0;j<d.length;j++)for(var k=0;k<d[j].length;k++)"available"===d[j][k]&&f++,"taken"===d[j][k]&&(f++,i+=1);b.totalNumOfSeats=f,b.cinemaSize=g(f),b.fullness=h(f,i),b.seats=d,e.setShowingsData(a.showingsData)})}),a.openSeatView=function(b){var c=_.find(a.showingsData,function(a){return a.id===parseInt(b)});c.seats&&(console.log("am i here"),f.go("seats",{showId:b}))}}]),angular.module("moviesowlApp").controller("ShowingsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("moviesowlApp").controller("SeatsCtrl",["$scope","$http","$stateParams","showingsDataService",function(a,b,c,d){var e=_.find(d.showingsData,function(a){return a.id===parseInt(c.showId)});console.log(e),a.seatingPlan=e.seats;var f=a.seatingPlan[0].length;a.seatWidth=100/f}]),angular.module("moviesowlApp").factory("showingsDataService",function(){function a(a){b.showingsData=a}var b={setShowingsData:a,showingsData:[]};return b}),angular.module("moviesowlApp").factory("selectedMovieService",function(){function a(a){console.log("set movie",a),b.selectedMovie=a}var b={setMovie:a,selectedMovie:{}};return b});