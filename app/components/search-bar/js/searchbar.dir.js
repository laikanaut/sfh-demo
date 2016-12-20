(function () {

    angular.module('sfhApp').directive('searchBar', function () {

        return directive = {
            restrict: 'AE',
            replace: true,
            scope: {
                ngClick: '&',
                placeholder: '@'
            },
            template: '<div><input class="search-bar-text-in" type="text" ng-model="searchTerms"><button class="search-bar-search" ng-click="ngClick" placeholder="{{placeholder}}"><i class="glyphicon glyphicon-search"></i></button</div>',
            link: function (scope, elem, attrs) {

            }
        };
    });

})();

/*


*/