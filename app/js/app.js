(function () {

    angular.module('sfhApp', ['ngTouch']).controller('sfhController', function ($scope) { //'ngAnimate'

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
                contentTitle: 'Fundraise Effectively',
                contentCaption: 'We have a database of vetted projects waiting for your support',
                contentImg: 'app/resources/img/img1.jpg',
                contentUrl: '#'
            }, {
                contentTitle: 'Collaborate, Don\'t recreate',
                contentCaption: 'Take your resources and skills further by supporting vetted projects',
                contentImg: 'app/resources/img/img2.jpg',
                contentUrl: '#'
            }, {
                contentTitle: 'Development Dilemmas',
                contentCaption: 'Converse about what didn\'t work on Facebook and Twitter',
                contentImg: 'app/resources/img/img3.jpg',
                contentUrl: '#'
            }, {
                contentTitle: 'Development Dilemmas 2',
                contentCaption: 'Converse about what didn\'t work on Facebook and Twitter',
                contentImg: 'app/resources/img/img3.jpg',
                contentUrl: '#'
            }
        ];


    });

})();