angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("templates/chat-detail.html","<!--\n  This template loads for the \'tab.friend-detail\' state (app.js)\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n  The FriendsCtrl pulls data from the Friends service (service.js)\n  The Friends service returns an array of friend data\n-->\n<ion-view view-title=\"{{chat.name}}\">\n  <ion-content class=\"padding\">\n    <img ng-src=\"{{chat.face}}\" style=\"width: 64px; height: 64px\">\n    <p>\n      {{chat.lastText}}\n    </p>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("templates/cinemas-page.html","<ion-view>\n    <ion-nav-title>\n        Your Cinema\n    </ion-nav-title>\n    <!--<ion-nav-buttons side=\"primary\">-->\n        <!--<button class=\"button\" ng-click=\"toggleViewMode()\">-->\n            <!--<i class=\"icon\"-->\n               <!--ng-class=\"{\'ion-grid\': mode == \'list\', \'ion-ios-list-outline\': mode == \'grid\'}\"></i>-->\n        <!--</button>-->\n    <!--</ion-nav-buttons>-->\n    <!--<ion-nav-buttons side=\"secondary\">-->\n        <!--<button class=\"button\" ng-click=\"openModal()\">-->\n            <!--Cinemas-->\n        <!--</button>-->\n    <!--</ion-nav-buttons>-->\n    <ion-content>\n        <ion-list>\n            <label class=\"item item-input\">\n                <i class=\"icon ion-search placeholder-icon\"></i>\n                <input type=\"text\" placeholder=\"Search\" ng-model=\"search\">\n            </label>\n            <div class=\"item item-text-wrap\" ng-hide=\"search\">\n                <i class=\"icon ion-information-circled\"></i> Only <strong>Event Cinemas</strong> (plus a few others)\n                are currently supported.\n                Want another cinema?\n                <a href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl needs more cinemas!\" style=\"text-decoration: none;color:#D4435C;\"><i class=\"icon ion-email\"></i> Let us know.</a>\n            </div>\n            <div class=\"item text-center\" ng-hide=\"cinemas.length\">\n                <ion-spinner></ion-spinner>\n            </div>\n            <label ng-repeat=\"cinema in cinemas | filter:search\" class=\"item item-radio item-icon-right\" ng-click=\"goToMovies(cinema)\">\n                <input type=\"radio\" name=\"group\">\n                <div class=\"item-content\">\n                    <span>{{cinema.location}}</span>\n                    <span ng-show=\"cinemaLocation === cinema.location\">\n                        <i class=\"icon ion-ios-heart icon-accessory\" style=\"color:deeppink; font-size:30px; width:60px;\"></i>\n                    </span>\n                    <span ng-hide=\"cinemaLocation === cinema.location\">\n                    <i class=\"icon ion-ios-heart-outline icon-accessory\" style=\"font-size: 30px; width:60px;\"></i>\n                    </span>\n                </div>\n            </label>\n        </ion-list>\n        <!--&lt;!&ndash; Refresher &ndash;&gt;-->\n        <!--<ion-refresher pulling-text=\"Pull to update movies.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\">-->\n        <!--</ion-refresher>-->\n        <!--&lt;!&ndash; /Refresher &ndash;&gt;-->\n\n        <!--&lt;!&ndash; Update loader &ndash;&gt;-->\n        <!--<div class=\"padding\" ng-show=\"hasUpdate\">-->\n            <!--<div style=\"height:20px;background-color:white;width:{{progressWidth}}%\"></div>-->\n        <!--</div>-->\n\n\n        <!--<div ng-hide=\"hasNoMovies\">-->\n            <!--<div ng-repeat=\"group in groups\">-->\n                <!--<ng-include src=\"\'templates/movie-group.html\'\"></ng-include>-->\n            <!--</div>-->\n        <!--</div>-->\n        <!--<div class=\"item\"-->\n             <!--ng-if=\"hasNoMovies\" style=\"text-align: center\">-->\n            <!--<h2>No more movies today</h2>-->\n\n            <!--<p style=\"margin-bottom: 10px;\">Come back tomorrow</p>-->\n            <!--<img src=\"images/no-movies-owl.png\" alt=\"\" style=\"max-width: 50%\"/>-->\n        <!--</div>-->\n        <!--<a class=\"item item-icon-right item-text-wrap\" href=\"mailto:cmcnamara87@gmail.com?subject=MoviesOwl Ideas!\">-->\n            <!--Got any <strong>ideas or suggestions</strong>? We\'d love to hear them!-->\n            <!--<i class=\"icon ion-email icon-accessory\"></i>-->\n        <!--</a>-->\n    </ion-content>\n</ion-view>\n");
$templateCache.put("templates/cities.html","<ion-view>\n    <ion-nav-title>\n        Your City\n    </ion-nav-title>\n    <ion-content>\n        <ion-list>\n            <div class=\"item text-center\" ng-hide=\"cities.length\">\n                <ion-spinner></ion-spinner>\n            </div>\n            <div ng-repeat=\"city in cities\" class=\"item item-icon-right\" ng-click=\"goToCity(city)\">\n                <span>{{city.name}}</span>\n                <i class=\"icon ion-chevron-right icon-accessory\"></i>\n            </div>\n        </ion-list>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("templates/movieDetails.html","<!--  -->\n<ion-modal-view>\n    <ion-content>\n        <div class=\"pickgradient\">\n            <img src=\"{{ ENV.posterEndpoint }}{{ movie.poster }}\" style=\"width: 100%;\">\n        </div>\n        <ion-list>\n            <ion-item class=\"movieTitleCell\">\n                <button class=\"faux-back button button-clear button-light\" ng-click=\"closeModal()\">\n                    <i class=\"icon ion-chevron-left\"></i>\n                </button>\n                <div style=\"font-size:11px;margin-bottom: 5px;\">\n                    {{movie.run_time}} Minutes\n                </div>\n                <div class=\"item-text-wrap\">\n                    {{movie.title}}\n                </div>\n            </ion-item>\n            <ion-item class=\"ratingCell\" ng-if=\"movie.tomato_meter >= 0\">\n                <div class=\"row\">\n                    <div class=\"col rating-left\">\n                        <div style=\"color:{{textColour}};\">{{owlRating}}</div>\n                        <div class=\"rottenTomatoText\"> Says The Owl</div>\n                    </div>\n                    <div class=\"col rating-right\">\n                        <div style=\"font-weight: bold;\">\n                            <img src=\"{{rottenLogo}}\" style=\"width:16px;position:relative; top:3px;\">\n                            {{movie.tomato_meter}}%\n                        </div>\n                        <div class=\"rottenTomatoText\">\n                            Rotten Tomatoes\n                        </div>\n                    </div>\n                </div>\n\n            </ion-item>\n            <div class=\"item container-details item-darker \">\n                <div class=\"item-divider movieDetailsHeading\">\n                    Directors\n                </div>\n                <div class=\"wrap movieDetails\">\n                    {{movie.director}}\n                </div>\n            </div>\n            <div class=\"item container-details item-darker\">\n                <div class=\"item-divider movieDetailsHeading\">\n                    Casts\n                </div>\n                <div class=\"wrap movieDetails\">\n                    {{movie.cast}}\n                </div>\n            </div>\n            <div class=\"item container-details item-darker\">\n                <div class=\"item-divider movieDetailsHeading\">\n                    Synopsis\n                </div>\n                <div class=\"wrap movieDetails\">\n                    {{movie.synopsis}}\n                </div>\n            </div>\n        </ion-list>\n        <button class=\"button button-full button-positive\" ng-click=\"closeModal()\">Close</button>\n    </ion-content>\n</ion-modal-view>\n");
$templateCache.put("templates/seats.html","<ion-view view-title=\"{{movie.title}}\">\n    <!--<img src=\"{{ movie.poster }}\" class=\"background-image-two\">-->\n    <ion-content>\n        <ion-refresher pulling-text=\"Pull to update seats view.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\">\n        </ion-refresher>\n        <div style=\"text-align: center; font-size:1.2em; color: white;\" class=\"padding\">\n            Session Time: {{session.start_time*1000| date:\'h:mma\' }}\n        </div>\n        <div style=\"text-align: center;overflow:auto;\" class=\"padding\">\n            <div style=\"margin:20px 5%; padding:1%; background-color:white; color:#333;\">\n                <strong class=\"blink_me\">SCREEN</strong>\n            </div>\n            <div style=\"text-align: center\" ng-hide=\"seatingPlan\">\n                <ion-spinner></ion-spinner>\n            </div>\n\n            <div ng-repeat=\"row in seatingPlan track by $index\" style=\"padding-left:1%\">\n                <div ng-repeat=\"seat in row track by $index\" style=\"position:relative;float: left; width:{{seatWidth}}%; padding-bottom:{{seatWidth}}%;\">\n                    <div ng-show=\"seat === \'available\'\" class=\"emptySeat\" style=\"top:10%; bottom:2%; right:10%; left:0;\"></div>\n                    <div ng-show=\"seat === \'taken\'\" class=\"filledSeat\" style=\"line-height:100%; top:10% ;bottom:0 ;right:10% ;left:0; \">\n                        <img src=\"img/seat-taken.png\" style=\"display:block; max-width: 100%;\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"padding\" ng-show=\"seatingPlan\">\n            <button class=\"button button-block button-positive\"\n               ng-click=\"buyTickets()\">\n                Buy Tickets\n            </button>\n            <button class=\"button button-block button-positive\"\n               ng-click=\"buyTelstraTickets()\">\n                Buy Telstra Tickets ($11)\n            </button>\n            <p style=\"color:white;text-align: center\">\n                This is available only to Telstra customers.\n            </p>\n        </div>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("templates/showings.html","<ion-view>\n    <!--<div class=\"background-image\" style=\"background-image: url({{ ENV.posterEndpoint }}{{ movie.poster }});\">-->\n    <!--</div>-->\n    <ion-nav-title>\n        <div class=\"title\">\n            {{movie.title}}\n        </div>\n    </ion-nav-title>\n\n    <ion-content>\n        <ion-list>\n            <!--<ion-item class=\"item-darker\" style=\"padding:0;\">-->\n                <!--<img ng-src=\"{{ ENV.posterEndpoint }}{{ movie.poster }}\" alt=\"\"-->\n                     <!--style=\"width:100%;\"/>-->\n            <!--</ion-item>-->\n            <ion-item ng-if=\"movie.tomato_meter >= 0\"\n                      style=\"text-align: center\">\n                <div class=\"row\" style=\"padding:0\">\n                    <div class=\"col rating-left\" style=\"padding:0\">\n                        <div style=\"color:{{textColour}};font-weight:bold;\">{{owlRating}}</div>\n                        <div style=\"text-transform: uppercase;font-size:10px;\"> Says The Owl</div>\n                    </div>\n                    <div class=\"col rating-right\" style=\"padding:0\">\n                        <div style=\"font-weight: bold;\">\n                            <img src=\"{{rottenLogo}}\" style=\"width:16px;position:relative; top:3px;\">\n                            {{movie.tomato_meter}}%\n                        </div>\n                        <div style=\"text-transform: uppercase;font-size:10px;\">\n                            Rotten Tomatoes\n                        </div>\n                    </div>\n                </div>\n\n            </ion-item>\n\n            <!--<ion-item class=\"item-icon-right item-darker\" ng-click=\"openModal()\">-->\n                <!--Ratings, Trailer, Cast, Synopsis and more-->\n                <!--<i class=\"icon ion-chevron-right icon-accessory\"></i>-->\n            <!--</ion-item>-->\n\n            <div class=\"item item-dark item-divider\">\n                Today\'s Sessions\n            </div>\n\n            <ion-item ng-repeat=\"session in showingsData\" ng-click=\"openSeatView(session.id)\"\n                      class=\"item-icon-right item-darker\">\n\n\n                <div class=\"row\" style=\"padding: 0;\">\n                    <div class=\"col col-25\" style=\"padding:0;text-align:left; font-weight:bold;\">\n                        {{session.start_time*1000| date:\'h:mma\' }}\n                    </div>\n                    <div class=\"col col-35\" ng-show=\"session.screen_type === \'standard\'\" style=\"padding:0;\">\n                            <span ng-show=\"session.showing_type ===\'3D\'\" style=\"color:red; font-weight:bold;\">\n                            3D\n                        </span> {{session.cinemaSize}}\n                    </div>\n                    <div class=\"col col-35\" ng-hide=\"session.screen_type === \'standard\'\" style=\"padding:0;\">\n                            <span ng-show=\"session.showing_type ===\'3D\'\" style=\"color:red; font-weight:bold;\">\n                            3D\n                        </span>\n                            <span ng-show=\"session.screen_type ===\'gold class\'\"\n                                  style=\"color:rgb(255, 237, 54); font-weight:bold; padding:0;\">\n                            Gold Class\n                        </span>\n                            <span ng-show=\"session.screen_type ===\'vmax\'\"\n                                  style=\"color:rgb(68, 156, 255); font-weight:bold; padding:0;\">\n                            VMAX\n                        </span>\n                    </div>\n                    <div class=\"col col-40\" style=\"text-align:right; padding:0;\" ng-show=\"session.fullness.length > 0\">\n                        {{session.fullness}}\n                    </div>\n                    <div class=\"col col-40\" style=\"text-align:right; padding:0;\" ng-hide=\"session.fullness.length > 0\">\n                        <ion-spinner class=\"showing\" icon=\"bubbles\"></ion-spinner>\n                    </div>\n                </div>\n\n                <i class=\"icon ion-chevron-right icon-accessory\" ng-hide=\"session.hasSeats\"></i>\n            </ion-item>\n        </ion-list>\n        <!--</div>-->\n    </ion-content>\n</ion-view>\n");
$templateCache.put("templates/tab-account.html","<ion-view view-title=\"Account\">\n    <ion-content>\n        <ion-list>\n            <a class=\"item item-icon-right\" ui-sref=\"cities\">\n                <h2>\n                    {{ cinemaLocation }}\n                </h2>\n                <p>\n                    Your Cinema\n                </p>\n                <i class=\"icon ion-chevron-right icon-accessory\"></i>\n            </a>\n            <a class=\"item\" ng-click=\"autoupdate.check()\">\n                <h2>\n                    {{ autoupdate.state }}\n                </h2>\n                <p>\n                    App Status\n                </p>\n            </a>\n            <div class=\"item\">\n                <h2>\n                    {{ deviceName }}\n                </h2>\n                <p>\n                    Device Name\n                </p>\n            </div>\n            <a class=\"item item-icon-right item-text-wrap\" href=\"mailto:cmcnamara87+moviesowl@gmail.com?subject=MoviesOwl Ideas!\">\n                Got any <strong>ideas or suggestions</strong>? We\'d love to hear them!\n                <i class=\"icon ion-email icon-accessory\"></i>\n            </a>\n        </ion-list>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("templates/tab-chats.html","<ion-view view-title=\"News\">\n    <ion-content>\n        <ion-list>\n            <div class=\"item\">\n                <h2>Event Cinema Tickets (21/12/15)</h2>\n                <p>\n                    You can now purchase tickets for Event Cinemas from within the app (including Telstra Tickets).\n                </p>\n            </div>\n            <div class=\"item\">\n                <h2>Event Cinema Tickets (21/12/15)</h2>\n                <p>\n                    You can now purchase tickets for Event Cinemas from within the app (including Telstra Tickets).\n                </p>\n            </div>\n        </ion-list>\n    </ion-content>\n</ion-view>");
$templateCache.put("templates/tab-movies.html","<ion-view>\n    <ion-nav-title>\n        {{cinemaLocation}}\n    </ion-nav-title>\n    <ion-nav-buttons side=\"primary\">\n        <button class=\"button\" ng-click=\"toggleViewMode()\">\n            <i class=\"icon\"\n               ng-class=\"{\'ion-grid\': mode == \'list\', \'ion-ios-list-outline\': mode == \'grid\'}\"></i>\n        </button>\n    </ion-nav-buttons>\n    <ion-nav-buttons side=\"secondary\">\n        <button class=\"button\" ui-sref=\"cities\">\n            Cinemas\n        </button>\n    </ion-nav-buttons>\n    <ion-content overflow-scroll=\"false\">\n        <!-- Refresher -->\n        <ion-refresher pulling-text=\"Pull to update movies.\" on-refresh=\"doRefresh()\" spinner=\"bubbles\">\n        </ion-refresher>\n        <!-- /Refresher -->\n\n        <div ng-hide=\"hasNoMovies\">\n            <div ng-repeat=\"group in groups\">\n                <ng-include src=\"\'templates/includes/movie-group.html\'\"></ng-include>\n            </div>\n        </div>\n        <div class=\"item\"\n             ng-if=\"hasNoMovies\" style=\"text-align: center\">\n            <h2>No more movies today</h2>\n\n            <p style=\"margin-bottom: 10px;\">Come back tomorrow</p>\n            <img src=\"img/no-movies-owl.png\" alt=\"\" style=\"max-width: 50%\"/>\n        </div>\n    </ion-content>\n</ion-view>\n\n");
$templateCache.put("templates/tab-news.html","<ion-view view-title=\"News\">\n    <ion-content>\n        <ion-list>\n            <div class=\"item item-text-wrap\">\n                <h2>App News (6/1/16)</h2>\n                <p>\n                    You can now buy tickets directly from within the app at select cinemas.\n                </p>\n            </div>\n            <div class=\"item item-text-wrap\">\n                <h2>App News (21/12/15)</h2>\n                <p>\n                    You can now find out all the news about the MoviesOwl app here.\n                </p>\n            </div>\n        </ion-list>\n    </ion-content>\n</ion-view>");
$templateCache.put("templates/tabs.html","<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n-->\n<ion-tabs class=\"tabs-icon-top tabs-dark\">\n\n    <!-- Dashboard Tab -->\n    <ion-tab title=\"My Cinema\" icon-off=\"ion-ios-film-outline\" icon-on=\"ion-ios-film\" href=\"#/tab/movies\">\n        <ion-nav-view name=\"tab-movies\"></ion-nav-view>\n    </ion-tab>\n\n    <!-- Chats Tab -->\n    <ion-tab title=\"App News\" icon-off=\"ion-ios-paper-outline\" icon-on=\"ion-ios-paper\" href=\"#/tab/news\">\n        <ion-nav-view name=\"tab-news\"></ion-nav-view>\n    </ion-tab>\n\n    <!-- Account Tab -->\n    <ion-tab title=\"Account\" icon-off=\"ion-ios-gear-outline\" icon-on=\"ion-ios-gear\" href=\"#/tab/account\">\n        <ion-nav-view name=\"tab-account\"></ion-nav-view>\n    </ion-tab>\n\n\n</ion-tabs>\n");
$templateCache.put("templates/includes/movie-group.html","<div class=\"group\" ng-if=\"group.movies.length > 0\">\n    <div class=\"item item-divider {{ group.style }}\" ion-affix data-affix-within-parent-with-class=\"group\"\n         style=\"border: none; color:white; text-align:center;\">\n        {{ group.name }}\n    </div>\n\n    <div ng-repeat=\"row in group.movies\" ng-if=\"mode == \'list\'\">\n        <div class=\"item item-icon-right item-text-wrap\" ng-repeat=\"movie in row\"\n             ng-click=\"selectMovie(movie)\">\n            <h2>{{ movie.title }}\n                <span style=\"font-size: 12px;color:#aaa\">\n                    <img src=\"img/fresh.png\" style=\"width:10px;position:relative; top:0px;\"\n                         ng-hide=\"movie.tomato_meter < 60\">\n                    <img src=\"img/rotten.png\" style=\"width:10px;position:relative; top:0px;\"\n                         ng-hide=\"movie.tomato_meter >= 60\">\n                    {{movie.tomato_meter}}%\n                </span>\n                <span style=\"font-size: 12px; color: yellow\" ng-show=\"movie.new\">New!</span>\n            </h2>\n            <p>\n                <span ng-repeat=\"showing in movie.showings.data\"\n                      class=\"small-session-time\"\n                      ng-class=\"{\'soon\': isStartingSoon(showing.start_time)}\">\n                    {{ showing.start_time * 1000 | date:\'shortTime\'}}\n                </span>\n            </p>\n            <i class=\"icon ion-chevron-right icon-accessory\"></i>\n        </div>\n    </div>\n\n    <div ng-repeat=\"row in group.movies\" class=\"row\" ng-if=\"mode == \'grid\'\">\n\n        <div class=\"col col-50\" ng-repeat=\"movie in row\" style=\"position:relative;\">\n            <div style=\"width:100%; height:100%\" ng-click=\"selectMovie(movie)\">\n\n                <div style=\"position: relative\">\n                    <img ng-src=\"{{ ENV.posterEndpoint }}{{ movie.poster }}\" style=\"width:100%;\">\n\n                    <div style=\"position: absolute;bottom:30px;width:100%;text-align:center\">\n                    <span am-time-ago=\"{{movie.showings.data[0].start_time}}\"\n                          am-preprocess=\"unix\"\n                          class=\"time-human\"\n                          ng-class=\"{\'soon\': isStartingSoon(movie.showings.data[0].start_time)}\">\n                    </span>\n                    </div>\n                </div>\n\n                <div style=\"color: white;text-align:center\">\n                    <p style=\"margin-bottom: 0; font-weight:bold;\">\n                        {{ movie.title }} <span style=\"font-size: 12px; color: yellow\" ng-show=\"movie.new\">New!</span>\n                    </p>\n                    <p style=\"font-size: 12px;color:#aaa\">\n                        <img src=\"img/fresh.png\" style=\"width:10px;position:relative; top:0px;\"\n                             ng-hide=\"movie.tomato_meter < 60\">\n                        <img src=\"img/rotten.png\" style=\"width:10px;position:relative; top:0px;\"\n                                ng-hide=\"movie.tomato_meter >= 60\">\n                        {{movie.tomato_meter}}%\n                    </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");}]);