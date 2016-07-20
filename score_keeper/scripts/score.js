var result = document.getElementById('result');
var currentValue = parseInt(result.innerHTML);

document.getElementById('add5').addEventListener('click',
    function () {
        currentValue = currentValue + 5;
        result.innerHTML = currentValue;
});

document.getElementById('zero').addEventListener('click',
    function () {
        currentValue = currentValue * 0;
        result.innerHTML = currentValue;
});

document.getElementById('add10').addEventListener('click',
    function () {
        currentValue = currentValue + 10;
        result.innerHTML = currentValue;
});

document.getElementById('sub1').addEventListener('click',
    function () {
        currentValue = currentValue - 1;
        result.innerHTML = currentValue;
});