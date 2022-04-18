const firstInputEl = document.querySelector('.first_number');
const secondInputEl = document.querySelector('.second_number');
const resultEl = document.querySelector('.result');
const errorEl = document.querySelector('.error');
const resetBtn = document.querySelector('.reset');
const buttonEl = document.querySelector('.click_btn');

buttonEl.addEventListener('click', onBtnClick);
resetBtn.addEventListener('click', clearStrings);

function onBtnClick() {
    const result = getResult();
    showMessage(result);
}

function getResult() {
    const numberOne = getNumberOne();
    const numberTwo = getNumberTwo();

    if (isNumberInvalid(numberOne||numberTwo)) {
        clearStrings();
        showError();
    } else {
        removeEror();
        return Number(numberOne) + Number(numberTwo);
    }
}

function getNumberOne() {
    return firstInputEl.value;    
}

function getNumberTwo() {
    return secondInputEl.value;
}

function isNumberInvalid(value) {
    return isNaN(value) || value === '';
}

function showMessage(result) {
    resultEl.textContent = `${result}`;
}

function clearStrings() {
    firstInputEl.value = '';
    secondInputEl.value = '';
    resultEl.textContent = '';
    removeEror();
}

function showError() {
    errorEl.classList.add('show');
}

function removeEror() {
    errorEl.classList.remove('show');
}