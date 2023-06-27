let myCity = new Object();

myCity.currentCity = 'Moscow';
myCity.since = 2018;
myCity.fromСity = 'Volgograd';


const ownCity = Object.create(myCity);

ownCity.homeTown = 'Volgograd';
ownCity.before = 2018;


let userProfile = new Object();

userProfile.name = 'Ruslan';
userProfile.institute = 'SkillFactory';
userProfile.studyingWith = 2022;


function outputKeyValue(keyObject) {
    for (let key in keyObject) {
        if (keyObject.hasOwnProperty(key)) {
            value = keyObject[key];
            console.log(`${key}: ${value}`)
        }   
    }
}

outputKeyValue(myCity);
outputKeyValue(userProfile);
