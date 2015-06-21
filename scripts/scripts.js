!function(){function a(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","http://www.google-analytics.com/analytics.js","ga"),localStorage.gaClientId=localStorage.gaClientId||a(),ga("create","UA-51312192-5",{storage:"none",cookieDomain:"none",clientId:localStorage.gaClientId}),ga("set","checkProtocolTask",null)}(),angular.module("moviesowlApp",["ionic","angulartics","angulartics.google.analytics","angularMoment","ion-affix"]).run(["$ionicPlatform","amMoment",function(a,b){b.changeLocale("en"),a.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){console.log("Config running, adding routes!"),console.log("Is this working?!!?"),b.otherwise("/cinemas"),a.state("cinemas",{url:"/cinemas",templateUrl:"templates/cinemas.html",controller:"CinemasCtrl"}).state("movies",{url:"/movies/:cinemaId/?cinemaLocation",templateUrl:"templates/movies.html",controller:"MoviesCtrl"}).state("movie",{url:"/movie/:movieId",templateUrl:"templates/movieDetails.html",controller:"MovieDetailsCtrl"}).state("showings",{url:"/showings/:showId",templateUrl:"templates/showings.html",controller:"ShowingsCtrl"}).state("seats",{url:"/seats/:showId",templateUrl:"templates/seats.html",controller:"SeatsCtrl"})}]),angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://api.yoursite.com/"}),angular.module("moviesowlApp").controller("CinemasCtrl",["$scope","$http","$ionicLoading",function(a,b,c){function d(){console.log("Reloading in 2 seconds"),setTimeout(function(){c.hide(),window.location.reload()},1e3)}function e(){console.log("Resetting"),c.show({template:"Loading..."}),basket.clear(),d()}function f(){console.log("Reloading from Github"),c.show({template:"Loading..."}),basket.clear();var b=(new Date).getTime(),d=[{url:"http://leinvaim.github.io/moviesowlionic/scripts/vendor.js?time="+b,key:"scripts/vendor.js",execute:!1},{url:"http://leinvaim.github.io/moviesowlionic/scripts/scripts.js?time="+b,key:"scripts/scripts.js",execute:!1},{url:"http://leinvaim.github.io/moviesowlionic/scripts/templates.js?time="+b,key:"scripts/templates.js",execute:!1},{url:"http://leinvaim.github.io/moviesowlionic/styles/vendor.css?time="+b,key:"styles/vendor.css",execute:!1},{url:"http://leinvaim.github.io/moviesowlionic/styles/style.css?time="+b,key:"styles/style.css",execute:!1}];console.log("Files to load"),console.log(d),basket.require.apply(null,d).then(function(b){console.log("New files cached, about to reload"),console.log("Templates:"),console.log(basket.get("scripts/templates.js")),console.log("RELOAD FILES:"),console.log(b),a.$broadcast("scroll.refreshComplete"),console.log("FUUUCCCCCKKKK")},function(){console.log("Failed to get from Github!")})}console.log("In cinemas controller"),a.update=f,a.reset=e,a.cinemas=[{id:1,location:"Australia Fair Cinemas"},{id:2,location:"Brisbane City Myer Centre"},{id:3,location:"Browns Plains"},{id:4,location:"Cairns Central"},{id:5,location:"Cairns City"},{id:6,location:"Cairns Earlville"},{id:7,location:"Capalaba"},{id:8,location:"Carindale"},{id:9,location:"Chermside"},{id:10,location:"Coolangatta"},{id:11,location:"Garden City Mt Gravatt"},{id:12,location:"Indooroopilly"},{id:13,location:"Ipswich"},{id:14,location:"Loganholme"},{id:15,location:"Mackay City"},{id:16,location:"Mackay Mount Pleasant"},{id:17,location:"Maroochydore Sunshine Plaza"},{id:18,location:"Moonlight Cinema Brisbane"},{id:19,location:"Morayfield"},{id:20,location:"Noosa Cinemas"},{id:21,location:"Robina"},{id:22,location:"Rockhampton North"},{id:23,location:"Strathpine"},{id:24,location:"Toombul"},{id:25,location:"Toowoomba Grand Central"},{id:26,location:"Toowoomba Strand"},{id:27,location:"Townsville Central"},{id:28,location:"Townsville City"},{id:29,location:"Moonlight Cinema Port Douglas"}]}]),angular.module("moviesowlApp").controller("MoviesCtrl",["$scope","$http","$rootScope","$stateParams","selectedMovieService","$state","$ionicLoading","$ionicPopup",function(a,b,c,d,e,f,g,h){function i(){b.get("http://api.moviesowl.com/v1/cinemas/"+d.cinemaId+"/movies").then(function(b){c.movies=b.data.data,a.groups=[{name:"Great Movies",style:"balanced",movies:_.chunk(_.filter(c.movies,function(a){return a.tomato_meter>=70}),2)},{name:"Fine Movies",style:"energized",movies:_.chunk(_.filter(c.movies,function(a){return a.tomato_meter>=50&&a.tomato_meter<70}),2)},{name:"Bad Movies",style:"assertive",movies:_.chunk(_.filter(c.movies,function(a){return a.tomato_meter<50&&a.tomato_meter>=0}),2)},{name:"No Rating Movies",style:"dark",movies:_.chunk(_.filter(c.movies,function(a){return a.tomato_meter<0}),2)}],a.hasNoMovies=!1,b.data.data.length<1&&(a.hasNoMovies=!0),g.hide(),a.$broadcast("scroll.refreshComplete")},function(){g.hide(),a.$broadcast("scroll.refreshComplete");h.alert({title:"Sorry :(",template:"Failed to load movies, /n Please try again!"})})}function j(){console.log("Reloading Movies"),i()}a.cinemaLocation=d.cinemaLocation,a.doRefresh=j,console.log(d.cinemaLocation),g.show({template:'<ion-spinner class="bubbles"></ion-spinner>'}),i(),a.selectMovie=function(a){e.setMovie(a),f.go("movie",{movieId:a.id})}}]),angular.module("moviesowlApp").controller("MovieDetailsCtrl",["$scope","$stateParams","$http","selectedMovieService","showingsDataService","$state",function(a,b,c,d,e,f){function g(a){return console.log(a),150>a?"Small":200>a?"Medium":"Large"}function h(a,b){if(0===a&&0===b)return"not available";var c=parseInt(b/a*100);return c>80?"Full":c>30?"Almost Full":c+"% Full"}a.movie=d.selectedMovie,a.showingsData=a.movie.showings.data,_.forEach(a.showingsData,function(b){c.get("http://api.moviesowl.com/v1/showings/"+b.id).then(function(c){for(var d=(c.data,c.data.seats),f=0,i=0,j=0;j<d.length;j++)for(var k=0;k<d[j].length;k++)"available"===d[j][k]&&f++,"taken"===d[j][k]&&(f++,i+=1);b.totalNumOfSeats=f,b.cinemaSize=g(f),b.fullness=h(f,i),b.seats=d,e.setShowingsData(a.showingsData)})}),a.openSeatView=function(b){var c=_.find(a.showingsData,function(a){return a.id===parseInt(b)});c.seats&&c.seats.length>0&&(console.log("am i here"),f.go("seats",{showId:b}))}}]),angular.module("moviesowlApp").controller("ShowingsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("moviesowlApp").controller("SeatsCtrl",["$scope","$http","$stateParams","showingsDataService",function(a,b,c,d){function e(){console.log("Reloading Seats"),b.get("http://api.moviesowl.com/v1/showings/"+c.showId).then(function(b){a.seatingPlan=b.data.seats,a.$broadcast("scroll.refreshComplete")},function(){a.$broadcast("scroll.refreshComplete")})}a.doRefresh=e;var f=_.find(d.showingsData,function(a){return a.id===parseInt(c.showId)});console.log(f),a.seatingPlan=f.seats;var g=a.seatingPlan[0].length;a.seatWidth=100/g}]),angular.module("moviesowlApp").factory("showingsDataService",function(){function a(a){b.showingsData=a}var b={setShowingsData:a,showingsData:[]};return b}),angular.module("moviesowlApp").factory("selectedMovieService",function(){function a(a){console.log("set movie",a),b.selectedMovie=a}var b={setMovie:a,selectedMovie:{}};return b});