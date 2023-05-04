let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = form.email.value;
  let password = form.password.value;

  if (email === "admin@gmail.com" && password === "masai") {
    alert("Login Successfully");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials ");
  }
});
