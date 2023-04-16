export const largeItemOnDesktop = (gameCount: number, start = 1) => {
    let largeItems = [start];
    let rules = [3, 12, 3, 6];
    let largePostion = start;

    while (largePostion <= gameCount) {
        for (let i = 0; i < rules.length; i++) {
            largePostion = largePostion + rules[i];
            if (largePostion > gameCount) {
                break;
            }
            largeItems.push(largePostion);
        }
    }

    return largeItems;
}

export const largeItemOnMobile = (gameCount: number, start = 2) => {
    let largeItems = [start];
    let rules = [8, 7];
    let largePostion = start;

    while (largePostion <= gameCount) {
        for (let i = 0; i < rules.length; i++) {
            largePostion = largePostion + rules[i];
            if (largePostion > gameCount) {
                break;
            }
            largeItems.push(largePostion);
        }
    }

    return largeItems;
}

export const LineNumberOnDesktop = (gameCount: number) => {
    // TODO: Need to optimize the logic better
    const ITEM_TWO_LINE = 12
    const floor = Math.floor(gameCount / ITEM_TWO_LINE)
    const tail = gameCount - (floor * ITEM_TWO_LINE)
    const moreLine = tail === 0 ? 0 : 1

    return (floor * 2) + moreLine
}

export const LineNumberOnMobile = (gameCount: number) => {
    // TODO: Need to optimize the logic better
    const ITEM_SEVEN_LINE = 15
    const floor = Math.floor(gameCount / ITEM_SEVEN_LINE)
    const tail = gameCount - (floor * ITEM_SEVEN_LINE)
    const moreLine = tail == 0 ? 0 : 1

    return (floor * 7) + moreLine
}

export const getFirstSectionRowNumberDesktop = (gameCount: number) => {
    // TODO: Need to optimize the logic better
    if (gameCount == 0) return 1
    if (gameCount <= 10) return 2
    if (gameCount <= 13) return 3

    return 4
}

export const getFirstSectionRowNumberMobile = (gameCount: number) => {
    // TODO: Need to optimize the logic better
    if (gameCount <= 1) return 1
    if (gameCount <= 4) return 2
    if (gameCount <= 7) return 4

    return 5
}