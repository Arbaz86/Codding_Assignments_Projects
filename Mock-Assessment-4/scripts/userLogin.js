let form = document.querySelector("form");
let userData = JSON.parse(localStorage.getItem("user_data")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = form.email.value;
  let password = form.password.value;

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email == email && userData[i].password == password) {
      alert("login successful");
      window.location.href = "books.html";
      return;
    }
  }

  alert("login failed");
});
