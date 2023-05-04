let bookedTicket = JSON.parse(localStorage.getItem("booked")) || [];
let tbody = document.querySelector("tbody");

function appendData(data) {
  tbody.innerHTML = "";
  data.forEach((el) => {
    console.log("");
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

    tr.append(id, name, age, fromStation, toStation, date, seatType);
    tbody.appendChild(tr);
  });
}

appendData(bookedTicket);

let filterData = bookedTicket;
// filter
document.getElementById("filter_seat_type").addEventListener("change", (e) => {
  let type = e.target.value;

  if (type == "all") {
    filterData = bookedTicket;
    appendData(bookedTicket);
    return;
  }

  let newData = [...bookedTicket];
  filterData = newData.filter((item) => item.seatType == type);

  bookedTicket = [...newData];
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
