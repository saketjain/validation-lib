export const ValidateCounterparty = (counterparty) => {
    return new Promise((resolve, reject) => {
        if (counterparty === 'cp1') {
            resolve(true);
        } else {
            resolve(`{${counterparty} is invalid}`);
        }
    });
}

export const ValidateOurparty = (ourparty) => {
    return new Promise((resolve, reject) => {
        if (ourparty === 'op1') {
            resolve(true);
        } else {
            resolve(`${ourparty} is invalid`);
        }
    });
}

export const ValidateTrader = (firstName, lastName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (firstName === 'f1' && lastName === 'l1') {
                resolve(true);
            } else {
                resolve(`${firstName} ${lastName} is invalid`)
            }
        }, 200)
    });
}