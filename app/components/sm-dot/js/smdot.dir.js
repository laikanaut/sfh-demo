(function () {

    angular.module("sfhApp").directive('smDot', function () {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                config: '='
            },
            template: "<a class='sm-dot-container' ng-href='{{config.smUrl}}' target='_blank'><i class='fa' ng-class='config.smClass' aria-hidden='true'></i></a>"


        };

        return directive;
    });
})();