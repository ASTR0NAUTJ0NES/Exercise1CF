//JS for calculations

function populateNumArr() {
    var numbers = [document.getElementById("input1").value,
    document.getElementById("input2").value,
    document.getElementById("input3").value,
    document.getElementById("input4").value,
    document.getElementById("input5").value];
    return numbers;
}

function least() {
    var numbers = populateNumArr();

    let leastNumSpan = document.getElementById("leastNumSpan");
    leastNumSpan.innerHTML = "The smallest number is: " + Math.min(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
}

function greatest() {
    var numbers = populateNumArr();

    let greatestNumSpan = document.getElementById("greatestNumSpan");
    greatestNumSpan.innerHTML = "The largest number is: " + Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]);
}

function sum() {
    var numbers = populateNumArr();
    var total = sumHelper(numbers);

    let sumNumSpan = document.getElementById("sumNumSpan");
    sumNumSpan.innerHTML = "The sum of all your numbers is: " + total;
}

function sumHelper(numArr) {
    var total = 0;
    for (let i = 0; i < numArr.length; i++) {
        total += Number(numArr[i]);
    }
    return total;
}

function mean() {
    var numbers = populateNumArr();
    var total = sumHelper(numbers);

    var meanResult = total / numbers.length;
    let meanNumSpan = document.getElementById("meanNumSpan");
    meanNumSpan.innerHTML = "The mean number is: " + meanResult;
}

function product() {
    var numbers = populateNumArr();
    var productResult = productHelper(numbers);

    let productNumSpan = document.getElementById("productNumSpan");
    productNumSpan.innerHTML = "The product of your numbers is: " + productResult;
}

function productHelper(numArr) {
    var product = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        product *= Number(numArr[i]);
    }
    return product;
}
