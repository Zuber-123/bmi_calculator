const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give valid height: ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid weight: ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `BMI: ${bmi}. <br> You are underweight.`;
        }
        else {
            if (bmi <= 24.9) {
                results.innerHTML = `BMI: ${bmi}. <br> You are in normal range.`;
            } else {
                results.innerHTML = `BMI: ${bmi}. <br> You are overweight.`;
            }
        }

    }


});