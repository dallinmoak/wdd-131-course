const form = document.querySelector("form");

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData(form);

  const keys = [ "number", "name", "expMonth", "expYear", "code" ];

  let formValues = {};

  for (const key of keys) {
    formValues[key] = formData.get(key);
  }

  console.log(formValues);

  const validationResponse = validateSubmission(formValues);

  if(typeof validationResponse === "string") {
    document.querySelector("#form-error").textContent = `Error: ${validationResponse}`;
    return;
  } else if(validationResponse === true) {
    form.reset();
    document.querySelector("#form-error").textContent = "";
    alert("Payment successful!");
  } 
};

form.addEventListener("submit", handleSubmit);

const isValidCardNumber = number => {
  return number === "1234123412341234";
};

const isValidExpiryDate = (month, year) => {
  const expMonth = Number(month);
  const expYear = Number(year);
  const currentDate = new Date();
  const lastValidMonth = expMonth;
  const lastValidYear = 2000 + expYear;
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if (lastValidYear < currentYear) {
    return "expired - year";
  } else if (lastValidYear === currentYear && lastValidMonth < currentMonth) {
    return "expired - month";
  }
  return true;
}


const validateSubmission = formValues => {
    for (const key in formValues) {
      if (formValues[key] === "") {
        return "missing ${key}";
      }
    }
    const valNum = isValidCardNumber(formValues.number);
    const valExpr = isValidExpiryDate(formValues.expMonth, formValues.expYear);
    if(valNum !== true) {
      return "invalid card number";
    }
    if(valExpr !== true) {
      return valExpr;
    }
    return true;
  }