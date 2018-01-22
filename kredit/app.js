document.getElementById('creditForm').addEventListener('submit', function (e) {
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculate, 2000)
    e.preventDefault();
});

function calculate() {

    const creditTotalElement = document.getElementById('creditTotal');
    const interestElement = document.getElementById('interest');
    const yearsElement = document.getElementById('years');
    const monthlyPaymentElement = document.getElementById('monthlyPayment');
    const totalPaymentElement = document.getElementById('totalPayment');
    const totalInterestElement = document.getElementById('totalInterest');

    const principal = parseFloat(creditTotalElement.value);
    const calculatedInterest = parseFloat(interestElement.value) / 100 / 12;
    const calculatedPayments = parseFloat(yearsElement.value) * 12;


    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthlyPayment)) {
        monthlyPaymentElement.value = monthlyPayment.toFixed(2);
        totalPaymentElement.value = (monthlyPayment * calculatedPayments).toFixed(2);
        totalInterestElement.value = (monthlyPayment * calculatedPayments - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError();
    }
}

function showError() {

    let errorDivElement = document.createElement('div');
    errorDivElement.appendChild(document.createTextNode('Input is not correct'));
    errorDivElement.className = "alert alert-danger";


    let cardElement = document.querySelector('.card');
    let headingElement = document.querySelector('.heading');

    cardElement.insertBefore(errorDivElement, headingElement);
    setTimeout(function () {
        errorDivElement.remove();
    }, 3000);

}