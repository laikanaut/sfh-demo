(function () {

    angular.module('sfhApp').directive('searchBar', function () {

        return directive = {
            restrict: 'AE',
            replace: true,
            scope: {
                searchFunction: '&',
                placeholder: '@'
            },
            template: '<div class="searchbar-container"><input class="search-bar-text-in" type="text" ng-model="searchTerms"  placeholder="{{placeholder}}"><button class="search-bar-search" ng-click="searchFunction({terms : searchTerms})"><i class="fa fa-search" aria-hidden="true"></i></button</div>',
            link: function (scope, elem, attrs) {

            }
        };
    });

})();

/*


*/