'use strict';

eventsApp.filter('durations', function() {
    return function(duration) {
        switch(duration) {
            case 1:
                return "11 Hours";
            case 2:
                return "1 Hour";
        }
    }
})