let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("user_data")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = form.username.value;
  let email = form.email.value;
  let password = form.password.value;
  let timeStamp = Date.now();

  let payload = {
    username,
    email,
    password,
    timeStamp,
  };

  userData.push(payload);
  localStorage.setItem("user_data", JSON.stringify(userData));
  alert("Signup successfully");

  window.location.href = "userLogin.html";
});
