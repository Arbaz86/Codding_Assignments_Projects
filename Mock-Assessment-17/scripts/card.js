let showHolderName = document.getElementById("showHolder");
let showCardNumber1 = document.querySelector(".card__nums1");
let showCardNumber2 = document.querySelector(".card__nums2");
let showCardNumber3 = document.querySelector(".card__nums3");
let showCardNumber4 = document.querySelector(".card__nums4");
let showExpiryMonth = document.querySelector(".show__expiry__month");
let showExpiryYear = document.querySelector(".show__expiry__year");
let showCVC = document.querySelector(".show__cvc");

const payBtn = document.getElementById("pay");

let obj = {
  holderName: "",
  cardNumber1: "",
  cardNumber2: "",
  cardNumber3: "",
  cardNumber4: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
};

function handleInput(e, first, last) {
  let { name, value } = e.target;
  obj[name] = value;
  console.log(obj);

  if (first?.value?.length === 4) {
    document.getElementById(last).focus();
  }

  showHolderName.innerHTML = obj.holderName;
  showCardNumber1.innerHTML = obj.cardNumber1;
  showCardNumber2.innerHTML = obj.cardNumber2;
  showCardNumber3.innerHTML = obj.cardNumber3;
  showCardNumber4.innerHTML = obj.cardNumber4;
  showExpiryMonth.innerHTML = obj.expiryMonth;
  showExpiryYear.innerHTML = obj.expiryYear;
  showCVC.innerHTML = obj.cvc;
}

payBtn.addEventListener("click", () => {
  if (
    obj.cardNumber1 &&
    obj.cardNumber2 &&
    obj.cardNumber3 &&
    obj.cardNumber4 &&
    obj.cvc &&
    obj.expiryMonth &&
    obj.expiryYear &&
    obj.holderName
  ) {
    window.location.href = "otp.html";
  } else {
    alert("PLease fill, All the fields");
  }
});
