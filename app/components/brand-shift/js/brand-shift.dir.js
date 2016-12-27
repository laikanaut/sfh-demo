(function () {

    angular.module('sfhApp').directive('brandShift', function () {

        var directive = {
            restrict: 'A',
            link: function (scope, elem, attrs) {

                function init() {
                    var visibilityLimit = 250; //Add checking to this
                    var brandTitle = elem.find('.brand-shift-hide');

                    elem.css('position', 'fixed');

                    //Setting Transition for smoother movement

                    //elem.css




                    $(document).on('scroll', function () {

                        //brand-shift-hide
                        var dispOpacity = 0;
                        var scrollLen = $(document).scrollTop();
                        var scrollRatio = 0;
                        var leftShift = 0;

                        if (scrollLen < visibilityLimit) {
                            scrollRatio = scrollLen / visibilityLimit;

                            dispOpacity = 1 - scrollRatio;

                            //Apply visibility
                            brandTitle.css('opacity', dispOpacity);

                            leftShift = (parseInt($(document).width(), 10)) * scrollRatio * 0.5;


                            console.log("Doc Width: " + $(document).width());
                            console.log("Scroll Ratio: " + scrollRatio);
                            console.log("Left Shift: " + leftShift + " px");
                            //Apply Spacing
                            elem.css('left', (leftShift + 'px'));
                        } else {
                            //Do I need this?   
                        }


                        //Apply css visibility

                    });
                }

                init();
            }
        }


        return directive;

    });

})();