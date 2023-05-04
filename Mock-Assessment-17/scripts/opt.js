let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let one = form.one.value;
  let two = form.two.value;
  let three = form.three.value;
  let four = form.four.value;

  let otpVal = one + "" + two + "" + three + "" + four;

  if (otpVal == "1234") {
    alert("Success");
  } else {
    alert("Wrong OTP");
  }
});

function handleOTP(first, last) {
  if (first?.value?.length) {
    document.getElementById(last).focus();
  }
}
