class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = 'https://api.exchangeratesapi.io/latest?base=';
        this.amount = null;
    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(({ rates }) => {
                    const parity = rates[this.secondCurrency];
                    const amountNumber = Number(this.amount);
                    let total = parity * amountNumber;
                    resolve(total);
                })
                .catch(err => reject(err));
        });
    }

    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }
}