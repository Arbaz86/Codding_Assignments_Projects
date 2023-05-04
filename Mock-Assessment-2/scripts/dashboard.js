let registerData = JSON.parse(localStorage.getItem("registration_data")) || [];
let tbody = document.querySelector("tbody");
let bookedTicket = JSON.parse(localStorage.getItem("booked")) || [];

function appendData(data) {
  tbody.innerHTML = "";
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.innerHTML = el.uniqueId;

    let name = document.createElement("td");
    name.innerHTML = el.userName;

    let age = document.createElement("td");
    age.innerHTML = el.userAge;

    let fromStation = document.createElement("td");
    fromStation.innerHTML = el.fromStation;

    let toStation = document.createElement("td");
    toStation.innerHTML = el.toStation;

    let date = document.createElement("td");
    date.innerHTML = el.journeyDate;

    let seatType = document.createElement("td");
    seatType.innerHTML = el.seatType;

    let reject = document.createElement("td");
    let rejectBtn = document.createElement("button");
    rejectBtn.innerText = "Reject";
    rejectBtn.className = "red_btn";
    rejectBtn.addEventListener("click", () => rejectData(el.uniqueId));

    reject.appendChild(rejectBtn);

    let confirm = document.createElement("td");
    let confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Confirm";
    confirmBtn.className = "green_btn";
    confirmBtn.addEventListener("click", () => confirmData(el));

    confirm.appendChild(confirmBtn);

    tr.append(
      id,
      name,
      age,
      fromStation,
      toStation,
      date,
      seatType,
      reject,
      confirm
    );
    tbody.appendChild(tr);
  });
}

appendData(registerData);

// reject function
function rejectData(id) {
  let filtered = registerData.filter((item) => item.uniqueId != id);
  registerData = [...filtered];
  localStorage.setItem("registration_data", JSON.stringify(registerData));

  appendData(registerData);
}

// confirm function
function confirmData(data) {
  let otpValue = prompt("Enter Your OTP");
  if (otpValue == null) {
    return;
  }
  if (data.otp != otpValue) {
    alert("Wrong OTP :(");
    return;
  }

  alert(`${data.userName} added to waiting list`);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Yes");
    }, 5000);
  });

  promise.then((res) => {
    alert(`Booking ticket from ${data.fromStation} to ${data.toStation}`);

    setTimeout(() => {
      alert(`Ticket booked for ${data.journeyDate}`);
      bookedTicket.push(data);
      localStorage.setItem("booked", JSON.stringify(bookedTicket));

      let filtered = registerData.filter(
        (item) => item.uniqueId != data.uniqueId
      );
      registerData = [...filtered];
      localStorage.setItem("registration_data", JSON.stringify(registerData));

      appendData(registerData);
    }, 10000);
  });
}

let filterData = registerData;
// filter
document.getElementById("filter_seat_type").addEventListener("change", (e) => {
  let type = e.target.value;

  if (type == "all") {
    filterData = registerData;
    appendData(registerData);
    return;
  }

  let newData = [...registerData];
  filterData = newData.filter((item) => item.seatType == type);

  registerData = [...newData];
  appendData(filterData);
});

// sort by age
document.getElementById("sort_by_age").addEventListener("change", (e) => {
  let type = e.target.value;

  if (type == "asc") {
    filterData.sort((a, b) => a.userAge - b.userAge);
  } else {
    filterData.sort((a, b) => b.userAge - a.userAge);
  }
  appendData(filterData);
});

// sort by Date
document.getElementById("sort_by_date").addEventListener("change", (e) => {
  let type = e.target.value;

  if (type == "asc") {
    filterData.sort(
      (a, b) =>
        +a.journeyDate.split("-").reverse().join("") -
        +b.journeyDate.split("-").reverse().join("")
    );
  } else {
    filterData.sort(
      (a, b) =>
        +b.journeyDate.split("-").reverse().join("") -
        +a.journeyDate.split("-").reverse().join("")
    );
  }
  appendData(filterData);
});
