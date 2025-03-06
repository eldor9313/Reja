console.log("FrontEnd JS ishga tushdi");

// HTML shablon yaratish.
function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm"
            >
              Edit
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>`;
}

// Element yaratish va ro‘yxatga qo‘shish.
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); // page yangilanishining oldini oladi.

  axios // Serverga yangi reja (reja) jo‘natiladi.
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data)); // yangi <li> ro‘yxatning oxiriga qo‘shiladi.
      // Kiritish maydoni bo‘shatiladi va fokus qayta beriladi
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!");
    });
});

document.addEventListener("click", function (e) {
  // delete operations
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete!")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((resonse) => {
          console.log(resonse.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please try again!");
        });
    }
  }

  // edit operations
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Edit",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Please try again!");
        });
    }
  }
});

// all delete
document.getElementById("clean-all").addEventListener("click", function () {
  if (confirm("Are you sure to delete!")) {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
      // alert(response.data.state);
      document.location.reload();
    });
  }
});
