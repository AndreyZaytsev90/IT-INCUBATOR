import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "Moscow",
        houses: [],
        govermentBuildings: [],
        citizensNumber: 12000000
    }
})

test("test city should contains 3 houses", () =>{
    expect(city.houses[0].length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(1);
    expect(city.houses[0].address.street.title).toBe("Lipchanskogo");


})
