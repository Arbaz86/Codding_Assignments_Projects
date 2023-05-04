let form = document.getElementById("form");
let registerData = JSON.parse(localStorage.getItem("registration_data")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let uniqueId = form.unique_id.value;
  let userName = form.user_name.value;
  let userAge = form.user_age.value;
  let fromStation = form.from_station.value;
  let toStation = form.to_station.value;
  let journeyDate = form.journey_date.value.split("-").reverse().join("-");
  let seatType = form.seat_type.value;

  if (userAge < 18 || userAge > 40) {
    alert("Age Should be between 18 to 40");
    return;
  }
  if (fromStation === toStation) {
    alert("Please Choose the Destination");
    return;
  }

  let filteredId = registerData.filter((item) => item.uniqueId == uniqueId);
  if (filteredId.length > 0) {
    alert("The ID Is Already exist, Choose Unique ID :)");
    return;
  }

  var otp = Math.floor(Math.random() * 9999);
  if (otp < 1000) {
    otp += 1000;
  }
  alert(`Your OTP Is ${otp}`);

  let payload = {
    uniqueId,
    userName,
    userAge,
    fromStation,
    toStation,
    journeyDate,
    seatType,
    otp,
  };

  registerData.push(payload);
  localStorage.setItem("registration_data", JSON.stringify(registerData));

  form.reset();
});
