'user strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.sortorder = 'name';
        $scope.mystyle = {color: 'red'};

        $scope.event = {
            name: 'Angular Bootcamp',
            date: '1/1/2008',
            time: '10:30 am',
            location: {
                address: "Google's HQ",
                city: 'Mountain View',
                province: "CA"
            },
            imageUrl: '/img/dragon.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Joe Schmoe',
                    duration: 1,
                    level: 'Advanced',
                    abstract: "I will talk so much about directives, you don't know.",
                    upVoteCount: 0
                },
                {
                    name: 'Do The TimeWarp Again',
                    creatorName: 'Dr. Frankenfurter',
                    duration: 2,
                    level: 'Advanced',
                    abstract: "LET'S DO THE TIME WARP AGAIN.",
                    upVoteCount: 0
                },
                {
                    name: 'Bees!',
                    creatorName: 'Sherlock Holmes',
                    duration: 2,
                    level: 'Intermediate',
                    abstract: "BzzzzZZZzzzzzdeduction.",
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);