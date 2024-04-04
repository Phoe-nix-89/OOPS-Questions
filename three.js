function Temparature() {
    this.celsius = 0;
    this.Fahrenheit = 32;

    this.setCelsius = function(c) {
        if(typeof(c) === 'number'){
            this.celsius = c;
            this.Fahrenheit = (9/5)*c + 32;
        }
    }
    this.setFahrenheit = function(f) {
        if(typeof(f) === 'number'){
            this.Fahrenheit = f;
            this.celsius = ((f-32)*5)/9;
        }
    }

    this.getCelsius = function() {
        return this.celsius;
    }
    this.getFahrenheit = function() {
        return this.Fahrenheit;
    }
}

const Temp = new Temparature();
console.log(Temp.getCelsius());
console.log(Temp.getFahrenheit());

Temp.setCelsius(25);
console.log(Temp.getCelsius());
console.log(Temp.getFahrenheit());

Temp.setFahrenheit(68);
console.log(Temp.getCelsius());
console.log(Temp.getFahrenheit());