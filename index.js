requirejs([
    'node_modules/satellite.js/dist/satellite'
], function(satellite) {
    var tleLine1 = '1 25544U 98067A   13149.87225694  .00009369  00000-0  16828-3 0  9031',
        tleLine2 = '2 25544 051.6485 199.1576 0010128 012.7275 352.5669 15.50581403831869';

    // Initialize a satellite record
    var satrec = satellite.twoline2satrec(tleLine1, tleLine2);

    // Propagate satellite using time since epoch (in minutes)
    var positionAndVelocity = satellite.sgp4(satrec, 0);

    console.log(positionAndVelocity);
});
