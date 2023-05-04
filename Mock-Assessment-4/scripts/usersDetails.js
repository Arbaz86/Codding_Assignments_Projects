let userData = JSON.parse(localStorage.getItem("user_data")) || [];
let tbody = document.querySelector("tbody");

function appendData(data) {
  tbody.innerHTML = "";
  data.forEach((el, i) => {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.innerHTML = i + 1;

    let username = document.createElement("td");
    username.innerHTML = el.username;

    let email = document.createElement("td");
    email.innerHTML = el.email;

    let timeStamp = document.createElement("td");
    timeStamp.innerHTML = el.timeStamp;

    tr.append(id, username, email, timeStamp);
    tbody.appendChild(tr);
  });
}

appendData(userData);
console.log(userData);
