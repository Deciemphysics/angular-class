"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
function getAllHouses() {
    var houses = [
        { address: '1376 N 300 E', rooms: 4, baths: 2, sqft: 2500, available: false, category: enums_1.Category.TwoStory },
        { address: '463 MATC Highway', rooms: 50, baths: 8, sqft: 125000, available: false, category: enums_1.Category.Rambler },
        { address: 'Cardboard box in alleyway', rooms: 1, baths: 0, sqft: 18, available: true, category: enums_1.Category.TwoStory },
        { address: '454 N 343 W', rooms: 3, baths: 2, sqft: 1400, available: true, category: enums_1.Category.Duplex },
        { address: '1337 Bachelor Pad', rooms: 1, baths: 1, sqft: 900, available: true, category: enums_1.Category.Duplex }
    ];
    return houses;
}
function logFirstAvailable(houses) {
    if (houses === void 0) { houses = getAllHouses(); }
    var numberOfHouses = houses.length;
    var firstAvailable = '';
    for (var _i = 0, houses_1 = houses; _i < houses_1.length; _i++) {
        var currentHouse = houses_1[_i];
        if (currentHouse.available) {
            firstAvailable = currentHouse.address;
            break;
        }
    }
    console.log('Total Books: ' + numberOfHouses);
    console.log('First Available: ' + firstAvailable);
}
function getAddressByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Duplex; }
    var allHouses = getAllHouses();
    var filteredAddresses = [];
    for (var _i = 0, allHouses_1 = allHouses; _i < allHouses_1.length; _i++) {
        var currentHouse = allHouses_1[_i];
        if (currentHouse.category === categoryFilter) {
            filteredAddresses.push(currentHouse.address);
        }
    }
    return filteredAddresses;
}
function logHouseAddresses(addresses) {
    for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
        var address = addresses_1[_i];
        console.log(address);
    }
}
//# sourceMappingURL=app.js.map