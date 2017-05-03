import { House } from "./interfaces";
import { Category } from "./enums";

function getAllHouses(): House[] {
    let houses = [
        {address: '1376 N 300 E', rooms: 4, baths: 2, sqft: 2500, available: false, category: Category.TwoStory},
        {address: '463 MATC Highway', rooms: 50, baths: 8, sqft: 125000, available: false, category: Category.Rambler},
        {address: 'Cardboard box in alleyway', rooms: 1, baths: 0, sqft: 18, available: true, category: Category.TwoStory},
        {address: '454 N 343 W', rooms: 3, baths: 2, sqft: 1400, available: true, category: Category.Duplex},
        {address: '1337 Bachelor Pad', rooms: 1, baths: 1, sqft: 900, available: true, category: Category.Duplex}
    ];
    return houses;
}

function logFirstAvailable(houses = getAllHouses()): void {
    let numberOfHouses: number = houses.length;
    let firstAvailable: string = '';
    for (let currentHouse of houses){
        if(currentHouse.available){
            firstAvailable = currentHouse.address;
            break;
        }
    }
    console.log('Total Books: ' + numberOfHouses);
    console.log('First Available: ' + firstAvailable);
}

function getAddressByCategory(categoryFilter: Category = Category.Duplex): Array<string>{
    const allHouses = getAllHouses();
    const filteredAddresses: string[] = [];

    for(let currentHouse of allHouses) {
        if (currentHouse.category === categoryFilter){
            filteredAddresses.push(currentHouse.address);
        }
    }
    return filteredAddresses;
}

function logHouseAddresses(addresses: string[]): void{
    for (let address of addresses){
        console.log(address);
    }
}