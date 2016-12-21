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

                scope.rotate = function () {

                }

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
})();