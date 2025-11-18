function maybeFail() {
    if (Math.random() < 0.2) throw new Error("Process failed due to machine error!");
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try { maybeFail(); console.log("Water boiled."); resolve(); }
            catch (err) { reject(err); }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try { maybeFail(); console.log("Coffee brewed."); resolve(); }
            catch (err) { reject(err); }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try { maybeFail(); console.log("Coffee poured into the cup."); resolve(); }
            catch (err) { reject(err); }
        }, 1200);
    });
}

boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Error:", error.message));
