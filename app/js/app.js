(function () {

    angular.module('sfhApp', []).controller('sfhController', function ($scope) {

        $scope.testFunction = function (terms) {

            alert("Hala " + terms + "!");

        }


        $scope.socialMediaDetails = [{
                smName: "Facebook",
                smClass: "fa-facebook",
                smUrl: "https://www.facebook.com/Students4HaitiINC"
            }, {
                smName: "Twitter",
                smClass: "fa-twitter",
                smUrl: "http://www.twitter.com/SFHAITIinc"
            }, {
                smName: "LinkedIn",
                smClass: "fa-linkedin",
                smUrl: "http://www.linkedin.com/groups/STUDENTS-HAITI-COMMUNITY-PAGE-4854990?gid=4854990&mostPopular=&trk=tyah&trkInfo=tas%3AStudents%20for%20Haiti%20Com%2Cidx%3A1-1-1"
            }
        ]


        $scope.sampleCarouselContent = [{
                contentTitle: 'Sample 1',
                contentCaption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu erat magna. Sed malesuada vehicula luctus. Aenean eleifend pharetra molestie. Suspendisse potenti. Suspendisse potenti.',
                contentImg: '',
                contentUrl: '#'
            }, {
                contentTitle: 'Sample 2',
                contentCaption: 'Vestibulum tincidunt nulla augue, eu commodo metus efficitur non. Quisque nec semper dolor. Aenean sit amet urna in leo finibus gravida vitae eget eros.',
                contentImg: '',
                contentUrl: '#'
            }, {
                contentTitle: 'Sample 3',
                contentCaption: 'Quisque ornare metus augue, ac convallis urna feugiat ut. Mauris suscipit tellus a augue luctus, vitae porta nisl facilisis. Suspendisse iaculis dapibus erat, ac tempor nisl cursus eu.',
                contentImg: '',
                contentUrl: '#'
            }
        ];


    });

})();