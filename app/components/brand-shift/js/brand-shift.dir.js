(function () {

    angular.module('sfhApp').directive('brandShift', function () {

        var directive = {
            restrict: 'A',
            link: function (scope, elem, attrs) {

                function init() {
                    var visibilityLimit = 250; //Add checking to this
                    var brandTitle = elem.find('.brand-shift-hide');
                    
                    
                    
                    //Setting CSS Props
                    elem.css({'position': 'fixed',
                              'transition':'left 0.35s ease-in 0s',
                            'left':'8px'});
                    
                    brandTitle.css({'transition':'opacity 0.35s ease-in 0s'});


                    $(document).on('scroll', function () {

                        //brand-shift-hide
                        var dispOpacity = 0;
                        var scrollLen = $(document).scrollTop();
                        var docWidth = $(document).width();
                        
                        console.log(scrollLen);
                        
                        if(scrollLen > 0) {
                            elem.css('left',(docWidth/2)-21);
                            brandTitle.css('display','none');
                        } else {
                            elem.css('left','8px');
                            brandTitle.css('display','inline');
                        }
                        
                    });
                }

                init();
            }
        }


        return directive;

    });

})();