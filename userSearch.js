var weather = require("weather-js"); 

var userSearch = function (name, location) {
    this.name = name;
    this.location = location;
    this.getWeather = function () {

        weather.find({ search: this.location, degreeType: 'F' }, function (err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        })
    };
    this.date = Date.now();
}

var x = new userSearch("Sam", "Philadelphia");


console.log(x.name);
console.log(x.location);
console.log(x.date);
console.log(x.getWeather)