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


    });

})();