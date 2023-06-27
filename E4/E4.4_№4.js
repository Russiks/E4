function ElectroApp(name){
    this.voltage = 230;
    this.jack = false
}
ElectroApp.prototype.buttonJack = function(buttonJack) {
    if (buttonJack === 'on') {
        this.jack = true;
    } else {
        this.jack = false;
    }
}
ElectroApp.prototype.energyConsumption = function(time) {
    let сonsumption = this.devicePower * time * 0.01;
    console.log(`${this.name} consumed ${сonsumption} kWh in ${time} hours`);
}
function TV(type, name, amperage, monitorRsolution) {
    this.type = type;
    this.name = name;
    this.amperage = amperage;
    this.monitorRsolution = monitorRsolution;
    this.devicePower = this.voltage * amperage
}
TV.prototype = new ElectroApp()
TV.prototype.getInfo = function() {
    console.log(this.name);
    for (const key in this) {
        if (typeof this[key] !== "function"){
            console.log(`${key}: ${this[key]}`);
        }
    }
}
function Iron(type, name, amperage, temperature) {
    this.type = type;
    this.name = name;
    this.amperage = amperage;
    this.temperature = temperature;
    this.devicePower = this.voltage * amperage
}
Iron.prototype = new ElectroApp()
Iron.prototype.getInfo = function() {
    console.log(this.name);
    for (const key in this) {
        if (typeof this[key] !== "function"){
            console.log(`${key}: ${this[key]}`);
        }
    }
}
const tvSony= new TV('TV','Sony', 0.01, '2048×1080');
const ironScarlet= new Iron('Iron', 'Scarlet', 0.45, 100);

tvSony.buttonJack('on');
tvSony.getInfo();
tvSony.energyConsumption(10);


ironScarlet.buttonJack('on');
ironScarlet.getInfo();
ironScarlet.energyConsumption(10);