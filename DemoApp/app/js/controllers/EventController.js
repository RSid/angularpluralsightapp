'user strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Bootcamp',
            date: '1/1/2008',
            time: '10:30 am',
            location: {
                address: "Google's HQ",
                city: 'Mountain View',
                province: "CA"
            },
            imageUrl: '/img/such_fancy_doge.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass'
                },
                {
                    name: 'Do The TimeWarp Again'
                },
                {
                    name: 'Bees!'
                }
            ]
        }
    }
);