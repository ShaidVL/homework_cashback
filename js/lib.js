export function cashback(promoPurchases, costs) {
    const standartPercent = 0.01;
    const elevatedPercent = 0.05;
    const specialPercent = 0.3;
    let result;

    switch (promoPurchases) {
        case 1:
            result = costs * standartPercent;
            return result;
        case 2:
            result = costs * elevatedPercent;
            return result;
        case 3:
            result = costs * specialPercent;
            return result;
        default:
            result = "invalid special offers";
            return result;
    }
}