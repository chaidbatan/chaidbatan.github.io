const victor = {
    height: 1.8,
    weight: 60,
    bmi: function() {
        console.log(this.weight / (this.height * this.height));
    }
};

victor.bmi();

const john = {
    height: 1.9,
    weight: 63,
    bmi: function() {
        console.log(this.weight / (this.height * this.height));
    }
};

function bmiBoolean() {
    if (victor.bmi > john.bmi) {
        return true; 
    }
    else return false;
}
console.log("Is Victor's BMI higher than John's? " + bmiBoolean());
