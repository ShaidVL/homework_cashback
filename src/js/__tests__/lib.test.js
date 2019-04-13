import {cashback} from "../lib.js";

test('should return cashback with 1%', () => {
    const costs = 3000;
    const promo = 1;
    const expected = 30;

    const result = cashback(promo, costs);

    expect(result).toBe(expected);
})

test('should return cashback with 5%', () => {
    const costs = 3000;
    const promo = 2;
    const expected = 150;

    const result = cashback(promo, costs);

    expect(result).toBe(expected);
})

test('should return cashback with 30%', () => {
    const costs = 3000;
    const promo = 3;
    const expected = 900;

    const result = cashback(promo, costs);

    expect(result).toBe(expected);
})


