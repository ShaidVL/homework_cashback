export function cashback(promoPurchases, costs) {
    const firstPercent = 0.01;
    const secondPercent = 0.05;
    const thirdPercent = 0.3;
    let result;

    switch (promoPurchases) {
        case 1:
            result = costs * firstPercent;
            break;
        case 2:
            result = costs * secondPercent;
            break;
        case 3:
            result = costs * thirdPercent;
            break;
        default:
            result = "invalid special offers";
            break;
    }
    return result;
}