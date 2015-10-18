angular.module('moviesowlApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/cinemas-page.html',
    "<ion-view><ion-nav-title>Your Cinema</ion-nav-title><!--<ion-nav-buttons side=\"primary\">--><!--<button class=\"button\" ng-click=\"toggleViewMode()\">--><!--<i class=\"icon\"--><!--ng-class=\"{'ion-grid': mode == 'list', 'ion-ios-list-outline': mode == 'grid'}\"></i>--><!--</button>--><!--</ion-nav-buttons>--><!--<ion-nav-buttons side=\"secondary\">--><!--<button class=\"button\" ng-click=\"openModal()\">--><!--Cinemas--><!--</button>--><!--</ion-nav-buttons>--><ion-content><ion-list><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"search\"></label><div class=\"item item-text-wrap\" ng-hide=\"search\"><i class=\"icon ion-information-circled\"></i> Only <strong>Event Cinemas</strong> (plus a few others) are currently supported. Want another cinema? <a href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl needs more cinemas!\" style=\"text-decoration: none;color:#D4435C\"><i class=\"icon ion-email\"></i> Let us know.</a></div><div class=\"item text-center\" ng-hide=\"cinemas.length\"><ion-spinner></ion-spinner></div><label ng-repeat=\"cinema in cinemas | filter:search\" class=\"item item-radio item-icon-right\" ng-click=\"goToMovies(cinema)\"><input type=\"radio\" name=\"group\"><div class=\"item-content\"><span>{{cinema.location}}</span> <span ng-show=\"cinemaLocation === cinema.location\"><i class=\"icon ion-ios-heart icon-accessory\" style=\"color:deeppink; font-size:30px; width:60px\"></i></span> <span ng-hide=\"cinemaLocation === cinema.location\"><i class=\"icon ion-ios-heart-outline icon-accessory\" style=\"font-size: 30px; width:60px\"></i></span></div></label></ion-list><!--&lt;!&ndash; Refresher &ndash;&gt;--><!--<ion-refresher pulling-text=\"Pull to update movies.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\">--><!--</ion-refresher>--><!--&lt;!&ndash; /Refresher &ndash;&gt;--><!--&lt;!&ndash; Update loader &ndash;&gt;--><!--<div class=\"padding\" ng-show=\"hasUpdate\">--><!--<div style=\"height:20px;background-color:white;width:{{progressWidth}}%\"></div>--><!--</div>--><!--<div ng-hide=\"hasNoMovies\">--><!--<div ng-repeat=\"group in groups\">--><!--<ng-include src=\"'templates/movie-group.html'\"></ng-include>--><!--</div>--><!--</div>--><!--<div class=\"item\"--><!--ng-if=\"hasNoMovies\" style=\"text-align: center\">--><!--<h2>No more movies today</h2>--><!--<p style=\"margin-bottom: 10px;\">Come back tomorrow</p>--><!--<img src=\"images/no-movies-owl.png\" alt=\"\" style=\"max-width: 50%\"/>--><!--</div>--><!--<a class=\"item item-icon-right item-text-wrap\" href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl Ideas!\">--><!--Got any <strong>ideas or suggestions</strong>? We'd love to hear them!--><!--<i class=\"icon ion-email icon-accessory\"></i>--><!--</a>--></ion-content></ion-view>"
  );


  $templateCache.put('templates/cinemas.html',
    "<ion-modal-view><ion-header-bar><h1 class=\"title\">Cinemas</h1><button class=\"button button-outline button-dark\" ng-click=\"closeModalOnly()\">Done</button></ion-header-bar><ion-content><ion-list><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"search\"></label><div class=\"item item-text-wrap\" ng-hide=\"search\"><i class=\"icon ion-information-circled\"></i> Only <strong>Event Cinemas</strong> (plus a few others) are currently supported. Want another cinema? <a href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl needs more cinemas!\" style=\"text-decoration: none;color:#D4435C\"><i class=\"icon ion-email\"></i> Let us know.</a></div><div class=\"item text-center\" ng-hide=\"cinemas.length\"><ion-spinner></ion-spinner></div><label ng-repeat=\"cinema in cinemas | filter:search\" class=\"item item-radio item-icon-right\" ng-click=\"closeModal(cinema)\"><input type=\"radio\" name=\"group\"><div class=\"item-content\"><span>{{cinema.location}}</span> <span ng-show=\"cinemaLocation === cinema.location\"><i class=\"icon ion-ios-heart icon-accessory\" style=\"color:deeppink; font-size:30px; width:60px\"></i></span> <span ng-hide=\"cinemaLocation === cinema.location\"><i class=\"icon ion-ios-heart-outline icon-accessory\" style=\"font-size: 30px; width:60px\"></i></span></div></label></ion-list></ion-content></ion-modal-view>"
  );


  $templateCache.put('templates/cities.html',
    "<ion-view><ion-nav-title>Your City</ion-nav-title><ion-content><ion-list><div class=\"item text-center\" ng-hide=\"cities.length\"><ion-spinner></ion-spinner></div><div ng-repeat=\"city in cities\" class=\"item item-icon-right\" ng-click=\"goToCity(city)\"><span>{{city.name}}</span> <i class=\"icon ion-chevron-right icon-accessory\"></i></div></ion-list></ion-content></ion-view>"
  );


  $templateCache.put('templates/movie-group.html',
    "<div class=\"group\" ng-if=\"group.movies.length > 0\"><div class=\"item item-divider {{ group.style }}-bg\" ion-affix data-affix-within-parent-with-class=\"group\" style=\"border: none; color:white; text-align:center\">{{ group.name }}<!--<div class=\"badge badge-light\">2</div>--></div><div ng-repeat=\"row in group.movies\" ng-if=\"mode == 'list'\"><div class=\"item item-dark item-icon-right\" ng-repeat=\"movie in row\" style=\"background-color:#222\" ng-click=\"selectMovie(movie)\"><h2 style=\"color:white\">{{ movie.title }}</h2><p><span am-time-ago=\"{{movie.showings.data[0].start_time}}\" am-preprocess=\"unix\"></span></p><i class=\"icon ion-chevron-right icon-accessory\"></i></div></div><div ng-repeat=\"row in group.movies\" class=\"row\" ng-if=\"mode == 'grid'\"><div class=\"col col-50\" ng-repeat=\"movie in row\" style=\"position:relative\"><div style=\"width:100%; height:100%\" ng-click=\"selectMovie(movie)\"><!-- <a href=\"#/movie/{{movie.id}}\"> --><div style=\"position: relative\"><img ng-src=\"{{ ENV.posterEndpoint}}{{ movie.poster }}\" style=\"width:100%\"><div style=\"position: absolute;bottom:30px;width:100%;text-align:center\"><span am-time-ago=\"{{movie.showings.data[0].start_time}}\" am-preprocess=\"unix\" style=\"background-color: #333;color:#eee;padding:2px 10px;border-radius:100px;\"></span></div></div><div style=\"color: white;text-align:center\"><p style=\"margin-bottom: 0; font-weight:bold\">{{ movie.title }}</p><p style=\"font-size: 12px;color:#aaa\"><img src=\"images/fresh.png\" style=\"width:10px;position:relative; top:0px\" ng-hide=\"movie.tomato_meter < 60\"> <img src=\"images/rotten.png\" style=\"width:10px;position:relative; top:0px\" ng-hide=\"movie.tomato_meter >= 60\"> {{movie.tomato_meter}}%</p></div></div></div></div></div>"
  );


  $templateCache.put('templates/movieDetails.html',
    "<!--  --><ion-modal-view><ion-content><div class=\"pickgradient\"><img src=\"{{ ENV.posterEndpoint }}{{ movie.poster }}\" style=\"width: 100%\"></div><ion-list><ion-item class=\"movieTitleCell\"><button class=\"faux-back button button-clear button-light\" ng-click=\"closeModal()\"><i class=\"icon ion-chevron-left\"></i></button><div style=\"font-size:11px;margin-bottom: 5px\">{{movie.run_time}} Minutes</div><div class=\"item-text-wrap\">{{movie.title}}</div></ion-item><ion-item class=\"ratingCell\" ng-if=\"movie.tomato_meter >= 0\"><div class=\"row\"><div class=\"col rating-left\"><div style=\"color:{{textColour}}\">{{owlRating}}</div><div class=\"rottenTomatoText\">Says The Owl</div></div><div class=\"col rating-right\"><div style=\"font-weight: bold\"><img src=\"{{rottenLogo}}\" style=\"width:16px;position:relative; top:3px\"> {{movie.tomato_meter}}%</div><div class=\"rottenTomatoText\">Rotten Tomatoes</div></div></div></ion-item><div class=\"item container-details item-darker\"><div class=\"item-divider movieDetailsHeading\">Directors</div><div class=\"wrap movieDetails\">{{movie.director}}</div></div><div class=\"item container-details item-darker\"><div class=\"item-divider movieDetailsHeading\">Casts</div><div class=\"wrap movieDetails\">{{movie.cast}}</div></div><div class=\"item container-details item-darker\"><div class=\"item-divider movieDetailsHeading\">Synopsis</div><div class=\"wrap movieDetails\">{{movie.synopsis}}</div></div></ion-list><button class=\"button button-full button-positive\" ng-click=\"closeModal()\">Close</button></ion-content></ion-modal-view>"
  );


  $templateCache.put('templates/movies.html',
    "<ion-view style=\"background-color: #222\"><ion-nav-title>{{cinemaLocation}}</ion-nav-title><ion-nav-buttons side=\"primary\"><button class=\"button\" ng-click=\"toggleViewMode()\"><i class=\"icon\" ng-class=\"{'ion-grid': mode == 'list', 'ion-ios-list-outline': mode == 'grid'}\"></i></button></ion-nav-buttons><ion-nav-buttons side=\"secondary\"><button class=\"button\" ui-sref=\"cities\">Cinemas</button></ion-nav-buttons><ion-content><!-- Refresher --><ion-refresher pulling-text=\"Pull to update movies.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\"></ion-refresher><!-- /Refresher --><!-- Update loader --><div class=\"padding\" ng-show=\"hasUpdate\"><div style=\"height:20px;background-color:white;width:{{progressWidth}}%\"></div></div><div ng-hide=\"hasNoMovies\"><div ng-repeat=\"group in groups\"><ng-include src=\"'templates/movie-group.html'\"></ng-include></div></div><div class=\"item\" ng-if=\"hasNoMovies\" style=\"text-align: center\"><h2>No more movies today</h2><p style=\"margin-bottom: 10px\">Come back tomorrow</p><img src=\"images/no-movies-owl.png\" alt=\"\" style=\"max-width: 50%\"></div><a class=\"item item-icon-right item-text-wrap\" href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl Ideas!\">Got any <strong>ideas or suggestions</strong>? We'd love to hear them! <i class=\"icon ion-email icon-accessory\"></i></a></ion-content><!--<ion-footer-bar align-title=\"left\" class=\"bar-dark item-icon-right\" ng-click=\"showTimesModal()\">--><!--&lt;!&ndash;<div class=\"buttons\">&ndash;&gt;--><!--&lt;!&ndash;<button class=\"button\">Left Button</button>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--<h1 class=\"title\">--><!--<i class=\"ion-android-time\"></i> {{ startingAfter | date:'shortTime'}}--><!--</h1>--><!--<i class=\"icon ion-chevron-right icon-accessory\"></i>--><!--&lt;!&ndash;<div class=\"buttons\" ng-click=\"doSomething()\">&ndash;&gt;--><!--&lt;!&ndash;<button class=\"button\">Right Button</button>&ndash;&gt;--><!--&lt;!&ndash;</div>&ndash;&gt;--><!--</ion-footer-bar>--></ion-view>"
  );


  $templateCache.put('templates/seats.html',
    "<ion-view view-title=\"{{movie.title}}\" style=\"background-color: #222\"><!--<img src=\"{{ movie.poster }}\" class=\"background-image-two\">--><ion-content><ion-refresher pulling-text=\"Pull to update seats view.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\"></ion-refresher><div style=\"text-align: center; font-size:1.2em; color: white\" class=\"padding\">Session Time: {{session.start_time*1000| date:'h:mma' }}</div><div style=\"text-align: center;overflow:auto\" class=\"padding\"><div style=\"margin:20px 5%; padding:1%; background-color:white; color:#333\"><strong class=\"blink_me\">SCREEN</strong></div><div style=\"text-align: center\" ng-hide=\"seatingPlan\"><ion-spinner></ion-spinner></div><div ng-repeat=\"row in seatingPlan track by $index\" style=\"padding-left:1%\"><div ng-repeat=\"seat in row track by $index\" style=\"position:relative;float: left; width:{{seatWidth}}%; padding-bottom:{{seatWidth}}%\"><div ng-show=\"seat === 'available'\" class=\"emptySeat\" style=\"top:10%; bottom:2%; right:10%; left:0\"></div><div ng-show=\"seat === 'taken'\" class=\"filledSeat\" style=\"line-height:100%; top:10% ;bottom:0 ;right:10% ;left:0\"><img src=\"images/seat-taken.png\" style=\"display:block; max-width: 100%\"></div></div></div></div><!--<div class=\"padding\" ng-show=\"seatingPlan\">--><!--<button class=\"button button-block button-positive\" ng-click=\"buyTickets()\">--><!--Buy Tickets--><!--</button>--><!--<button class=\"button button-block button-positive\" ng-click=\"buyTelstraTickets()\">--><!--Buy Telstra Tickets ($11)--><!--</button>--><!--<p style=\"color:white;\">--><!--This is available only to Telstra customers.--><!--</p>--><!--</div>--></ion-content></ion-view>"
  );


  $templateCache.put('templates/showings.html',
    "<ion-view><!--<div class=\"background-image\" style=\"background-image: url({{ ENV.posterEndpoint }}{{ movie.poster }});\">--><!--</div>--><ion-nav-title><div class=\"title\">{{movie.title}}</div></ion-nav-title><ion-content><ion-list><ion-item class=\"item-icon-right item-darker\" ng-click=\"openModal()\"><i class=\"icon ion-star\"></i> Ratings, Trailer, Cast, Synopsis and more <i class=\"icon ion-chevron-right icon-accessory\"></i></ion-item><div class=\"item item-dark item-divider\">Today's Sessions</div><ion-item ng-repeat=\"session in showingsData\" ng-click=\"openSeatView(session.id)\" class=\"item-icon-right item-darker\"><div class=\"row\" style=\"padding: 0\"><div class=\"col col-25\" style=\"padding:0;text-align:left; font-weight:bold\">{{session.start_time*1000| date:'h:mma' }}</div><div class=\"col col-35\" ng-show=\"session.screen_type === 'standard'\" style=\"padding:0\"><span ng-show=\"session.showing_type ==='3D'\" style=\"color:red; font-weight:bold\">3D</span> {{session.cinemaSize}}</div><div class=\"col col-35\" ng-hide=\"session.screen_type === 'standard'\" style=\"padding:0\"><span ng-show=\"session.showing_type ==='3D'\" style=\"color:red; font-weight:bold\">3D</span> <span ng-show=\"session.screen_type ==='gold class'\" style=\"color:rgb(255, 237, 54); font-weight:bold; padding:0\">Gold Class</span> <span ng-show=\"session.screen_type ==='vmax'\" style=\"color:rgb(68, 156, 255); font-weight:bold; padding:0\">VMAX</span></div><div class=\"col col-40\" style=\"text-align:right; padding:0\" ng-show=\"session.fullness.length > 0\">{{session.fullness}}</div><div class=\"col col-40\" style=\"text-align:right; padding:0\" ng-hide=\"session.fullness.length > 0\"><ion-spinner class=\"showing\" icon=\"bubbles\"></ion-spinner></div></div><i class=\"icon ion-chevron-right icon-accessory\" ng-hide=\"session.hasSeats\"></i></ion-item></ion-list><!--</div>--></ion-content></ion-view>"
  );


  $templateCache.put('templates/times.html',
    "<ion-modal-view><ion-header-bar><h1 class=\"title\">Starting After</h1><button class=\"button button-outline button-dark\" ng-click=\"timesModal.hide();\">Done</button></ion-header-bar><ion-content><ion-item ng-repeat=\"time in times\" ng-click=\"setStartingTime(time)\">{{ time | date:'shortTime' }}</ion-item><!--<label ng-repeat=\"cinema in cinemas\" class=\"item item-radio item-icon-right\" ng-click=\"closeModal(cinema)\">--><!--<input type=\"radio\" name=\"group\">--><!--<div class=\"item-content\">--><!--<span>{{cinema.location}}</span>--><!--<span ng-show=\"cinemaLocation === cinema.location\">--><!--<i class=\"icon ion-ios-heart icon-accessory\" style=\"color:deeppink; font-size:30px; width:60px;\"></i> --><!--</span>--><!--<span ng-hide=\"cinemaLocation === cinema.location\">--><!--<i class=\"icon ion-ios-heart-outline icon-accessory\" style=\"font-size: 30px; width:60px;\"></i>--><!--</span>--><!--</div>--><!--</label>--></ion-content></ion-modal-view>"
  );

}]);
