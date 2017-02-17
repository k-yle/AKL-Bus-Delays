const route = 813; //change this to use different route.


var routeData = require('./database')[route],
    stopsManifest = require('./stopsManifest'),

    stops = routeData.delay_times.stop_id,
    csv = [ [ 'Stop #', 'Stop Name', 'Avg Delay @ Arrival', 'Avg Delay @ Departure' ] ];
for (var stop in stops) {
    csv.push([stop, stopsManifest[stopsManifest[stop].parent_station].stop_name ].concat([ stops[stop].arrivals.average_delay, stops[stop].departures.average_delay ]).join(','));
}
require('fs').writeFileSync('./out.csv', csv.join('\r\n'));