window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      update();
    });
  }
});

const getCurrentUIValues = () => {
  return {
    AMOUNT: +(document.getElementById("loan-amount").value),
    YEARS: +(document.getElementById("loan-years").value),
    RATE: +(document.getElementById("loan-rate").value),
  }
}


const setupIntialValues = () => {
  // Put some default values in the inputs
  const Values = { AMOUNT: 5000, YEARS: 5, RATE: 5.5 };

  // Get the inputs from the DOM.
  const amount = document.getElementById("loan-amount");
  amount.value = Values.AMOUNT;

  const years = document.getElementById("loan-years");
  years.value = Values.YEARS;

  const rate = document.getElementById("loan-rate");
  rate.value = Values.RATE;

  // Call a function to calculate the current monthly payment
  update();
}


const update = () => {
  // Get the current values from the UI
  const currentValue = getCurrentUIValues();

  // Update the monthly payment
  updateMonthly( calculateMonthlyPayment( currentValue ) );
}


const calculateMonthlyPayment = (values) => {
  // Given an object of values (a value has amount, years and rate ),
  const monthlyRate = ( values.RATE / 100 ) / 12;

  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  const num = Math.floor( values.YEARS * 12 );

  return (
    ( monthlyRate * values.AMOUNT ) / ( 1 - Math.pow((1 + monthlyRate), -num) )
  ).toFixed( 2 );
}


const updateMonthly = (month) => {
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  const monthly = document.getElementById("monthly-payment");
  monthly.innerText = "$" + month;
}
