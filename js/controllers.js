angular.module('moviesowlApp')

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ChatsCtrl', function ($scope, Chats, autoupdate) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope, autoupdate) {
        $scope.settings = {
            enableFriends: true
        };
    });
