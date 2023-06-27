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


function keyCheck(theObject, string) {
    for (let key in theObject) {
        if (theObject.hasOwnProperty(key)) {
            if (key === string) {
                return true;
            } else {
                return false
            }
        }
    }
}

console.log(keyCheck(ownCity, 'homeTown'));
console.log(keyCheck(myCity, 'name'));
