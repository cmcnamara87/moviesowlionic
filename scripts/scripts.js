!function(){function a(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","http://www.google-analytics.com/analytics.js","ga"),localStorage.gaClientId=localStorage.gaClientId||a(),ga("create","UA-51312192-5",{storage:"none",cookieDomain:"none",clientId:localStorage.gaClientId}),ga("set","checkProtocolTask",null)}(),angular.module("moviesowlApp",["ionic","config","angulartics","angulartics.google.analytics","angularMoment","ion-affix","ionic.rating"]).run(["$ionicPlatform","amMoment","$rootScope","ENV",function(a,b,c,d){b.changeLocale("en"),c.ENV=d,a.ready(function(){a.ready(function(){navigator.splashscreen&&setTimeout(function(){navigator.splashscreen.hide()},100)}),window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault(),c.$on("$stateChangeStart",function(a,b){b.changeColor?c.changeColor=!0:c.changeColor=!1})})}]).config(["$stateProvider","$urlRouterProvider",function(a,b){console.log("Config running, adding routes!"),b.otherwise("/movies"),a.state("movies",{url:"/movies",templateUrl:"templates/movies.html",controller:"MoviesCtrl"}).state("movie",{url:"/movie/:movieId",templateUrl:"templates/movieDetails.html",controller:"MovieDetailsCtrl"}).state("showings",{url:"/showings/:movieId",templateUrl:"templates/showings.html",controller:"ShowingsCtrl",changeColor:!0}).state("seats",{url:"/seats/:showId",templateUrl:"templates/seats.html",controller:"SeatsCtrl"})}]),angular.module("config",[]).constant("ENV",{name:"production",apiEndpoint:"http://128.199.104.251/moviesowl.com/current/public/api/v1/",posterEndpoint:"http://128.199.104.251/moviesowl.com/current/public/"}),angular.module("moviesowlApp").controller("CinemasCtrl",["$scope","$http","$ionicLoading",function(a,b,c){console.log("In cinemas controller")}]),angular.module("moviesowlApp").controller("MoviesCtrl",["ENV","$scope","$http","$rootScope","$stateParams","selectedMovieService","$state","$ionicLoading","$ionicPopup","$ionicModal","cinemasList",function(a,b,c,d,e,f,g,h,i,j,k){function l(){b.startingAfter=n(),q()&&x(),r().then(s),j.fromTemplateUrl("templates/times.html",{scope:b,animation:"slide-in-up"}).then(function(a){b.timesModal=a})}function m(){var a=[n()],b=new Date(n().getTime());b.setHours(b.getHours()+1),b.setMinutes(0);for(var c=b.getHours();24>c;c++){var d=new Date(b.getTime());d.setHours(c),a.push(d)}return a}function n(){return new Date}function o(){b.times=m(),b.timesModal.show()}function p(a){b.timesModal.hide(),b.startingAfter=a,x()}function q(){return!!window.localStorage.cinema}function r(){return j.fromTemplateUrl("templates/cinemas.html",{scope:b,animation:"slide-in-up"}).then(function(a){b.modal=a})}function s(){q()||b.openModal()}function t(){b.modal.show()}function u(a){window.localStorage.cinema=angular.toJson(a),b.modal.hide(),x()}function v(a){b.modal.hide()}function w(b,d){return d||(d=Math.round((new Date).getTime()/1e3)),c.get(a.apiEndpoint+"cinemas/"+b+"/movies?starting_after="+d).then(function(a){return a.data})}function x(){h.show({template:'<ion-spinner class="bubbles"></ion-spinner>',noBackdrop:!0});var a=angular.fromJson(localStorage.cinema);b.cinemaLocation=a.location;var c=Math.round(b.startingAfter.getTime()/1e3);w(a.id,c).then(function(a){_.each(a.data,function(a){a.stars=a.tomato_meter/25}),d.movies=a.data,b.groups=[{name:"Great Movies",style:"balanced",movies:_.chunk(_.filter(d.movies,function(a){return a.tomato_meter>=70}),2)},{name:"Good Movies",style:"energized",movies:_.chunk(_.filter(d.movies,function(a){return a.tomato_meter>=50&&a.tomato_meter<70}),2)},{name:"Bad Movies",style:"assertive",movies:_.chunk(_.filter(d.movies,function(a){return a.tomato_meter<50&&a.tomato_meter>=0}),2)},{name:"No Rating Movies",style:"dark",movies:_.chunk(_.filter(d.movies,function(a){return a.tomato_meter<0}),2)}],b.hasNoMovies=!1,a.data.length<1&&(b.hasNoMovies=!0),h.hide(),b.$broadcast("scroll.refreshComplete")},function(){h.hide(),b.$broadcast("scroll.refreshComplete");i.alert({title:"Sorry :(",template:"Failed to load movies, Please try again!"})})}function y(){console.log("Reloading Movies"),b.startingAfter=n(),x()}function z(){return localStorage.viewMode||"list"}function A(){var a="";a="list"===b.mode?"grid":"list",b.mode=a,localStorage.viewMode=a}function B(a){console.log("haha"),console.log(a)}function C(a){}function D(a){console.log(a),console.log("update found"),b.$apply(function(){b.hasUpdate=!0})}function E(a){console.log(a),console.log("progress"),b.$apply(function(){b.progressWidth=a.load/a.total*100})}b.doRefresh=y,b.openModal=t,b.closeModal=u,b.closeModalOnly=v,b.toggleViewMode=A,b.setStartingTime=p,b.showTimesModal=o,b.cinemaLocation=e.cinemaLocation,b.cinemas=k.cinemas,b.mode=z(),l(),b.$on("$destroy",function(){b.modal.remove()}),b.selectMovie=function(a){f.setMovie(a),g.go("showings",{movieId:a.id})};var F=window.applicationCache;F.addEventListener("cached",B,!1),F.addEventListener("checking",B,!1),F.addEventListener("downloading",D,!1),F.addEventListener("error",C,!1),F.addEventListener("noupdate",B,!1),F.addEventListener("obsolete",B,!1),F.addEventListener("progress",E,!1),F.addEventListener("updateready",B,!1)}]),angular.module("moviesowlApp").controller("MovieDetailsCtrl",["ENV","$scope","$stateParams","$http","selectedMovieService","showingsDataService","$state","$q",function(a,b,c,d,e,f,g,h){function i(){j().then(function(a){b.movie=a})}function j(){return e.selectedMovie.id?h.when(e.selectedMovie):d.get(a.apiEndpoint+"cinemas/12/movies").then(function(a){var b=a.data.data;return e.selectedMovie=_.find(b,{id:parseInt(c.movieId)}),e.selectedMovie})}i()}]),angular.module("moviesowlApp").controller("ShowingsCtrl",["ENV","$scope","$stateParams","$http","selectedMovieService","showingsDataService","$state","$q","$ionicModal","$rootScope","$ionicHistory","$timeout",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(){j.changeColor=!1,l(function(){k.goBack()},0)}function n(){console.log("hell world"),angular.element("ion-content").bind("scroll",function(a){console.log(a.originalEvent.detail),a.originalEvent.detail.scrollTop>=10?j.changeColor=!1:j.changeColor=!0,console.log("scrolling"),b.$apply()}),o().then(function(a){b.movie=a}).then(s)}function o(){return e.selectedMovie.id?h.when(e.selectedMovie):d.get(a.apiEndpoint+"cinemas/12/movies").then(function(a){var b=a.data.data;return e.selectedMovie=_.find(b,{id:parseInt(c.movieId)}),e.selectedMovie})}function p(a){return a.tomato_meter<60?"images/rotten.png":a.tomato_meter<75?"images/fresh.png":"images/CF_240x240.png"}function q(a){return a.tomato_meter<50?"Bad Movie":a.tomato_meter<70?"Good Movie":"Great Movie"}function r(a){return a.tomato_meter<50?"red":a.tomato_meter<70?"yellow":"#1CC56A"}function s(){b.showingsData=b.movie.showings.data,b.rottenLogo=p(b.movie),b.owlRating=q(b.movie),b.textColour=r(b.movie),_.forEach(b.showingsData,function(c){d.get(a.apiEndpoint+"showings/"+c.id).then(function(a){for(var d=(a.data,a.data.seats),e=0,g=0,h=0;h<d.length;h++)for(var i=0;i<d[h].length;i++)"available"===d[h][i]&&e++,"taken"===d[h][i]&&(e++,g+=1);c.totalNumOfSeats=e,c.cinemaSize=t(e),c.fullness=u(e,g),c.seats=d,f.setShowingsData(b.showingsData)})})}function t(a){return console.log(a),150>a?"Small":200>a?"Medium":"Large"}function u(a,b){if(0===a&&0===b)return"not available";var c=parseInt(b/a*100);return c>80?"Full":c>30?"Almost Full":c+"% Full"}b.goBack=m,n(),b.openSeatView=function(a){var c=_.find(b.showingsData,function(b){return b.id===parseInt(a)});c.seats&&c.seats.length>0&&(console.log("am i here"),g.go("seats",{showId:a}))},i.fromTemplateUrl("templates/movieDetails.html",{scope:b,animation:"scale-in"}).then(function(a){b.modal=a}),b.openModal=function(){b.modal.show()},b.closeModal=function(){b.modal.hide()},b.$on("$destroy",function(){b.modal.remove()})}]),angular.module("moviesowlApp").controller("SeatsCtrl",["ENV","$scope","$http","$stateParams","showingsDataService","selectedMovieService","$timeout",function(a,b,c,d,e,f,g){function h(){var a=_.find(e.showingsData,function(a){return a.id===parseInt(d.showId)});b.session=a,g(function(){i(a)},1e3)}function i(a){b.seatingPlan=a.seats;var c=b.seatingPlan[0].length;b.seatWidth=100/c}function j(){console.log("Reloading Seats"),c.get(a.apiEndpoint+"showings/"+d.showId).then(function(a){b.seatingPlan=a.data.seats,b.$broadcast("scroll.refreshComplete")},function(){b.$broadcast("scroll.refreshComplete")})}b.doRefresh=j,b.movie=f.selectedMovie,h()}]),angular.module("moviesowlApp").factory("showingsDataService",function(){function a(a){b.showingsData=a}var b={setShowingsData:a,showingsData:[]};return b}),angular.module("moviesowlApp").factory("selectedMovieService",function(){function a(a){console.log("set movie",a),b.selectedMovie=a}var b={setMovie:a,selectedMovie:{}};return b}),angular.module("moviesowlApp").factory("cinemasList",function(){var a=[{id:1,location:"Australia Fair Cinemas"},{id:2,location:"Brisbane City Myer Centre"},{id:3,location:"Browns Plains"},{id:4,location:"Cairns Central"},{id:5,location:"Cairns City"},{id:6,location:"Cairns Earlville"},{id:7,location:"Capalaba"},{id:8,location:"Carindale"},{id:9,location:"Chermside"},{id:10,location:"Coolangatta"},{id:11,location:"Garden City Mt Gravatt"},{id:12,location:"Indooroopilly"},{id:13,location:"Ipswich"},{id:14,location:"Loganholme"},{id:15,location:"Mackay City"},{id:16,location:"Mackay Mount Pleasant"},{id:17,location:"Maroochydore Sunshine Plaza"},{id:18,location:"Moonlight Cinema Brisbane"},{id:19,location:"Morayfield"},{id:20,location:"Noosa Cinemas"},{id:21,location:"Robina"},{id:22,location:"Rockhampton North"},{id:23,location:"Strathpine"},{id:24,location:"Toombul"},{id:25,location:"Toowoomba Grand Central"},{id:26,location:"Toowoomba Strand"},{id:27,location:"Townsville Central"},{id:28,location:"Townsville City"},{id:29,location:"Moonlight Cinema Port Douglas"}],b={cinemas:a};return b});