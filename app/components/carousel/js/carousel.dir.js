(function () {
    angular.module('sfhApp').directive('carousel', function () {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/carousel/tmpl/carousel.tpl.html',
            scope: {
                config: '='
            },
            link: function (scope, elem, attrs) {
                scope.currentIndex = 0;

                scope.goToTab = function (tabIndex) {
                    scope.currentIndex = tabIndex;
                }

                scope.handleSwipe = function (direction) {
                    if (direction == -1) {
                        //Swipe Right
                        if (scope.currentIndex == 0) {
                            //Go to end of list
                            scope.goToTab(scope.config.length - 1);
                        } else {
                            scope.goToTab(scope.currentIndex + direction);
                        }
                    } else if (direction == 1) {
                        //Swipe Left
                        if (scope.currentIndex == scope.config.length - 1) {
                            //Go to beginning of list
                            scope.goToTab(0);
                        } else {
                            scope.goToTab(scope.currentIndex + direction);
                        }
                    }
                };

                scope.goToIndex = function (index) {
                    scope.currentIndex = index;
                }

                function init() {

                }


                init();
                //Call init from Watch

            }
        };

        return directive;
    });

    //Directive for setting background img
    angular.module('sfhApp').directive('backImg', function () {
        return function (scope, element, attrs) {
            var url = attrs.backImg;
            element.css({
                'background-image': 'url(' + url + ')',
                'background-size': 'cover'
            });
        };
    });

})();