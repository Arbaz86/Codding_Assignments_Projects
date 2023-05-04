let hamContainer = document.querySelector(".hamburger-icon");
let sidebar = document.querySelector(".sidebar");

hamContainer.addEventListener("click", () => {
  hamContainer.innerHTML = "";

  if (sidebar.style.display == "block") {
    sidebar.style.display = "none";
    hamContainer.innerHTML = `<i class="fa-solid fa-bars showSidebar"></i>`;
  } else {
    sidebar.style.display = "block";
    hamContainer.innerHTML = `<i class="fa-solid fa-xmark showSidebar"></i>`;
  }
});
