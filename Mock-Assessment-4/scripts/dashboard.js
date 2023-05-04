let tbody = document.querySelector("tbody");

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let image_url = form.book_img.value;
  let book_name = form.book_name.value;
  let author = form.author.value;
  let genre = form.genre.value;
  let edition = form.edition.value;
  let publisher = form.publisher.value;
  let cost = form.cost.value;
  let borrowed = false;

  let payload = {
    image_url,
    book_name,
    author,
    genre,
    edition,
    publisher,
    cost,
    borrowed,
  };

  addData(payload);
  form.reset();
});

function addData(payload) {
  fetch("https://rich-jade-mite-garb.cyclic.app/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      getData();
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function getData() {
  try {
    let res = await fetch("https://rich-jade-mite-garb.cyclic.app/books");
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error.message);
    return;
  }
}
getData();

function appendData(data) {
  tbody.innerHTML = "";
  data.forEach((el) => {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.innerHTML = el.id;

    let image_url = document.createElement("td");
    let img = document.createElement("img");
    img.src = el.image_url;
    image_url.appendChild(img);

    let book_name = document.createElement("td");
    book_name.innerHTML = el.book_name;

    let author = document.createElement("td");
    author.innerHTML = el.author;

    let genre = document.createElement("td");
    genre.innerHTML = el.genre;

    let edition = document.createElement("td");
    edition.innerHTML = el.edition;

    let publisher = document.createElement("td");
    publisher.innerHTML = el.publisher;

    let cost = document.createElement("td");
    cost.innerHTML = el.cost;

    let borrowed = document.createElement("td");
    borrowed.innerHTML = el.borrowed;

    let edit = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => editData(el));

    edit.appendChild(editBtn);

    let deleteTd = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => deleteData(el));

    deleteTd.appendChild(deleteBtn);

    tr.append(
      id,
      image_url,
      book_name,
      author,
      genre,
      edition,
      publisher,
      cost,
      borrowed,
      edit,
      deleteTd
    );
    tbody.appendChild(tr);
  });
}

function editData(el) {}

function deleteData(el) {
  fetch(`https://rich-jade-mite-garb.cyclic.app/books/${el.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      alert("Deleted Successfully");
      getData();
    })
    .catch((err) => {
      console.log(err.message);
    });
}
