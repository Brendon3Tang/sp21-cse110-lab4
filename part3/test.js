function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    var x = Number(num1);
    let num2 = document.getElementById("num2").value;
    var y = Number(num2);
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(x, y);
}

function calculateSum(num1, num2) {
    let result = num1 + num2
    return result
}