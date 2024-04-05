const returnFirstTwoDrivers = function(arr) {
    return [...arr].splice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
    return [...arr].slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (int) {
    const multiply = multiplier => int * multiplier;
    return multiply;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunc) {
    return driverFunc(drivers);
}
